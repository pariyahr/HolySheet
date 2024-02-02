<template>
  <ul class="navbar">
    <li><div class="active">
        <RouterLink to="/Explore"> Explore </RouterLink>
    </div></li>
    <li><div class="active" v-if="isSeller">
        <RouterLink to="/Add"> Add </RouterLink>
    </div></li>
    <li><div class="active">
        <RouterLink to="/Profile"> Profile </RouterLink>
    </div></li>
  </ul>
</template>

<script>



export default ({
  name: 'NavbarDisplay',

    props: {
    isSeller: {
      type: Boolean,
      required: true
    }
  }
});
</script>

<style scoped src="../assets/css/home_page.css">
/* Add your navbar styles here */
</style>
