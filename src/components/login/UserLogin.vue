<template>
    <div>
        <div class="login-user">
 <button> <router-link v-bind:to="'/admin-login'"> Log in as Admin </router-link> </button>
        </div>
        <div class="logo">
            
<img src="https://i.ibb.co/DwzHtf7/ujoin-logo2.png" alt="ujoin-logo2" border="0">
        </div>
  
<div class="user-info">
     <p>Please enter your name</p>
<label class="user-name"> Name </label>

     <input type="text" placeholder="Name" />
   
      <button class="join"> <router-link v-bind:to="'/enter-code'"> Join </router-link> </button>
 </div>
    
  
      
    </div>
</template>

<script>
export default {
    name: "UserLogin",
//      created: async function() {
//     const eventId = this.$route.params.eventId
//     console.log('created', eventId)
//       this.event = await this.getEvent(eventId)
//         this.item = await this.createItem(eventId)
//       console.log(this.event)
//    },
}

</script>

<style scoped>


input {
border: solid 1px #2B313F;
outline: none;
padding: 10px 0px 10px 5px;
}

.logo img{
    width: 70%;
}

.logo {
    display: flex;
    justify-content: center;
    margin-top: 120px;
      margin-bottom: 30px;
     
}

.login-user{
display: flex;
justify-content: flex-end;

}


.login-user a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    color: #2B313F;
    font-size: 20px;
    
}

.login-user button {
    border: none;
    background-color: white;
}

.user-info {
    display: flex;
    flex-direction: column;
   justify-content: center;
   margin: 0px 70px 0px 70px;
}

.user-info p {
  font-family: 'Open Sans', sans-serif;
   color: #2B313F;
   font-size: 20px;
   margin-bottom: 30px;
}

.user-name {
font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: #2B313F;
    margin-bottom: 10px;
}

.user-info a {
    text-decoration: none;
  font-family: 'Open Sans', sans-serif;
   color: white;
   font-size: 20px;
   }
   
   .join {
        padding: 5px 7px 5px 7px;
       margin: 50px 60px 0px 60px;
       background-color: #4BACED;
       border: none;
        outline: none;
   }

 @media only screen and (min-width: 768px) {

.logo img{
    width: 40%;
}


.user-info {
   margin: 0px 300px 0px 300px;
}

.user-info p {
    text-align: center;
}

   .join {
        padding: 10px 0px 10px 0px;
       margin: 50px 250px 0px 250px;
       
   }

   .user-info a {
   
   font-size: 30px;
   }


input {
padding: 20px 0px 20px 10px;
}

.user-name {
    font-size: 25px;
  
}

input::placeholder {
  font-size: 15px;
}


 }
  

</style>