
<template>
    <div id="signinDiv">
    <span class="dataInsertion"><p class="message">Email</p>
    <input type="text" placeholder="edit me" class="input_field" v-model="email" required />
    </span>
    <span class="dataInsertion" ><p class="message">Password</p>
    <input type="text" placeholder="edit me" class="input_field" v-model="password" required/>
    </span>
    <span><button class="submit">Signup</button></span>
    </div>

    <!-- <div id="visa">
    <h1>Create a New Vue Account</h1>
    <form>
      <label for="full name">Full Name:</label>
      <input type="text" v-model="name" required>
      <br>
      <label for="email">Email Address:</label>
      <input type="text" v-model="email" required> <br>
      <span v-if="msg.email">{{msg.email}}</span>
<label for="password">Password:</label>
      <input type="text" v-model="password" required><br>
      <span v-if="msg.password">{{msg.password}}</span>
      <br>
      <label for="twitter">Twitter Handle:</label>
      <input type="text" v-model="twitter" required>

    </form> 
</div> -->

</template>

<script>
export default {
  name: 'Test',
  data(){
    return {
      password: '',
      email: '',
      msg: []
    }
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    }
  },
  methods:{
    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.msg['email'] = '';
  } else{
    this.msg['email'] = 'Invalid Email Address';
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