<template>
  <div> 
      <button> <router-link v-bind:to="'/'"> Back </router-link> </button>
      <h1> Enter Code </h1>
      <input>
      <button> <router-link v-bind:to="'/all-items-user'"> Join </router-link> </button>
  </div>
</template>

<script>

export default {
    name: "EnterCode",
}
</script>

<style scoped>


</style>