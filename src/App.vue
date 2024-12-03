<template>
    <div>
      <div class="menu_container">
        <Menu title="Featured Products" :navList="groups"></Menu>
      </div>
      <categories />
      <promotions />
    </div>
    <div class="menu_container">
      <Menu title="Popular Products" :navList="groups" @change-nav="changeProductGroup"></Menu>
    </div>
    <div class="popproduct_container">
    <PopularProduct
      v-for="prod in productsByGroup"
      :image="prod.image"
      :name="prod.name"
      :rating="prod.rating"
      :size="prod.size"
      :price="prod.price"
      :group="prod.group"
    ></PopularProduct>
  </div>

</template>

<script>
import { useProductStore } from './stores/product';
import { mapState } from 'pinia';
import Categories from './views/Categories.vue';
import Promotions from './views/Promotions.vue';
import PopularProduct from "./components/PopularProduct.vue";
import Menu from "./components/Menu.vue";


export default {
  setup() {
    const store = useProductStore()
    return {
      store,
      currentGroupName: "Fruit"
    }
  },
  components: {
    Categories,
    Promotions,
    PopularProduct,
    Menu,
  },

  methods:{
    changeProductGroup(nav){
      this.store.currProductGroup = nav;
    }
  },

  
  computed: {
    ...mapState(useProductStore, {
      categories: "categories",
      products: "products",
      groups: "groups", 
      promotions: "promotions",
      popProducts: "getPopularProducts",
      categoriesByGroup(store) {
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      productsByGroup(store) {
        return store.getProductsByGroup();  
      },
      productsByCategory(store) {
        return store.getProductsByCategory(this.currentGroupName);
      },
    }),
  },

  async mounted() {
    // fetch data from backend
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
    await this.store.fetchGroup();
    console.log(this.store.groups);
  },
}
  
</script>

<style>
.popproduct_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: auto;
}
</style>