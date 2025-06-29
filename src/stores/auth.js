import { supabase } from "../utils/supabase"

const store = {
  namespaced: true,
  state: {
    user: null,
    userId: null,
    error: null
  },
  getters: {
    getCurrentUserId(state) {
      if (state.userId) return state.userId;

      const getTokenUserId = (tokenStr) => {
        try {
          const token = JSON.parse(tokenStr);
          if (token.expired_in && new Date(token.expired_in) < new Date()) return 0;
          return token.current_user_id || 0;
        } catch {
          return 0;
        }
      };
    
      const sessionToken = sessionStorage.getItem('auth_token');
      if (sessionToken) return getTokenUserId(sessionToken);
    
      const localToken = localStorage.getItem('auth_token');
      if (localToken) return getTokenUserId(localToken);
    
      return 0;
    },
  },
  mutations: {
    setAuthToken(state, param){
      const authToken = {
        current_user_id: param.userId,
      }

      if(param.keepMeLoggedIn) {
        const now = new Date();
        const oneYearLater = new Date(now.setFullYear(now.getFullYear() + 1));
        authToken.expired_in = oneYearLater.toISOString()

        localStorage.setItem('auth_token', JSON.stringify(authToken))
      }

      sessionStorage.setItem('auth_token', JSON.stringify(authToken));
      state.userId = param.userId
    },
    removeUserId(state){
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');
      state.userId = ""
    }
  },
  actions: {
    async registerUser({commit}, param){
      const { data, error } = await supabase.auth.signUp({
        email: `${param.userId}@my-profile.com`, // required email from supabase
        password: param.password,
        options: {
          data: {
            user_id: param.userId
          }
        }
      })

      if (error) {
        console.error('Signup failed:', error)
      } else {
        commit('setAuthToken', {
          userId: data.user.user_metadata.user_id
        })
      }

      return { data, error }
    },
    async loginUser({commit}, param){
      const { data, error } = await supabase.auth.signInWithPassword({
        email: `${param.userId}@my-profile.com`,
        password: param.password
      })

      if (error) {
        console.error('Login failed:', error)
      } else {
        commit('setAuthToken', {
          userId: data.user.user_metadata.user_id,
          keepMeLoggedIn: param.keepMeLoggedIn
        })
      }

      return { data, error }
    },
    async logout({commit}) {
      await supabase.auth.signOut()
      commit('removeUserId')
    },
    async fetchUser() {
      const { data } = await supabase.auth.getUser()
      this.user = data?.user || null
    }
  }
}

export default store;