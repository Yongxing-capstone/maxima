<template>
  <div>??? {{ SigninResult }}???</div>
</template>

<script>
// import global from "@/assets/Global";
export default {
  name: "loginResult",
  computed: {},
  data() {
    return {
      SigninResult: this.$store.state.signinResult,
    };
  },
  created() {
    console.log(this.$store.state.signinResult);
  },
};
</script>

<style>
</style>