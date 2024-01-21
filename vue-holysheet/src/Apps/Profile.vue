<template>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Profile</title>
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
            <li><div class="active">
                <RouterLink to="/Menu"> ... </RouterLink>
            </div></li>
        </ul>
   <div class="container">

    <div class="profile-header">
      <img class="profile-picture" src="../assets/profile-icon.jpg" alt="Profile Picture" />
    </div>
    <div class="inner_content" style ="margin-bottom: 10px">
        <li class="posts" style="list-style: none;">
          <div class="stat-number">500</div>
          <div class="stat-label">Posts</div>
        </li>
        <li class="followers" style="list-style: none;">
          <div class="stat-number">500</div>
          <div class="stat-label">Followers</div>
        </li>
        <li class="followings" style="list-style: none;">
          <div class="stat-number">200</div>
          <div class="stat-label">Followings</div>
        </li>
    </div>
    <div class="profile-details">
       <h1 class="username">YourUsername</h1>
    </div>
    <ul class="navbar" style="position: absolute; top: 30%; left: 46%;">
        <li><div class="active">
            <a> edit profile </a>
        </div></li>
    </ul>

  </div>


</div>

</div>
</html>
</template>

<script>

export default {
    name: "Profile_page",
}

//function editProfile() {
    // Add functionality for editing profile
//    alert("Edit profile clicked!");
//}

</script>

<style scoped src="../assets/css/home_page.css">

</style>