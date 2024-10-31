<template>
  <div :style="{ backgroundColor: bgColor }" class="promotion-banner">
    <div class = "Banner-content">
      <h2>{{ title }}</h2>
      

<Button :bg-btn-color="bgBtnColor" :label = "label"/>
    </div>
    <div class="bannerImg">
      <img :src="imageSrc" :alt="title" class="banner-image" />
    </div>
  </div>
</template>

<script>

import Button from './Button.vue';

export default {
  components:{
    Button,
  },
  props: {
    title: String,
    // description: String,
    imageSrc: String,
    bgColor: String,
    bgBtnColor: String,
    label: String,
  },
  method: {
    shopNow() {
      alert("Redirecting to shop!");
    },
  },
};
</script>

<style scoped>

.Banner-content{
  width: inherit;
  height: 60%;  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
}
.promotion-banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  height: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 10px;
}


.bannerImg {
  /* width: 300px; */
  height:300px;
  display:flex;
  align-items: end;
}
.banner-image {

  width: 190px;
  height: 190px;
  /* object-fit: cover; */
  margin-right: 20px;
}
.banner-content {
  flex: 1;
}


button {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
 justify-items: center;
  padding: 8px 16px;
  color: white;
  /* background-color: #36b37e; */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
