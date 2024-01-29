<script>
import axios from "axios";
import {store} from '../data/store';


export default {
  name:'ContactsForm',
  props:{
    apartment_id: Number,
    user_name: String,
    user_surname: String,
  },

  data() {
    return{
      store,
      sender_email:'',
      text:'',
      success:false,
      errors:{
        sender_email:[],
        text:[]
      },
   }

  },
  methods: {
    empyMessageForm(){
      this.success = false;
      this.text = ''
    },
    sendForm(){
      const data = {
        sender_email:this.sender_email,
        text:this.text,
        apartment_id:this.apartment_id
      }
      
      axios.post(store.apiUrl + 'send-email' ,data)
        .then(response => {
          this.success = response.data.success;
          console.log(response);
          if(!this.success){
            this.errors = response.data.errors
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>


<template>
  
 
<form class="modal" id="contact-form" tabindex="-1" @submit.prevent="sendForm()">
  <div  v-if="!success" class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header pt-4">
        <div class="seven">
          <h1 >Invia il messaggio a: {{ user_name + ' ' + user_surname }}</h1>
        </div>
        <button type="button"  data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>
    <div class="modal-body">
     
        <div class="input mb">
          <div class="hidden"><label for="email" class="required">Email</label></div>
          <div class="icon-container"><input autocomplete="off" v-model="sender_email" type="email" name="email" id="email" placeholder="Email" class="icon-content" required><span class="fas fa-envelope icon"></span></div>
          <p class="error-msg" v-for="(error,index) in errors.sender_email" :key="index.error">{{ error }}</p>
        </div>
       
     
    
        <div class="input mb">
          <div class="hidden"><label for="message" class="required"></label></div>
          <div class="icon-container"><textarea v-model="text" name="message" id="message" cols="10" rows="5" placeholder="Scrivi qui il tuo messaggio..." class="icon-content" required></textarea><span class="fas fa-quote-left icon"></span></div>
          <p class="error-msg" v-for="(error,index) in errors.text" :key="index.error">{{ error }}</p>
        </div>
        <div class="input mb">
          <button type="submit" class="btn text-center">Invia il messaggio</button>
        </div>
     
                                      
      </div>                                    
    </div>
  </div>


  <div class="sended modal-dialog modal-dialog-centered" v-else>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary">Messaggio inviato con successo!</h5>
        <button @click="empyMessageForm()" type="button"  data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      </div>                                
    </div>
  </div>
</form>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contact-form">Invia Messaggio</button>
</template>


<style lang="scss" scoped>
.fa-xmark{
  font-size: 1.4rem;
  &:hover {
    color:red;
  }
}
.sended {
  margin-top:40px ;
  h1 {
    color: green;
  }
}

form{
  min-width: 500px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  input {
    margin: 10px 0;
    padding-left: 10px;
    display: block;
    width: 100%;
    height: 30px;
    border-radius: 10px;
  }
  textarea {
    padding: 10px;
    display: block;
    height: 200px;
    width: 100%;
    margin: 10px 0;
  }
  button {
    padding:5px 10px ;
    &:hover {
      scale: 1.1;
      cursor: pointer;
    }
  }
  .error-msg {
    color: red;
    margin: 10px 0;
    font-weight: 700;
  }
}
$shadow: 0px 3px 10px rgba(0,0,0,.10);
$box-padding: .8em;
$color-primary: #f857a8;
$color-secondary:#ff5858;
$color-neutral-lt: #fff;
$color-neutral-med: #ddd;
$headings-font: 'Saira Semi Condensed', sans-serif;

@mixin icon-box{
    background-color: #fff;
    box-shadow: $shadow;
    padding: $box-padding;
}

@mixin no-space{
    padding: 0px;
    margin: 0px;
}

@mixin main-gradient{
    background: $color-primary;
    background: -webkit-linear-gradient(45deg, $color-primary, $color-secondary);
    background: linear-gradient(45deg, $color-primary, $color-secondary);
}

/*-----Reset-----*/
form{
  margin: 0 auto;
  padding: 1em 0;
}

button{
    margin: 0px;
}

input, button{
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
} 

textarea{
    border: none;
}

/*-----Styles-----*/
body {
     background: repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0px, rgba(255,255,255,.05) 2px, rgba(0,0,0,.025) 2px,  rgba(0,0,0,.025) 4px);
    background-attachment: fixed;
    background-size: cover;
    min-height: 100%;
}

button, input, textarea{
  font-family: $headings-font;
}

.hidden {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
 }

.input{
   width: 90%;
   margin:0 auto;
   margin-bottom: .75em;
}

.icon-container{
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    width: 100%;
}

.icon{
    @include icon-box;
    display: inline-block;
    align-self: stretch;
    color: $color-neutral-med;
    transition: color .75s;
}

.icon-content{
    @include icon-box;
    width: 100%;
    z-index: 2;
  
    &:focus{
      outline: 2px solid $color-primary;
    }
  
    &:focus ~ .icon{
    color: $color-primary;
    }
}

.btn{
    color:white;
    cursor: pointer;
    background-color: #0d9bee;
    box-shadow: $shadow;
    width: 100%;
    padding: $box-padding;
    border-radius: 2em;
  
    &:hover{
      @include main-gradient;
      color:  #fff;
      box-shadow: 0px 5px 5px rgba(0,0,0,.125);
      animation-name: button-hover;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(.38,.38,.12,.96);
    }
}

@keyframes button-hover {
    100%{
        @include main-gradient;
        color: $color-neutral-lt;
        border-radius: 0px;
    }
}


// Title form



/* Style 7
   ----------------------------- */

   
   .seven h1 {

    padding-left: 25px;
    font-size:20px; font-weight:300; color:#222; letter-spacing:1px;
}



</style>