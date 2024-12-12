<template>
  <div class="section1">
    <div class="navbar1">
      <router-link
        class="link"
        to="/section1"
        :class="{ active: $route.path === '/section1' }"
        >Section1</router-link
      >
    </div>
  
    <h2>This is Section 1 of Page 1</h2>
    <p>Content for section 2 goes here.</p>
  </div>
</template>

<style scoped>
.section1 {
  padding: 1rem;
  height: calc(100vh - 400px);
  overflow-y: auto;
}
</style>

<script>
export default {
  name: "section1",
};
</script>