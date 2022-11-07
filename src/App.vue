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
import global from "./assets/Global";
export default {
  name: "App",
  components: { headerTemp, footerTemp },
  created() {
    localStorage.getItem("localData") &&
      this.$store.replaceState(JSON.parse(localStorage.getItem("localData")));
    global.isLogIn = this.$store.state.isLogin;
    // console.log(localStorage.getItem("localData"));
  },
};
</script>

<style scoped>
.body {
  width: 90%;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
}
.container {
  width: 90%;
  margin: auto;
  background-color: rgb(248, 249, 250);
}
.box {
  height: 122px;
}
</style>
