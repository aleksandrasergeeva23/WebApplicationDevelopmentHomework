<template>
 <div class="products">
  <product-compo-two></product-compo-two>
 </div>
</template>

<script>
import ProductCompoTwo from "@/components/ProductCompoTwo.vue";
export default {
name: "Posts",
components: { ProductCompoTwo },
data: function() {
return {
posts:[ ]}},

methods: {


}
}
</script>

<style scoped>
button{
background:  rgb(31, 163, 163);
border: 0;
padding: 10px 20px 10px 20px;
margin-top:  20px;
margin-bottom:  20px;
margin-right:  10px;
color: white;
border-radius: 20px;
}
</style>
