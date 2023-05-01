<template>
    <div style="display: flex">
        <Navbar v-if="$route.path !== '/login'"/>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}
</style>
<script setup>
import LoginPage from "@/pages/LoginPage.vue";
import Navbar from "@/components/Navbar.vue";
import HomePage from "@/pages/HomePage.vue";
</script>