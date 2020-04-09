<template>
  <div> 
      <h1> Edit a Question </h1>
      <button> <router-link v-bind:to="'/my-items'"> Back </router-link> </button>
      <NavBarUser/>
  </div>
</template>

<script>
import NavBarUser from "./NavBarUser"

export default {

    name: "EditItem",
    components:{
        NavBarUser
    }
}
</script>

<style scoped>

</style>