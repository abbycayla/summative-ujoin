<template>
  <div> 
       <button> <router-link v-bind:to="'/admin-login'"> Log in as Admin </router-link> </button>
      <label> Name </label>
      <input>
      <button> <router-link v-bind:to="'/enter-code'"> Join </router-link> </button>
  </div>
</template>

<script>

export default {
    name: "UserLogin",

    methods: {
    }
}
</script>

<style scoped>


</style>