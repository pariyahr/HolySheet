
<template>


  <div class="bg-img">
    <div class="content">
        <header>Holy Sheet</header>

        <div class="field">
            <RouterLink to="/login"> Login </RouterLink>
        </div>
        <div class="field">
            <RouterLink to="/register"> Register </RouterLink>
        </div>
        <div class="copyright">
            <a> © alireza amiri, pariya hajipour, amirreza ghadyani</a>
        </div>
    </div>
</div>
  <RouterView/>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>


<style scoped src="./assets/css/first_page.css">

</style>
