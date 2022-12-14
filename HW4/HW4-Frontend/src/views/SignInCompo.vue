
<template>
    <div id="signinDiv">
    <span class="dataInsertion"><p class="message">Email</p>
    <input type="text" placeholder="edit me" class="input_field" v-model="email" required />
    </span>
    <span v-if="msg.email">{{msg.email}}</span>
    <span class="dataInsertion" ><p class="message">Message</p>
    <textarea v-model="message" placeholder="edit me" class="input_field"></textarea>
    <p style="white-space: pre-line;">{{ message }}</p>
    </span>
    <span v-if="msg.password">{{msg.password}}</span>
    <span><button class="submit">Submit</button></span>
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
}
} 
}
</script>

<style scoped>


#signinDiv{
    background-color: blueviolet;
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