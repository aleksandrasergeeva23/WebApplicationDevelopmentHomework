<template>
  <nav>
    <router-link to="/">Home</router-link> |
<!--     <router-link to="/signup">SignUp</router-link> | -->
<!--     <router-link to="/login">LogIn</router-link> | -->
    <router-link to="/about">Contact us</router-link>
  </nav>
  <router-view />
</template>

<style>
html {
  background-image: url(https://wallpaperaccess.com/full/5361112.jpg);
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  background-size: cover; 
  

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #a89be0;
}
</style>
