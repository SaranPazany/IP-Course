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
        <h3>{{ name }}</h3>
        <p> {{ productCount }} Items </p>
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

.category {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    padding: 10px;
    background-color: #f0f2f5;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3 ease;
}

.category p {
    color: gray;
}

.category-img {
    width: 100px;
    height: 100px;
    margin: 0.5rem;
}

</style>