<template>
  <div class="profile-basic">
    <fieldset class="profile-basic--salutation fieldset">
      <legend class="fieldset-legend text-base">Salutation*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-basic--first-name fieldset">
      <legend class="fieldset-legend text-base">First name*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-basic--last-name fieldset">
      <legend class="fieldset-legend text-base">Last Name*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
    <fieldset class="profile-basic--email fieldset">
      <legend class="fieldset-legend text-base">Email address*</legend>
      <input type="text" class="input w-full"/>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "ProfileBasic"
}
</script>
