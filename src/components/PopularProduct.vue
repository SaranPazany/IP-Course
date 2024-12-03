<template>
    <div class="container">
        <div class="body_container">
            <img :src="image" alt="popular product image" width="201.89px" height="144.93px">
            <div class="org_name">Hodo Food</div>
            <div class="name">{{ name }} Food Name Exp</div>    
            <div class="rating">({{ rating }})</div>
            <div class="size">{{ size }} gram</div>
            <div class="footer_container">
                <div class="price">${{ price }}</div>
                    <AddBtn></AddBtn>
            </div>
        </div>
    </div>
</template>

<script>
import AddBtn from './AddBtn.vue';

export default{
    props:{
        image: String,
        name: String,
        rating: Number,
        size: String,
        price: Number,
        group: String
    },
    components:{
        AddBtn
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 298px;
    height: 402px;
    border-radius: 10px;
    border: 1.25px solid #A9A9A9;
    margin: .5rem;
    padding-inline: 1rem;
    box-shadow: 10px 5px 15px grey;
    font-family: "Inter", sans-serif;
}

.container:hover{
    border: 1.5px solid black;
    transition-delay: .1s;
}

.container .org_name{
    font-weight: bold;
    color: grey;
    font-size: 1rem;
}

.container .name{
    font-weight: bold;
    color: black;
    font-size: 1em;
}

.container .size,
.container .rating{
    font-weight: 600;
    color: grey;
}

.footer_container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
}
</style>