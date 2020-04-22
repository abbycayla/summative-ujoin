<template>
  <div> 
    <div class="login-admin">
      <div>
<button> <router-link v-bind:to="'/'"> <i class='fas fa-angle-left'></i>  </router-link> </button>
      </div>

<div>
<img src="https://i.ibb.co/DwzHtf7/ujoin-logo2.png" alt="ujoin-logo2" border="0"> 
</div>
    </div>
  <form @submit="checkForm">
  <div class="admin-info">
     <h1> Log in  </h1>
 <label  for="firstName">Email</label>
 <input v-model="user.email" type="text" placeholder="Email" />
  <input class="join" type="submit" value="Login" />
       
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
name: "Login",
 data: function() {
    return {
      user: {
        email: ''
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
      if (!this.user.email) {
        this.errors.push("Email required");
      }
    
      if (!this.errors.length) {
        this.loginUser();
      }
    },
    loginUser: function() {
        console.log('Ok!')
   
      return axios
        .post(`${config.apiUrl}/users/admin-login`, this.user)
        .then((response) => {
            let user = response.data.user
            if (user){
            localStorage.userEmail = user.email
            } else {
                //show message?
            }

            // console.log('user', response.data.user)
          this.$router.push({ path: "/create-conference" });
        })
        .catch(function(error) {
          // handle error
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


.login-admin i {
  font-size: 30px;
  color: #f2f2f2;
   margin: 20px 0px 0px 10px;
}

.login-admin img {
width: 50%;
padding-left: 60px;
margin-top: 10px;
}

.login-admin {
  display: flex;
  background-color: #2B313F;
}

.admin-info{
 display: flex;
    flex-direction: column;
   justify-content: center;
   margin: 90px 70px 0px 70px;
}

.admin-info h1 {
 text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 50px;
}

input {
border: solid 1px #2B313F;
outline: none;
padding: 10px 0px 10px 5px;
}

label {
font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    color: #2B313F;
    margin-bottom: 10px;
}

.join {
       margin: 50px 60px 0px 60px;
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


  #password {
    margin-top: 20px;
  }




 @media only screen and (min-width: 768px) {

.admin-info{
   margin: 90px 350px 0px 350px;
}



   .join {
        padding: 10px 0px 10px 0px;
       margin: 50px 250px 0px 250px;
       
   }


   .admin-info a {
   
   font-size: 30px;
   }


input {
padding: 20px 0px 20px 10px;
}


label {
    font-size: 25px;
   
}


.login-admin img {
width: 15%;
padding-left: 550px;
margin-top: 10px;
}

.login-admin button {
border: none;
background-color: #2B313F;
}




.login-admin i {
  font-size: 40px;
  color: #f2f2f2;
   margin: 30px 0px 0px 20px;
}

input::placeholder {
  font-size: 15px;
}

 }
  

</style>