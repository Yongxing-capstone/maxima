<template>
  <div class="my_page">
    <div class="Image">
      <el-avatar id="avatar" :size="100" :src="imgsrc" />
      <h2>
        <span id="fn">{{ userData.first_name }} &nbsp;</span>
        <span id="ln">{{ userData.last_name }}</span>
      </h2>
      <h3>{{ userData.role }}</h3>
    </div>
    <!-- end Image-->

    <h1>Modify your Imformation</h1>
    <div class="personalInfo border">
      <el-form
        :inline="'true'"
        label-position="top"
        disabled="InfoWriteAble"
        size="large"
      >
        <el-form-item label="First Name">
          <el-input v-model="modifyData.first_name" />
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="modifyData.last_name" />
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="modifyData.phone" />
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="modifyData.address" />
        </el-form-item>
      </el-form>
    </div>
    <!--end personalInfo-->
    <div class="PasswordField border">
      <el-form
        :inline="'true'"
        label-position="top"
        disabled="PassWriteAble"
        size="large"
      >
        <el-form-item label="Old Pass">
          <el-input v-model="updatePass.oldPass" />
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="updatePass.newPass" />
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="updatePass.comPass" />
        </el-form-item>
      </el-form>
    </div>
    <!--end personalInfo-->
  </div>
</template>

<script>
export default {
  name: "prfilePage",
  components: {},
  data() {
    return {
      userData: this.$store.state.userData,
      imgsrc: "",
      modifyData: {},
      InfoWriteAble: false,
      PassWriteAble: false,
      updatePass: {
        oldPass: "",
        newPass: "",
        comPass: "",
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getPicture();
    this.modifyData = this.cloneObj(this.userData);
  },
  mounted() {},
  methods: {
    async getPicture() {
      let _this = this;
      let body = { user_id: _this.userData.user_id };
      await this.$axios({
        method: "get",
        url: "/images",
        params: body,
        responseType: "blob",
      }).then(({ data }) => {
        console.log(data);
        let url = window.URL.createObjectURL(data);
        _this.imgsrc = url;
      });
    },
    cloneObj(data) {
      let tmp = {};
      for (let key in data) {
        tmp[key] = data[key];
      }
      return tmp;
    },
  },
};
</script>

<style  scoped>
.el-form--inline {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
.el-form-item {
  width: 80%;
}
.border {
  border: 1px solid black;
  border-radius: 25px;
  padding: 20px;
}
</style>
