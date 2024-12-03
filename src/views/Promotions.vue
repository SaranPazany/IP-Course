<template>
    <div class="promotion-list">
        <Promotion
            v-for="(promotion, index) in promotions"
            :key = "index"
            :title = "promotion.title"
            :image = "promotion.image"
            :color = "promotion.color"
            :buttonColor = "promotion.buttonColor"
            :label = "'Shop Now'"
        />
    </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/product";
import Promotion from "@/components/Promotion.vue";

export default {
    components: {
        Promotion
    },
    setup() {
        const store = useProductStore();
        
        const promotions = computed(() => store.promotions);

        onMounted(async () => {
            await store.fetchPromotions();
            console.log("Promotions in component:", promotions.value); 
        });

        return {
            promotions
        };
    }
};
</script>