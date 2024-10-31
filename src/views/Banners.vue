<template>
  <div class="promotion-banner-list">
    <Promotions
      v-for="(banner, index) in banners"
      :key="index"
      :title="banner.title"
      :description="banner.description"
      :imageSrc="banner.imageSrc"
      :bgColor="banner.bgColor"
      :bgBtnColor="banner.bgBtnColor"
      :label="banner.label" />
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
          description: "Try it!",
          imageSrc: "./public/images/union.jpg",
          bgColor: "#F0E8D5",
          bgBtnColor: "#36b37e",
          label: "Shop Now",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          description: "Try it!",
          imageSrc: "./public/images/milk.png",

          bgColor: "#F3E8E8",
          bgBtnColor: "#36b37e",
          label: "Shop Now",
        },
        {
          title: "The best Organic Products Online",
          description: "Try it!",
          imageSrc: "./public/images/vegetable.jpg",
          bgColor: "#E7EAF3",
          bgBtnColor: "#36b37e",
          label: "Shop Now",
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
  /* justify-content: space-around; */
  /* padding: 20px; */
  /* background-color: #f0f2f5; */
}
</style>
