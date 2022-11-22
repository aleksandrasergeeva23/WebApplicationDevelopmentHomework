<template>
  <nav style="bac">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Posts</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
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


</style>
