import dummyProfiles from "../data/profiles.json"

const store = {
  namespaced: true,
  actions: {
    async fetchProfiles() {
      return dummyProfiles
    },
    async fetchProfileByUserId({ commit }, userId) {
      return dummyProfiles.find(x => x.id == userId)
    }
  }
}

export default store;