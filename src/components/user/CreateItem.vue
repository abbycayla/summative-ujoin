<template>
  <div> 
      <h1> Ask a Question </h1>
      <button> <router-link v-bind:to="'/all-items-user'"> Back </router-link> </button>
      <NavBarUser/>
  </div>
</template>

<script>
import NavBarUser from "./NavBarUser"

export default {

    name: "CreateItem",
    components:{
        NavBarUser
    }
}
</script>

<style scoped>

</style>