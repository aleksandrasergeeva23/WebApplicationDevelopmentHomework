<template> 
    <div class="signup-box"> 
    <h3>Add post</h3> 
    <form> 
      <div class="user-box"> 
        <input type="text" name="body1"> 
        <label for="email">Post body: </label> 
      </div> 
       
        <button @click="AddPost" class="AddPost">Add post</button> 
    </form> 
  </div> 
  </template> 
   
  <script> 
import { setTimeout } from 'timers'; 
 
  export default { 
  name: "body1",  
   
  data: function() { 
      return { 
     body1: '', 
     time, 
      
    } 
    }, 
    methods: { 
 
    },  
    } 
  </script> 
 
<style scoped> 
.signup-box { 
  max-width: 420px; 
  margin: 30px auto; 
  background: rgba(218, 219, 224, 0.534); 
  text-align: left; 
  padding: 40px; 
  border-radius: 10px; 
} 
h3 { 
  text-align: center; 
  color: rgb(255, 255, 255); 
} 
 
.signup-box .user-box { 
  position: relative; 
} 
.signup-box .user-box input { 
  width: 100%; 
  padding: 10px 0; 
  font-size: 16px; 
  color: #fff; 
  margin-bottom: 30px; 
  border: none; 
  border-bottom: 1px solid #fff; 
  outline: none; 
  background: transparent; 
} 
.signup-box .user-box label { 
  position: absolute; 
  top:0; 
  left: 0; 
  padding: 10px 0; 
  font-size: 16px; 
  color: #fff; 
  pointer-events: none; 
  transition: .5s; 
} 
 
.signup-box .user-box input:focus ~ label, 
.signup-box .user-box input:valid ~ label { 
  top: -20px; 
  left: 0; 
  color: #03e9f4; 
  font-size: 12px; 
} 
 
 
 
button { 
  background: rgb(32, 60, 160); 
  border: 0; 
  padding: 10px 20px; 
  margin-top: 20px; 
  color: white; 
  border-radius: 20px; 
  align-items: center; 
  text-align: center; 
} 
</style>