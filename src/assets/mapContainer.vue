<template>
  <div class="mapContainer">
    <div class="map">
      <GoogleMap
        :api-key="apikey"
        style="with: 100%; height: 500px"
        :center="mapCenter"
        :zoom="11"
      >
        <Marker :options="{ position: mapCenter }"> </Marker>
      </GoogleMap>
      <div id="inputsBox">
        <el-input
          v-model="Departure"
          placeholder="Departure"
          class="input-with-select input"
        >
          <template #append>
            <el-button :icon="Location" />
          </template>
        </el-input>

        <el-input
          v-model="Destination"
          placeholder="Destination"
          class="input-with-select input"
        >
          <template #append>
            <el-button :icon="Location" />
          </template>
        </el-input>

        <el-button class="input" type="success"> Find a ride</el-button>
        <el-button class="input" type="primary"> Post a ride</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import { Location } from "@element-plus/icons-vue";
import global from "./Global";
export default {
  name: "mapContainer",
  components: { GoogleMap, Marker },
  data() {
    return {
      apikey: global.mapApiKey,
      mapCenter: {
        lat: 43.239238095759674,
        lng: -79.88803031533978,
      },
      startPoint: "",
      Destination: "",
      Location: Location,
    };
  },
};
</script>

<style>
#inputsBox {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0 0 25px 25px;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.input {
  width: 20% !important;
}
</style>