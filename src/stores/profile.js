import dummyProfiles from "../data/profiles.json"
import { supabase } from "../utils/supabase"

const store = {
  namespaced: true,
  actions: {
    async fetchProfiles() {
      return await supabase.from('users').select()
    },
    async fetchProfileByUserId({ commit }, userId) {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', userId)
        .single();

      console.log("data", data)  

      return dummyProfiles.find(x => x.id == 1)
    },
    async createProfile() {
      return await supabase.from('users').insert([
        { first_name: "test" }
      ])
    }
  }
}

export default store;