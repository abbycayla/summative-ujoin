<template>
  <div> 
      <button> <router-link v-bind:to="'/all-items-admin'"> Back </router-link> </button>
      <h1> Question Asked By: </h1>
      <button> <router-link v-bind:to="'/all-items-admin'"> Submit </router-link> </button>
      <NavBarAdmin/>
  </div>
</template>

<script>
import NavBarAdmin from "./NavBarAdmin"

export default {

    name: "ReplyToItem",
    components:{
        NavBarAdmin
    }
}
</script>

<style scoped>

</style>