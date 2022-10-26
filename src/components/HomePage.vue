<template>
  <div>
    <div class="mapContainer">
      <map-container></map-container>
    </div>
    <img :src="imgsrc" alt="" srcset="" />
    {{ imgsrc }}
    <driver-info :imagesSrc="'localhost:3000/api/images'"></driver-info>
  </div>
</template>

<script>
import mapContainer from "../assets/mapContainer.vue";
import driverInfo from "../assets/driverInfo.vue";
// import global from "../assets/Global";
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
    };
  },
  methods: {
    async getPicture() {
      let body = { user_id: 4 };
      await axios({
        method: "post",
        url: "/images",
        data: body,
        responseType: "blob",
      }).then(({ data }) => {
        console.log(data);
        let url = window.URL.createObjectURL(data);
        this.imgsrc = url;
      });
    },
  },
  created() {
    this.getPicture();
  },
};
</script>

<style>
</style>
