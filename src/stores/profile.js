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

      return data
    },
    async createProfile() {
      return await supabase.from('users').insert([
        { first_name: "test" }
      ])
    },
    async updateProfileBasic({ commit, rootGetters }, param) {
      const userId = rootGetters['auth/getCurrentUserId'];
      const { data, error } = await supabase
        .from('users')
        .update(
          { 
            salutation: param.salutation,
            first_name: param.firstName,
            last_name: param.lastName,
            email: param.email,
          }
        )
        .eq('user_id', userId);

      if (error) {
        console.error('update failed:', error)
        return null
      }

      return data  
    },
    async updateProfileAdditional({ commit, rootGetters }, param) {
      const userId = rootGetters['auth/getCurrentUserId'];
      const { data, error } = await supabase
        .from('users')
        .update(
          { 
            address: param.address,
            country: param.country,
            postal_code: param.postalCode,
            gender: param.gender,
            date_of_birth: param.dateOfBirth,
            marital_status: param.maritalStatus
          }
        )
        .eq('user_id', userId);

      if (error) {
        console.error('update failed:', error)
        return null
      }

      return data  
    },
    async updateProfileSpouse({ commit, rootGetters }, param) {
      const userId = rootGetters['auth/getCurrentUserId'];
      const { data, error } = await supabase
        .from('users')
        .update(
          { 
            spouse_salutation: param.salutation,
            spouse_first_name: param.firstName,
            spouse_last_name: param.lastName,
          }
        )
        .eq('user_id', userId);

      if (error) {
        console.error('update failed:', error)
        return null
      }

      return data  
    },
    async updateProfilePreferences({ commit, rootGetters }, param) {
      const userId = rootGetters['auth/getCurrentUserId'];
      const { data, error } = await supabase
        .from('users')
        .update(
          { 
            hobbies_and_interests: param.hobbiesAndInterests,
            favorite_sports: param.favoriteSports,
            preferred_music: param.preferredMusic,
            preferred_movies: param.preferredMovies,
          }
        )
        .eq('user_id', userId);

      if (error) {
        console.error('update failed:', error)
        return null
      }

      return data  
    }
  }
}

export default store;