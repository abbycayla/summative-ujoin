<template>
  <div class="header"> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
        <img src="@/assets/ujoin-logo-light.png" alt="ujoin-logo-light">
      <h1> Logout </h1> 
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
    background-color: #454c45;
    padding: 30px 40px;
    margin-bottom: 7%;
}

h1 {
    font-size: 1.3em;
    font-weight: lighter;
}

.header img {
    width: 100px;
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