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
            <div class="title">{{ title }}</div>
            <div class = "btn"><Buttons 
                :buttonColor="buttonColor" 
                :label="'Shop Now'" 
                @click="HandleClick" 
            /></div>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.promotion {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 512px;
    height: 300px;
    border-radius: 10px;
    border: 3px solid;
    margin: .5rem;
    box-shadow: 10px 5px 15px grey;
}

.Banners .title {
    white-space: pre-line;
    -webkit-text-stroke: .2px black;
    font-family: "Inter", sans-serif;
    font-size: 1.6em;
    font-weight: 700;
    color: black;
    margin-inline: 2.5rem;
}

.banner-img {
    height: 300px;
    display: flex;
    align-items: end;
}

.banner-image {
    width: 200px;
    height: 190px;
    margin-right: 36px;
}

.Banners .btn{
    margin: 2.5rem;
}

</style>