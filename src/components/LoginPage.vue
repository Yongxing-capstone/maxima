<template>
  <div class="mainBody">
    <div class="Dialog outline">
      <el-form
        status-icon
        label-width="120px"
        :rules="rules"
        :model="userInfo"
        ref="userInfo"
      >
        <el-form-item label="First Name" prop="fname">
          <el-input v-model="userInfo.first_name"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="lname">
          <el-input v-model="userInfo.last_name"></el-input>
        </el-form-item>
        <el-form-item label="Phone" prop="name">
          <el-input
            v-model="userInfo.phone"
            oninput="value=value.replace(/[^0-9]/g,'')"
          ></el-input>
        </el-form-item>
        <el-form-item label="Address" prop="addr">
          <el-input v-model="userInfo.address"></el-input>
        </el-form-item>

        <el-form-item label="password" prop="password">
          <el-input
            type="password"
            autocomplete="off"
            v-model="userInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            type="password"
            autocomplete="off"
            v-model="userInfo.checkPass"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" class="button"
            >Confirm</el-button
          >
          <el-button @click="resetForm()" class="button">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="Dialog outline"></div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    const isAlpha = (str) => /[A-Za-z]+/i.test(str);
    const isDigit = (str) => /[\d]+/i.test(str);
    var valiDataPass = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (!isAlpha(value)) {
          callback(new Error("Please include at least one letter"));
        } else if (!isDigit(value)) {
          callback(new Error("Please include at least one Numbers"));
        } else if (this.userInfo.password !== "") {
          this.$refs.userInfo.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please confrim your password"));
      } else if (value !== this.userInfo.password) {
        callback(new Error("Password did not match!"));
      } else {
        callback();
      }
    };
    return {
      userInfo: {
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        password: "qweqwe123",
        checkPass: "qweqwe123",
      },
      rules: {
        password: [
          { required: true, message: "Please input password", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "length must be between 8-16 character",
            trigger: "blur",
          },
          { validator: valiDataPass, trigger: "change" },
        ],
        checkPass: [
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
  methods: {
    async submitForm() {
      //   const { proxy } = getCurrentInstance();

      let reqBody = {};
      for (let key in this.userInfo) {
        reqBody[key] = this.userInfo[key];
      }
      reqBody.password = this.$AES_Encrypt(reqBody.password);

      let result = await this.$axios({
        method: "post",
        url: "signup",
        data: reqBody,
      });
      if (result.data.code == 300) {
        alert(result.data.message);
      } else {
        this.$store.commit("getResult", result.data);

        this.$router.push({
          name: "loginResult",
        });
      }
    },
    resetForm() {
      for (const key in this.userInfo) {
        this.userInfo[key] = "";
      }
      console.log();
    },
  },
};
</script>

<style scoped>
.Dialog {
  width: 40%;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  margin: 5%;
}
.outline {
  border: 1px black solid;
}
.mainBody {
  display: flex;
}
</style>