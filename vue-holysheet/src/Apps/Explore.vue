<template>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Explore</title>
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
            <li class="search-icon"><a href="#"><i class="fas fa-search"></i></a></li>
        </ul>
        <div class="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
        </div>
<!--        {% if messages %}-->
<!--                {% for message in messages %}-->
<!--                    {% if message.tags %}  <script>alert("{{ message }}")</script> {% endif %}-->
<!--                {% endfor %}-->
<!--            {% endif %}-->
    </div>
</div>
</html>
</template>

<script>

export default {
    name: "Explore_Page",
}
</script>

<style scoped src="../assets/css/home_page.css">

</style>