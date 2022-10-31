<template>
  <div class="box">
    <el-avatar id="avatar" :size="100" :src="imgsrc" />
    <div class="text">
      <div class="intro">
        <el-scrollbar max-height="75px">
          <p>{{ intro }}</p>
        </el-scrollbar>
      </div>
      <div class="subInfo">
        <p class="order">orders:{{ orders }}</p>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} points"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "driverInfo",
  data() {
    return {
      value: this.rate,
      imgsrc: "",
    };
  },
  props: {
    id: Number,
    orders: String,
    rate: Number,
    pIntro: String,
  },
  methods: {
    async getPicture() {
      let _this = this;
      let body = { user_id: _this.id };
      await axios({
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
  },
  created() {
    this.getPicture();
  },
  computed: {
    intro() {
      if (this.pIntro == null) {
        return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      }
      console.log(this.pIntro);
      return this.pIntro;
    },
  },
  mounted() {},
};
</script>

<style scoped>
#avatar {
  float: left;
  margin: 20px;
}
.box {
  height: 150px;
  background: white;
  font-size: 12px;
}
.subInfo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: -14px;
}
.intro {
  padding-top: 15px;
  height: 92px;
}
</style>