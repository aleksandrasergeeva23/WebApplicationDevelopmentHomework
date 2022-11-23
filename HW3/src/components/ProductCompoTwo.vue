<template>
<div id= "comp-list-two">
<h1> Posts</h1>
<p class="post" v-for="post in posts" :key="post.id">
<span class="author"> <b>Author:</b> {{post.postAuthotrName}} </span>
<br>
<span class="foto"> <img class="fotoPost" :src = post.postImage></span>
<span class="description"> Description: {{post.postText}} </span> 
<span class="likes"> 
    <button class="btn" @click="increase">Like</button> 
    <h1 class="countOfLikes">{{post.postCounterLike }} Likes</h1>
 </span>
</p> 
</div>
<!---end of the loop-->

</template>


<script>
export default {
    name: "Posts",
    components: {},
    computed: {
        posts(){
            return this.$store.state.posts;
        },
        likeCount(){
            return this.$store.getters.getLikes;
        }
    },
    methods: {
        increase(){
            this.$store.posts.dispatch('changeCount', 1);
        },
    },
}
</script>

<style scoped>
.likes{
    display: block;
    
}
.btn{
    
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    text-align: left;
    
}
.countOfLikes{
    color: black;
    display: inline-block;
    text-align: right;

}
.post{
background: rgb(72, 177, 163);
margin-bottom: 5px;
padding: 3px 5px;
border-radius: 10px;}
#comp-list-two{
background-color: rgb(255, 255, 255);
box-shadow: 1px 2px 50px rgba(0, 0, 0, 0.733);
border-radius: 40px;
margin-top: 40px;
padding: 10px 20px;
margin-left: 230px;
margin-right: 230px;

}
#comp-list-two ul{
padding: 0;
list-style-type: none;
}
#comp-list-two li{
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}
.description{
font-weight: bold;
color: #1c2e2c;
display: block;
}
span{
margin-right: 10px;
}

.fotoPost{
width: 40%;
margin-top: 20px;
border-radius: 10%;


}


.column2 {
        
  float: left;
  width: 20%;
}

</style>