<template>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Home</title>
</head>
<div class="bg-img">
    <div class="content">
        <ul class="navbar">
            <li><div class="active">
                <RouterLink to="/Home"> Home </RouterLink>
            </div></li>
            <li><div class="active">
                <RouterLink to="/Explore"> Explore </RouterLink>
            </div></li>
            <li><div class="active">
                <RouterLink to="/Add"> Add </RouterLink>
            </div></li>
            <li><div class="active">
                <RouterLink to="/Profile"> Profile </RouterLink>
            </div></li>
        </ul>

        <div class="container" style="position: absolute; top: 15%; left: 25%;">
            <div class="field" style="width: 150px;">
                <a1>Trending</a1>
            </div>
        </div>
        <div class="container" style="position: absolute; top: 15%; left: 65%;">
            <div class="field" style="width: 150px;">
                <a1>For You</a1>
            </div>
        </div>
    </div>
</div>
</html>
</template>

<script>

export default {
    name: "Home_page",
}
</script>

<style scoped src="../assets/css/home_page.css">

</style>