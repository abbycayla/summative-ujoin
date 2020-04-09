<template>
  <div> 
      <h1> My Questions </h1>
      <button> <router-link v-bind:to="'/all-items-user'"> Back </router-link> </button>
      <button> <router-link v-bind:to="'/edit-item'"> Edit </router-link> </button>
      <NavBarUser/>
  </div>
</template>

<script>
import NavBarUser from "./NavBarUser"

export default {

    name: "MyItems",
    components:{
        NavBarUser
    }
}
</script>

<style scoped>

</style>