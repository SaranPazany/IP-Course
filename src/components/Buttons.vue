<template>
    <button>
        <div class="container"> 
            Shop Now 
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20px" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>    
        </div>
    </button>    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-top: .5rem;
    background: green;
}

button:hover {
    background-color: orange;
}

.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px; 
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-optical-sizing: auto;
    font-style: normal;
    color: white;
}
</style>
