<template>
  <div class="profile-additional">
    <fieldset class="profile-additional--home-address fieldset">
      <legend class="fieldset-legend text-base">Home address*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-additional--country fieldset">
      <legend class="fieldset-legend text-base">Country*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-additional--postal-code fieldset">
      <legend class="fieldset-legend text-base">Postal code*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-additional--birth fieldset">
      <legend class="fieldset-legend text-base">Date of birth</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-additional--gender fieldset">
      <legend class="fieldset-legend text-base">Gender</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-additional--marital-status fieldset">
      <legend class="fieldset-legend text-base">Marital status</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfileAdditional"
}
</script>
