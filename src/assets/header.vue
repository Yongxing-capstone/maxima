<template>
  <div class="body">
    <div class="icon">
      <img src="../images/iconPng.png" alt="" srcset="" id="icon" />
      <h1 id="title">Maxima</h1>
    </div>
    <div class="outerBox">
      <div class="nav">
        <router-link class="navItem" active-class="navActive" to="/"
          >Home</router-link
        >
        <router-link class="navItem" active-class="navActive" to="/about"
          >About</router-link
        >
        <router-link class="navItem" active-class="navActive" to="/post"
          >Post</router-link
        >
        <router-link class="navItem" active-class="navActive" to="/order"
          >Order</router-link
        >
        <router-link class="navItem" active-class="navActive" to="/login"
          >Log in</router-link
        >
        <router-link class="navItem" active-class="navActive" to="/profile"
          >Profile</router-link
        >
        <el-button :type="btnType" @click="btnHandle">
          {{ isLogin ? "Log out" : "Sign in/Log in" }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import global from "./Global.js";
export default {
  name: "headerTemp",
  components: {},
  data() {
    return {
      isLogin: global.isLogIn,
    };
  },
  computed: {
    btnType() {
      return this.isLogin ? "warning" : "success";
    },
  },
  methods: {
    btnHandle() {
      window.localStorage.clear();
      this.$store.commit("clearAll");
      console.log(this.isLogin, "btn handle");
      if (this.isLogin) {
        // log out
        this.$router.push("/");
        window.location.reload();
        global.isLogIn = false;
      } else {
        this.$router.push("/login");
      }
    },
  },
  updated() {},
  created() {
    console.log(global, "???");
  },
};
</script>

<style scoped>
.body {
  background: #fff;
  margin: auto;
}

#icon {
  float: left;
}
#title {
  text-align: left;
  line-height: 48px;
  margin-left: 7%;
  margin-bottom: 5px;
}
.icon {
}
.navItem {
  margin: 5px 20px;
  color: #fff;
  text-decoration: none;
}
.navActive {
  color: #b3b3b3;
  text-decoration: underline;
}
.outerBox {
  height: 40px;
  background-color: rgb(0, 80, 239);
  margin: auto 0;
  padding: 5px 0;
  padding-bottom: 11px;
}
.nav {
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  display: flex;
  margin: auto;
  background-color: rgb(0, 80, 239);
  padding: 5px 0;
  height: 30px;
  line-height: 20px;
}
</style>
