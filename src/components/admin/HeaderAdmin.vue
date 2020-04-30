<template>
 <div class="header"> 
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
 <div class="image">
 <img src="@/assets/ujoin-logo-light.png" alt="ujoin-logo-light">
 </div>
 <h1> 
 <router-link v-bind:to="'/'"> Logout </router-link>
 </h1> 
 </div>
</template>
 
<script>
export default {
 name: "HeaderAdmin",
}
</script>
 
<style scoped>
.header {
 font-family: 'Open Sans', sans-serif;
 display: flex;
 justify-content: space-between;
 color: white;
 background-color: #2B313F;
 padding: 30px 20px;
 margin-bottom: 5%;
 /* height: 100px; */
}
 
h1 a{
 font-size: .7em;
 font-weight: 200;
 color: white;
 text-decoration: none;
}

h1 {
    margin: 0;
}
 
.header img {
 width: 100%;
}
 
.image {
 width: 100px;
}
 
@media only screen and (min-width: 768px) {
 
.header {
 padding: 20px 40px;
 margin-bottom: 3%;
}
 
.header img {
 width: 140px;
}
 
h1 a{
 padding-bottom: 10px;
}
}
 
</style>