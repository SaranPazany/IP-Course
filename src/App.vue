<template>
  <div class="flex flex-col min-h-screen">
    <Header class="h-[200px]" />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer class="h-[200px]" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

