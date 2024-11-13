<template>
    <div>
      <categories/>
      <promotions/>
    </div>
  <RouterView />
</template>

<script>

import Categories from './views/Categories.vue';
import Promotions from './views/Promotions.vue';

export default {
  components: {
    Categories,
    Promotions,
  },
  data() {
    return {

    };
  },
};

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:black;
  
}
body{
  background-color: rgb(198, 198, 198);
}

</style>


