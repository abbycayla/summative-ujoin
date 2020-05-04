<template>
 <div class="header"> 
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
 <div class="image">
 <img src="@/assets/ujoin-logo-dark.png" alt="ujoin-logo-light">
 </div>
 <h1> Conference Name </h1> 
 </div>
</template>
 
<script>
 
export default {
 name: "HeaderConference",
}
</script>
 
<style scoped>
 
.header {
 font-family: 'Open Sans', sans-serif;
 display: flex;
 justify-content: space-between;
 color: #2B313F;
 background-color: white;
 padding: 30px 20px;
 
}
 
h1 {
 font-size: 1.3em;
 font-weight: lighter;
 color: #28313f;
 margin: 0;
 padding-top: 10px;
}
 
.header img {
 width: 100%;
}

.image {
    width: 120px;
    height: 50px;
}
 
@media only screen and (min-width: 768px) {
.header {
 padding: 20px 40px;
}
 
.header img {
 width: 140px;
}
 
h1 {
 padding-top: 10px;
}
}
 
</style>