
<template>
    <div id="signinDiv">
    <span class="dataInsertion"><p class="message">Email</p>
    <input type="text" placeholder="edit me" class="input_field" v-model="email" required />
    </span>
    <span v-if="msg.email">{{msg.email}}</span>
    <span class="dataInsertion" ><p class="message">Password</p>
    <input type="text" placeholder="edit me" class="input_field" v-model="password" required/>
    </span>
    <span v-if="msg.password">{{msg.password}}</span>
    <span><button class="submit">Signup</button></span>
    </div>
</template>

<script>
export default {

  data(){
    return {
      password: '',
      email: '',
      msg: []
    }
  },
  watch: {
    email(value){
      this.email = value;
      this.validateEmail(value);
    },
    password(value){
        this.password = value;
        this.validatePassword(value);
    }
  },
  methods:{
    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.msg['email'] = '';
  } else {
    this.msg['email'] = 'Invalid Email Address';
  }
},
  validatePassword(value){
      let differenceSmaller = 8 - value.length;
      let differenceBigger = value.length - 8;
      if (value.length<8) {
        this.msg['password'] = 'Must be 8 characters! '+ differenceSmaller + ' characters left' ;
      } else if(value.length>15){
        this.msg['password'] = 'Must be not more than 15 characters! Reduce from '+ differenceBigger + ' characters' ;
      } 
      else if(!/\d/.test(value)){
        this.msg['password'] = 'It must contain at least one digit';
      } else if(!/[A-Z]/.test(value)){
        this.msg['password'] = 'It must contain at least one uppercase letter';
      } else if(!/[a-z]*[a-z]/.test(value)){
        this.msg['password'] = 'It must contain at least two lowercase letters';
      }
      else if(!/[_]/.test(value)){
        this.msg['password'] = 'It must contain at least one underscore';
    }
      else{
        this.msg['password'] = '';
      }
    }
} 
}
</script>

<style scoped>


#signinDiv{
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 2px 50px rgba(0, 0, 0, 0.733);
    border-radius: 40px;
    margin-top: 40px;
    padding: 10px 20px;
    margin-left: 230px;
    margin-right: 230px;
}
.message{
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    display: inline-block;
    text-align: left;
}
.dataInsertion{
    display: block;
}
.input_field{
    display: inline-block;
    text-align: right;
}
.submit{
    background-color: rgb(72, 177, 163);
    color: white;
    font-size: 16px;
    border-radius: 10px;
}


</style>