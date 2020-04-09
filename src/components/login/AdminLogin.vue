<template>
  <div> 
      <button> <router-link v-bind:to="'/'"> Back </router-link> </button>
      <h1> Log in as Admin </h1>
      <label> Username </label>
      <input>
      <label> Password </label>
      <input>
      <button> <router-link v-bind:to="'/create-conference'"> Login </router-link> </button>
  </div>
</template>

<script>

export default {
    name: "AdminLogin",
}
</script>

<style scoped>


</style>