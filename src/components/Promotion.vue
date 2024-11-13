<template>
    <div class="promotion" 
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :style="{
        hoverStyles,
        backgroundColor: color,
        border: isHovered ? `2px solid blue` : '',
    }">
        <div class="Banners">
            <h2>{{ title }}</h2>
            <Buttons 
                :buttonColor="buttonColor" 
                :label="'Shop Now'" 
                @click="HandleClick" 
            />
        </div>
        <div class="banner-img">
            <img :src="image" :alt="title" class="banner-image">
        </div>
    </div>
</template>

<script>
import Buttons from './Buttons.vue';

    export default {
        components: {
            Buttons
        },

        props: {
            title: String,
            url: String,
            image: String,
            color: String,
            buttonColor: String,
        },

        methods: {
            HandleClick() {
                alert("Let's shop: " + this.title);
            }
        },
        data(){
            return{
                isHovered : false,
            }
        },
    };
</script>

<style scoped>

.promotion {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 500px;
    height: 300px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    margin: 10px;
    transition: all 0.1s ease-in;
}

.Banners {
    width: inherit;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
}

.banner-img {
    height: 300px;
    display: flex;
    align-items: end;
}

.banner-image {
    width: 200px;
    height: 190px;
    margin-right: 20px;
}

button {
    width: 55%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 8px 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

</style>