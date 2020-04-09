<template>
  <div> 
      <h1> Conference </h1>
      <button> <router-link v-bind:to="'/edit-conference'"> Edit </router-link> </button>
      <button> <router-link v-bind:to="'/all-items-admin'"> HOST </router-link> </button>
      <NavBarUser/>
  </div>
</template>

<script>

export default {
    name: "ConferenceDetails",
}
</script>

<style scoped>

</style>