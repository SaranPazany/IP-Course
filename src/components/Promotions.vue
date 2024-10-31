<template>
  <div :style="{ backgroundColor: color }" class="promotion-banner">
    <div class = "Banner-content">
      <h2>{{ title }}</h2>
      
<Button :bg-btn-color="buttonColor" :message="title" />
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
    imageSrc: String,
    color: String,
    buttonColor: String,
    url: String,
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
  height:300px;
  display:flex;
  align-items: end;
}
.banner-image {

  width: 190px;
  height: 190px;
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
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
