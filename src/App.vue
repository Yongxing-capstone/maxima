<template>
  <div class="body">
    <header-temp class="fixedTop"></header-temp>

    <div class="container"><router-view></router-view></div>
    <footer-temp></footer-temp>
  </div>
</template>
<script>
import headerTemp from "./assets/header.vue";
import footerTemp from "./assets/footer.vue";
export default {
  name: "App",
  components: { headerTemp, footerTemp },
};
</script>

<style scoped>
.body {
  width: 90%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
}
.container {
  /* height: 1300px; */
  width: 90%;
  margin: auto;
  background-color: rgb(248, 249, 250);
}
.box {
  height: 122px;
  
}

</style>
