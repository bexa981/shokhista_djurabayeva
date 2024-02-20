<script setup>
import Left from "../components/LeftMain.vue"
import Right from "../components/RightMain.vue"
</script>
<template>
    <div class="main">
        <Left />
        <Right />
    </div>
</template>
<style scoped>
    


.main {
    display: flex;
    justify-content: space-around;

}

@media only screen and (max-width: 1000px) {
    .main {
        display: flex;
        flex-direction:column;
      align-items:center;
    }
}
</style>
