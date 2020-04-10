<template>
  <div class="header"> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
        <img src="@/assets/ujoin-logo-dark.png" alt="ujoin-logo-light">
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
    color: #454c45;
    background-color: white;
    padding: 30px 40px;
    margin-bottom: 7%;
}

h1 {
    font-size: 1.3em;
    font-weight: lighter;
}

.header img {
    width: 80px;
}


</style>