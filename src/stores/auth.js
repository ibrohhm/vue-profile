import { supabase } from "../utils/supabase"

const store = {
  namespaced: true,
  state: {
    currentUserId: 1,
    user: null,
    userId: null,
    error: null
  },
  getters: {
    getCurrentUserId(state) {
      return state.userId
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
      state.userId = userId
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
        this.error = error.message
        return null
      }

      this.user = data.user
      this.error = null
      return data.user
    },
    async loginUser({commit}, param){
      const { data, error } = await supabase.auth.signInWithPassword({
        email: `${param.userId}@my-profile.com`,
        password: param.password
      })

      if (error) {
        console.error('Login failed:', error)
        this.error = error.message
        return null
      }

      this.user = data.user
      this.error = null
      commit('setUser', data.user)
      commit('setUserId', data.user.user_metadata.user_id)
      return data.user
    },
    async logout() {
      await supabase.auth.signOut()
      this.user = null
    },
    async fetchUser() {
      const { data } = await supabase.auth.getUser()
      this.user = data?.user || null
    }
  }
}

export default store;