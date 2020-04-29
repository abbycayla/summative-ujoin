<template>
  <div> 
    <div class="login-code">
      <div>
<button> <router-link v-bind:to="'/'"> <i class='fas fa-angle-left'></i> </router-link> </button>
      </div>
<div>
 <img src="@/assets/ujoin-logo-light.png" alt="ujoin-logo-light">
</div>

    </div>

      <form @submit="checkForm">
  <div class="code-info">
     <h1> Enter Code  </h1>
     <p>Should be visible on screen </p>
 <input v-model="user.code" type="text" placeholder="Enter code" />

  <input class="join" type="submit" value="Join" />
       
  </div>
  <div>
     <label class="ohnohoney" for="name"> Name</label>
        <input class="ohnohoney" v-model="ohNoHoneyName" id="name" name="name" type="text" />
  </div>




 
</form>
<div v-if="errors.length">
<p>Please correct the errors</p>
<ul>
  <li v-for="error in errors" :key="error">{{ error }}</li>
</ul>
</div>
     
  </div>
      

</template>

<script>
import axios from "axios";
import * as config from "../../../config";

export default {
    name: "EnterCode",
    data: function() {
    return {
      user: {
        code: ''
        },
      ohNoHoneyName: '',
      errors: []
    };
  },
 methods: {
  checkForm: function(evt) {
      evt.preventDefault();

      this.errors = [];

      if (this.user.ohNoHoneyName) {
        this.errors.push("Ha ha got you");
      }
      if (!this.user.code) {
        this.errors.push("Code required");
      }
    
      if (!this.errors.length) {
        this.loginUser();
      }
    },
    loginUser: function() {
        console.log('Ok!')
   
      return axios
        .post(`${config.apiUrl}/users/enter-code`, this.user)
        .then((response) => {
            let user = response.data.user
            if (user){
            localStorage.userCode = user.code
            } else {
              
            }

  
          this.$router.push({ path: "/all-items-user" });
        })
        .catch(function(error) {
      
          console.log(error);
        });
    },
    }
 }

</script>



<style scoped>

.ohnohoney{
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: 1;
} 


.login-code i {
  font-size: 40px;
  color: #f2f2f2;
   margin: 20px 0px 0px 10px;
}

.login-code img {
width: 50%;
margin-left: 70px;
margin-top: 10px;
}

.login-code {
  display: flex;
  background-color: #2B313F;
}

input {
border: solid 1px #2B313F;
outline: none;
padding: 10px 0px 10px 5px;
}


.code-info {
    display: flex;
    flex-direction: column;
   justify-content: center;
   margin: 150px 70px 0px 70px;
}

.code-info h1 {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}

.code-info p {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  margin-top: 50px;
}

.join {
       margin: 100px 60px 0px 60px;
       padding: 5px 7px 5px 7px;
       background-color: #4BACED;
       border: none;
       outline: none;
   }


   .join:hover {
       cursor: pointer;
   }

     input[type=submit] {
    text-decoration: none;
  font-family: 'Open Sans', sans-serif;
   color: white;
   font-size: 20px;
   text-align: center;
   }


   @media only screen and (min-width: 768px) {


.code-info{
   margin: 200px 350px 0px 350px;
}

.code-info h1 {
  font-size: 50px;
}

.code-info p {
  font-size: 20px;
}


   .join {
        padding: 10px 0px 10px 0px;
       margin: 50px 250px 0px 250px;
       
   }


   .code-info a {
   
   font-size: 30px;
   }


input {
padding: 20px 0px 20px 10px;
}


label {
    font-size: 25px;
   
}


.login-code img {
width: 60%;
padding-left: 490px;
margin-top: 10px;
margin-left: 0%;
}





.login-code i {
  font-size: 60px;
  color: #f2f2f2;
   margin: 40px 0px 0px 20px;
}


.login-code button {
border: none;
background-color: #2B313F;
}


input::placeholder {
  font-size: 15px;
}

 }
  



</style>