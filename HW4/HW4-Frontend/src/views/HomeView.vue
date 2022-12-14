<template>
  <div class="header">
        <button v-if = "authResult" @click="Logout" class="center">Logout</button>

    <div class="container">
    </div>
    <div class="post-list" v-for="post in posts"   :key="post.index">  
      <div class="post">
          <h3>  Title:  {{post.title}} </h3>
          <p>  <b> Body: </b> {{post.body}} </p>
      </div>
    </div>
        <div class="container">
        <button v-if = "authResult" @click="start" class="center">Add post</button>
        <!-- <button @click='this.$router.push("/addpost")' class="center">Add post</button> -->
        <button class="center">Delete all</button>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    start() { 
        fetch("http://localhost:3000/auth/start", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/addpost");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
  mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

<style scoped>
body{
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}

.post-list{
  background: rgba(240, 255, 254, 0.767);
  margin-bottom: 28px;
  padding: 15px;
  border-radius: 15px;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 10px ;
}

h3{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
  background: #7e9756;
}
p{
  background: #796dbd;
}
h1, h2, h3, h4, ul, li, a, input, label, button, div, footer{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
}
input{
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;
}
label{
  display: block;
  margin: 20px 0 10px;
}

button {
  background: rgb(195, 159, 224);
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
nav{
  display: flex;
  align-items: center;
}
.post {
    width: 80%;
    position: relative;
    margin: 10px auto;
    text-align: left;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
</style>