<template>
  <nav style="bac">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Posts</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <div class="foother" style="background-color: #31786f;padding-top: 20px;margin-top:20px;">
        
    <div class="row">
  <div class="column" style="width: 70%;padding-left: 30px;">
    <p>email:xxx@xxx.com</p> 
    <p>telephone number:xxx@xxx.com</p> 
    <p>About us</p>
    <p>Company rules and private politic</p>  
  </div>
  <div class="column" style="width: 20%;">
    <img src="https://www.digiseller.ru/preview/820112/p1_3446492_0d1672a2.png" alt="" style="width: 39px; margin: 10px;"><br>
    <img src="https://www.digiseller.ru/preview/820112/p1_3446492_0d1672a2.png" alt="" style="width: 39px; margin: 10px;">

  </div>
</div>
        
        
   <p style="margin: 0px;padding-bottom:10px">@Safe&Comfort</p>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(https://i.pinimg.com/originals/05/2c/77/052c779c22d9d7972e9d1e2b42dffd83.jpg);
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  backdrop-filter: blur(6px); 
  background-size: cover; 
  
}

body{
  margin: 0px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.column {
  float: left;
  text-align: left;
  
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}


</style>
