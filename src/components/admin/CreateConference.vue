<template>
  <div> 
      <button> <router-link v-bind:to="'/admin-login'"> Back </router-link> </button>
      <h1> Create a Conference </h1>
      <button> <router-link v-bind:to="'/conference-details'"> Create </router-link> </button>
  </div>
</template>

<script>
export default {
    name: "CreateConference"
}
</script>

<style scoped>

</style>