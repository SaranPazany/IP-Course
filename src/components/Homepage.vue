
   <template>
    <div class="container">
      <nav>
        <section class="header">
         <header></header>
        </section>

        <section class="body">
          <h1 >Welcome to the Homepage</h1>
        </section>

        <section class="footer">

        </section>
      
    </nav>
    
    </div>
    
  </template>
  
<style>

.container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100%; 
  width: 100%; 
 

}
.body{
  justify-content: center;
  height: 80vh;
  display: flex;
  gap: 2rem;
}

.footer{
  display: flex;
  justify-content: center;
}
</style>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
export default {
  name: "Homepage",
  components: {
    Footer,
    Header,
  },
};
</script>