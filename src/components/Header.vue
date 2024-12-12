<template>
  <nav class="header">
    <router-link to="/" >Home</router-link>
    <div class="navbar">
      <router-link to="/page1">Page 1</router-link>
      <router-link to="/page2">Page 2</router-link>
      <router-link to="/page3">Page 3</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa; 
  
}

.navbar {
  display: flex; 
  gap: 1rem;
}

.nav a:hover {
  color: #007bff;
}
</style>