<template>
  <div class="product-list">
    <Products
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :items="product.items"
      :imageSrc="product.imageSrc"
      :bgColor="product.bgColor" />
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
          title: "Buger",
          items: 14,
          imageSrc: "./public/images/Hamburger.svg",
          bgColor: "#F2FCE4",
        },
        {
          title: "Peach",
          items: 17,
          imageSrc: "./public/images/Peach.svg",
          bgColor: "#FFFCEB",
        },
        {
          title: "Organic Kiwi",
          items: 21,
          imageSrc: "./public/images/Kiwi.svg",
          bgColor: "#ECFFEC",
        },
        {
          title: "Red Apple",
          items: 25,
          imageSrc: "./public/images/RedApple.svg",
          bgColor: "#FEEFEA",
        },
        {
          title: "Snack",
          items: 34,
          imageSrc: "./public/images/snacks.svg",
          bgColor: "#FFF3EB",
        },
        {
          title: "Black Ples",
          items: 63,
          imageSrc: "./public/images/BlackPulm.svg",
          bgColor: "#FFF3FF",
        },
        {
          title: "Vegetabe",
          items: 53,
          imageSrc: "./public/images/Vegetables.svg",
          bgColor: "#F2FCE4",
        },
        {
          title: "Headphone",
          items: 25,
          imageSrc: "./public/images/HeadPhone.svg",
          bgColor: "#FFFCEB",
        },
      
        {
          title: "Cake and Milk",
          items: 53,
          imageSrc: "./public/images/CakeAndMilk.svg",
          bgColor: "#F2FCE4",
        },

        {
          title: "Orange",
          items: 63,
          imageSrc: "./public/images/Orange.svg",
          bgColor: "#FFF3FF",
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
