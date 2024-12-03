<template>
    <div 
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :style = "{
            hoverStyles, 
            backgroundColor: color, 
            border: isHovered ? `2px solid gray` : ''
            }" 
    class="category">
        <img :src="image" :alt="name" class="category-img" />
        <div class = "name">{{ name }}</div>
        <div class = "productCount"> {{ productCount }} Items </div>
    </div>
</template>

<script>
    export default{
        props: {
            name: String,
            productCount: Number,
            image: String,
            color: String,
        },
    data() {
        return {
            isHovered: false,
        };
    },
    };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    border: 3px solid;
    margin: .5rem;
    box-shadow: 10px 5px 15px grey;
}
.category .name{
    -webkit-text-stroke: .2px black;
    color: black;
    margin-top: 0.1rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 1.1em;
  }

.category .productCount {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 1.15em;
    margin-top: 1.3rem;
}

.category-img {
    width: 100px;
    height: 100px;
    margin: 0.5rem;
}

</style>