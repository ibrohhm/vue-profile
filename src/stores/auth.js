const store = {
  namespaced: true,
  state: {
    currentUserId: 1
  },
  getters: {
    getCurrentUserId(state) {
      return state.currentUserId
    }
  },
}

export default store;