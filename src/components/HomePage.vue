<template>
  <div>
    <div class="mapContainer">
      <map-container></map-container>
    </div>
    <div class="driverBox border">
      <h1>High rate Driver</h1>
      <el-scrollbar max-height="600px">
        <div class="driverInfo" v-for="(item, key) in driverList" :key="key">
          <driver-info
            :id="item.Driver_id"
            :orders="item.count"
            :rate="item.rating"
            :pIntro="item.intro"
          ></driver-info>
        </div>
      </el-scrollbar>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
import mapContainer from "../assets/mapContainer.vue";
import driverInfo from "../assets/driverInfo.vue";

import axios from "axios";
export default {
  name: "homePage",
  components: {
    mapContainer,
    driverInfo,
  },
  data() {
    return {
      imgsrc: "",
      orders: 5,
      rate: 3.3,
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      driverList: [],
    };
  },
  methods: {
    async getDriver() {
      let _this = this;
      await axios({
        method: "get",
        url: "/getdriver",
      }).then((respon) => {
        _this.driverList = respon.data.data;
      });
    },
  },
  created() {
    this.getDriver();
  },
};
</script>

<style scoped>
.driverBox {
  width: 70%;
  float: right;
  height: 700px;
}
.driverInfo {
  width: 90%;
  margin: 15px auto;
}
.border {
  border: 1px black solid;
  box-sizing: border-box;
}
.space {
  height: 100px;
  clear: both;
}
</style>
