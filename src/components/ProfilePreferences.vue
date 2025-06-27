<template>
  <div class="profile-preferences">
    <fieldset class="profile-preferences--hobby fieldset">
      <legend class="fieldset-legend text-base">Hobby and interests</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-preferences--sport fieldset">
      <legend class="fieldset-legend text-base">Favorite sport(s)</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-preferences--music fieldset">
      <legend class="fieldset-legend text-base">Preferred music genre(s)</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-preferences--movie fieldset">
      <legend class="fieldset-legend text-base">Preferred movie/TV show(s)</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfilePreferences"
}
</script>
