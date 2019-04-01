
<template>
<div>
  <navbar></navbar>
      <div class="contact-form">
     <hr>
        <form @submit.prevent="onLoginChlicked">
            <div class="form-group">
                <span>Name: <b>*</b></span>
                <input type="text" id="username"  placeholder="Username" v-model="name" class="form-control" 
                v-bind:class="{ 'error-border': inputNameError }" />
                <div class="alert alert-danger" v-if="showNameError" role="alert">
                    Please enter the correct Name
                </div>
                <hr>


            </div>
  <br>
  
            <div class="form-group">
              <span>E-mail: <b>*</b></span>
              
                <input type="text" id="password" placeholder="mail"  v-model="mail" class="form-control" 
                v-bind:class="{ 'error-border': inputmailError }" />
                <div class="alert alert-danger" v-if="showmailError" role="alert">
                    Please enter the correct mail
                </div>
                 <hr>   
            </div>
            <br>
               <div class="form-group">
              <span>Phone number: <b>*</b></span>

                <input type="text" id="number" placeholder="phone"  v-model="number" class="form-control" 
                v-bind:class="{ 'error-border': inputNumberError }" />
                <div class="alert alert-danger" v-if="showNumberError" role="alert">
                    Please enter the correct phone number
                </div>
                  <hr>  
            </div>
 <br>
            <span>Give us some feedback: </span>
                <textarea  class="textarea" placeholder="Some text..."></textarea><br>

            <button class="button" type="submit">Send</button>
        </form>
    </div>
</div>
</template>

<script>

import Navbar from "../Navbar/NavBar";

export default {
    name: 'ContactForm',
    
      components: {
    
      Navbar,
  },
        props: {
            message: String,
            showNameError: Boolean,
            inputNameError: Boolean,
            
            showmailError: Boolean,
            inputmailError: Boolean,
            
            inputNumberError: Boolean,
            showNumberError: Boolean,
        },
        data() {
            return {
                name: "",
                mail: "",
                number: "",
    
            }
        },
         methods: {
            onLoginChlicked() {
              
            

            if (!this.name) {
                this.showNameError = true;
                this.inputNameError = true;
           
            } 
            
            if (!this.mail) {
                this.showmailError = true,
                this.inputmailError = true;
               
                
            }  
            
            if (!this.number){
            this.inputNumberError=true;
            this.showNumberError= true;
            
            }
            
            
            
            if (this.showmailError == false &&
                this.showNameError == false &&
                this.showNumberError == false)
                {
        
                  swal({
                    text: "Thank you so much for your feedback",
                    icon: "success",
                    button: "back",
                    });
            }
              
              
            }
        }
}
</script>
<style lang="scss" scoped>
$mainColr: #424651;
$secuderColor: #A75432;
   .contact-form {
        padding: 20px;
        margin: auto;
        max-width: 600px;
        display: block;
        background-color: #ccc;
    .form-control{
         margin:15px auto;
         width: 100%;
         box-sizing: border-box;
         padding: 10px;
         border-radius: 3px;
        border: 2px solid #ccc;
    }
    .textarea{
        margin:  auto;
        
       -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
    max-width: 100%;
       height: 100px;
       max-height: 100px;
        border: none;
        outline: none; // this one

    }
    b{
        color: rgba(255, 0, 0, 0.639);
    }

    .button{
        margin: 10px auto;
        display: block; 
        font-size: 14px;
        width: 50%;
        
        background-color: rgb(198, 195, 195);
        padding: 5px;
        border-radius: 3px;
     
        outline: none; // this one
    }
  
    .error-border {
        border: 1px solid red;
    }
      }
</style>
