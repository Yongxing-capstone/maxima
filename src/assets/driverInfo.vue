<template>
  <div class="box">
    <img :src="imagesSrc" alt="" srcset="" />
    <div class="text">
      <p class="intro">{{ intro }}</p>
      <p class="order">orders:{{ orders }}</p>
      <el-rate
        :v-model="rate"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value} points"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "driverInfo",
  data() {
    return {};
  },
  props: {
    imagesSrc: String,
    orders: String,
    rate: Number,
  },
};
</script>

<style>
</style>