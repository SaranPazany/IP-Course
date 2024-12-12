<template>
  <div class="page1">
    <div class="menu">
      <h2>Menu</h2>
      <nav class="navbar1">
        <router-link to="section1">Section 1</router-link>
        <router-link to="/page1/section2">Section 2</router-link>
        <router-link to="/page1/section3">Section 3</router-link>
      </nav>
    </div > 
    
  </div>
      <section class="body">
          <h1 >Welcome to Page 1</h1>
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
.navbar1{
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
  name: "page1",
};
</script>