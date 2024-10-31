<template>
  <div class="promotion-banner-list">
    <Promotions
      v-for="(banner, index) in banners"
      :key="index"
      :title="banner.title"
      :imageSrc="banner.imageSrc"
      :color="banner.color"
      :buttonColor="banner.buttonColor" />
  </div>
</template>
<script>
import Promotions from "@/components/Promotions.vue";
export default {
  components: { Promotions },
  data() {
    return {
      banners: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          imageSrc: "./public/images/union.jpg",
          color: "#F0E8D5",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          imageSrc: "./public/images/milk.png",

          color: "#F3E8E8",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
        {
          title: "The best Organic Products Online",
          imageSrc: "./public/images/vegetable.jpg",
          color: "#E7EAF3",
          buttonColor: "#36b37e",
          url: "https://www.google.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.promotion-banner-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
