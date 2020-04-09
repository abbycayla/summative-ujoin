<template>
  <div> 
      <h1> All Questions </h1>
      <h2> <router-link v-bind:to="'/reply-to-item'"> Question jdnijksnvkd </router-link> </h2>
      <NavBarAdmin/>
  </div>
</template>

<script>
import NavBarAdmin from "./NavBarAdmin"

export default {

    name: "AllItemsAdmin",
    components:{
        NavBarAdmin
    }
}
</script>

<style scoped>


</style>