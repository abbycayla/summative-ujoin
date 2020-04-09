<template>
  <div> 
      <h1> Edit Conference </h1>
      <button> <router-link v-bind:to="'/conference-details'"> Back </router-link> </button>
      <button> <router-link v-bind:to="'/create-conference'"> Delete </router-link> </button>
  </div>
</template>

<script>
export default {
    name: "EditConference",
}
</script>

<style scoped>

</style>