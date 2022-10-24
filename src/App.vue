<template>
  <div class="body">
    <header-temp class="fixedTop"></header-temp>
    <div class="box"></div>
    <router-view></router-view>
    <div class="container">1 2 3</div>
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
  height: 1300px;
  width: 90%;
  margin: auto;
  background-color: #2c3e50;
}
.box {
  height: 122px;
  /* background: black; */
}
.fixedTop {
  position: fixed;
  width: 80%;
  left: 10%;
  top: 0;
  margin: 0 auto;
  height: auto;
  overflow-y: auto;
  min-height: 60px;
}
</style>
