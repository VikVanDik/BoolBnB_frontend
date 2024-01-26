<script>
import axios from "axios";
import {store} from '../data/store';


export default {
  name:'ContactsForm',
  props:{
    apartment_id: Number,
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
  
 
<form   class="modal" id="invisible-form" tabindex="-1" @submit.prevent="sendForm()">
  <div  v-if="!success" class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary">Invia il messaggio</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <div class="modal-body">
      <div>
        <label for="email" ><strong class="text-primary">Email</strong></label>
        <input v-model="sender_email" type="text" id="email" name="email" >
        <p class="error-msg" v-for="(error,index) in errors.sender_email" :key="index.error">{{ error }}</p>
      </div>
      <div>
        <label for="message" ><strong class="text-primary">Messaggio</strong> </label>
        <textarea v-model="text" id="message" name="message" ></textarea>
        <p class="error-msg" v-for="(error,index) in errors.text" :key="index.error">{{ error }}</p>
      </div>
      <button type="submit">Submit</button>                                  
      </div>                                    
    </div>
  </div>
  <div class="sended modal-dialog modal-dialog-centered" v-else>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary">Messaggio inviato con successo!</h5>
        <button @click="empyMessageForm()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>                                
    </div>
  </div>
</form>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#invisible-form">Invia Messaggio</button>
</template>


<style lang="scss" scoped>

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

</style>