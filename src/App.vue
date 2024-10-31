<template>
  <div>
 
   <Categories/>
   <Banners/>
 
   </div>
 
  
   <RouterView />
 </template>
 
 <script>
 import Categories from "./views/Categories.vue";
 import Banners from "./views/Banners.vue";
 
 export default {
   components: {
     Categories,
     Banners,
    
   },
 
   data() {
     return {
      
 
     
     };
   },
 };
 </script>
 
 <style scoped>
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color:black;
   
 }
 body{
   background-color: rgb(198, 198, 198);
 }
 
 </style>
 