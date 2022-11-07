<template>
  <div class="my_page">
    <el-input v-model="input"></el-input>
    {{ result }}
  </div>
</template>

<script>
export default {
  name: "aboutPage",
  components: {},
  data() {
    return {
      input: "",
    };
  },
  computed: {
    result() {
      let out = this.$AES_Encrypt(this.input);
      return out;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
</style>
