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
      return state.userId || localStorage.getItem('current_user_id')
    },
    getCurrentUser(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUserId(state, userId){
      localStorage.setItem('current_user_id', userId);
      state.userId = userId
    },
    removeUserId(state){
      localStorage.setItem('current_user_id', "");
      state.userId = null
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
        commit('setUser', data.user)
        commit('setUserId', data.user.user_metadata.user_id)
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
        commit('setUser', data.user)
        commit('setUserId', data.user.user_metadata.user_id)
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