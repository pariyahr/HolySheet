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
        </ul>
<!--        {% if messages %}-->
<!--                {% for message in messages %}-->
<!--                    {% if message.tags %}  <script>alert("{{ message }}")</script> {% endif %}-->
<!--                {% endfor %}-->
<!--            {% endif %}-->
    </div>

    <div class="profile-page">
    <div class="profile-header">
      <img class="profile-picture" src="path/to/profile-picture.jpg" alt="Profile Picture" />
      <div class="profile-details">
        <!-- Profile details like username, bio, etc. -->
      </div>
      <div class="profile-actions">
        <!-- Follow/Unfollow button, Edit Profile, etc. -->
      </div>
    </div>

    <div class="profile-content">
      <div class="profile-stats">
        <div class="followers">
          <span class="stat-number">500</span>
          <span class="stat-label">Followers</span>
        </div>
        <div class="followings">
          <span class="stat-number">200</span>
          <span class="stat-label">Followings</span>
        </div>
      </div>

      <!-- Other content specific to the profile, posts, etc. -->

    </div>

    <div class="options-menu">
      <!-- Three-dot menu content -->
    </div>
  </div>

</div>
</html>
</template>

<script>

export default {
    name: "Profile_page",
}
</script>

<style scoped src="../assets/css/home_page.css">

</style>