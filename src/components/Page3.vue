
<template>
  <div class="page3">
    <div class="menu">
      <h2>Menu</h2>
      <nav class="navbar">
        <router-link to="/page3/section1">Section 1</router-link>
        <router-link to="/page3/section2">Section 2</router-link>
        <router-link to="/page3/section3">Section 3</router-link>
      </nav>
    </div > 
    
  </div>
      <section class="body">
          <h1 >Welcome to Page 3</h1>
        </section>
</template>

<style>
.page1{
  display: flex;
  height: 100%; 
  width: 100%; 
}
.manu{
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa; 
}
.navbar{
  display: flex; 
  gap: 1rem;
}
.body{
  justify-content: center;
  height: 80vh;
  display: flex;
  gap: 2rem;
}
</style>

<script>
export default {
  name: "page3",
};
</script>
