<template>
    <div class="banner-list">
        <Promotion
            v-for="(banner, index) in banners"
            :key = "index"
            :title = "banner.title"
            :image = "banner.image"
            :color = "banner.color"
            :buttonColor = "banner.buttonColor"
            :label = "'Shop Now'"
        />
    </div>
</template>

<script>
import axios from "axios";
import Promotion from "@/components/Promotion.vue";

export default {
    components: {
        Promotion
    },
    data() {
        return {
            banners: [ ],
        };
    },
    methods: {
    fetchPromotion() {
        axios
            .get("http://localhost:3000/api/promotions")
            .then((response) => {
            console.log(response.data);

            this.banners = response.data;
            })
                .catch((error) => {
                console.error("Error fetching data:", error);
            });
        },
    },

    async mounted() {
        this.fetchPromotion();
    },
};
</script>

<style scoped>
.banner-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
} 


</style>