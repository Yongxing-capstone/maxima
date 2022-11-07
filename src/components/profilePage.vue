<template>
  <div class="my_page">
    <div class="Image">
      <p class="icon"><el-avatar id="avatar" :size="100" :src="imgsrc" /></p>
      <h2 id="name">
        <span id="fn">{{ userData.first_name }} &nbsp;</span>
        <span id="ln">{{ userData.last_name }}</span>
      </h2>
      <h3 id="userRole">{{ userData.role }}</h3>
    </div>
    <!-- end Image-->

    <h1>Modify your Imformation</h1>
    <div class="personalInfo border">
      <el-form
        :inline="'true'"
        label-position="top"
        :disabled="InfoWriteAble"
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
        :disabled="PassWriteAble"
        size="large"
        :rules="rules"
        ref="updatePass"
        :model="updatePass"
      >
        <el-form-item label="Old Pass" prop="oldPass">
          <el-input v-model="updatePass.oldPass" />
        </el-form-item>
        <el-form-item label="New Password" prop="newPass">
          <el-input v-model="updatePass.newPass" />
        </el-form-item>
        <el-form-item label="Confirm password" prop="newPass">
          <el-input v-model="updatePass.comPass" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changePass()" class="button"
            >Confirm</el-button
          >
          <el-button @click="resetForm()" class="button">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--end personalInfo-->
  </div>
</template>

<script>
export default {
  name: "profilePage",
  components: {},
  data() {
    const isAlpha = (str) => /[A-Za-z]+/i.test(str);
    const isDigit = (str) => /[\d]+/i.test(str);
    var valiDataPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (!isAlpha(value)) {
          callback(new Error("Please include at least one letter"));
        } else if (!isDigit(value)) {
          callback(new Error("Please include at least one Numbers"));
        } else if (this.updatePass.newPass !== "") {
          this.$refs.updatePass.validateField("Confirm");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please confrim your password"));
      } else if (value !== this.updatePass.newPass) {
        callback(new Error("Password did not match!"));
      } else {
        callback();
      }
    };
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
      rules: {
        oldPass: [{ required: true, message: "Please Enter your password" }],
        newPass: [
          { required: true, message: "Please input password", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "length must be between 8-16 character",
            trigger: "blur",
          },
          { validator: valiDataPass, trigger: "change" },
        ],
        comPass: [
          {
            required: true,
            message: "Please confirm password",
            trigger: "blur",
          },
          {
            min: 8,
            max: 16,
            message: "length must be between 8-16 character",
            trigger: "blur",
          },
          { validator: validatePass2, trigger: "change", required: true },
        ],
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
    changePass() {
      console.log(this.$store.state.userData);
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
.icon {
  width: 100px;
  margin: auto;
}
#name {
  text-align: center;
}
#userRole {
  text-align: center;
}
</style>
