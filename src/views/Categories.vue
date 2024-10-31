<template>
  <div class="product-list">
    <Products
      v-for="(product, index) in products"
      :key="index"
      :name="product.name"
      :productCount="product.productCount"
      :imageSrc="product.imageSrc"
      :color="product.color" />
  </div>
</template>
<script>    
import Products from "@/components/Products.vue";

export default {
  components: { Products },
  data() {
    return {
      products: [
        {
          name: "Buger",
          productCount: 14,
          imageSrc: "./public/images/Hamburger.svg",
          color: "#F2FCE4",
        },
        {
          name: "Peach",
          productCount: 17,
          imageSrc: "./public/images/Peach.svg",
          color: "#FFFCEB",
        },
        {
          name: "Organic Kiwi",
          productCount: 21,
          imageSrc: "./public/images/Kiwi.svg",
          color: "#ECFFEC",
        },
        {
          name: "Red Apple",
          productCount: 25,
          imageSrc: "./public/images/RedApple.svg",
          color: "#FEEFEA",
        },
        {
          name: "Snack",
          productCount: 34,
          imageSrc: "./public/images/snacks.svg",
          color: "#FFF3EB",
        },
        {
          name: "Black Ples",
          productCount: 63,
          imageSrc: "./public/images/BlackPulm.svg",
          color: "#FFF3FF",
        },
        {
          name: "Vegetabe",
          productCount: 53,
          imageSrc: "./public/images/Vegetables.svg",
          color: "#F2FCE4",
        },
        {
          name: "Headphone",
          productCount: 25,
          imageSrc: "./public/images/HeadPhone.svg",
          color: "#FFFCEB",
        },
      
        {
          name: "Cake and Milk",
          productCount: 53,
          imageSrc: "./public/images/CakeAndMilk.svg",
          color: "#F2FCE4",
        },

        {
          name: "Orange",
          productCount: 63,
          imageSrc: "./public/images/Orange.svg",
          color: "#FFF3FF",
        },
      ],
    };
  },
};
</script>
<style scoped>
.product-list {
  display: flex;
  
  flex-wrap: wrap;
  width: 100vw;
 
}
.product-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-bottom: 8px;
}
</style>
