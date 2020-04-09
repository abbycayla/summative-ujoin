<template>
  <div> 
      <ul>
          <li> <router-link v-bind:to="'/all-items-admin'"> All Questions </router-link> </li>
          <li> <router-link v-bind:to="'/conference-details'"> End Conference  </router-link> </li>
      </ul>
  </div>
</template>

<script>

export default {
    name: "NavBarUser",
}
</script>

<style scoped>

h1 {
    text-align: center;
    font-weight: lighter;
}


</style>