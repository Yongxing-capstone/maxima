<template>
  <div class="body">
    <div class="footer">
      <div class="passenger left outline">
        <h2>Passenger</h2>
        <p><a href="http://">Find a ride</a></p>
        <p><a href="http://">Order</a></p>
      </div>
      <div class="driver left outline">
        <h2>Driver</h2>
        <p><a href="http://">Post a ride</a></p>
        <p><a href="http://">Order</a></p>
        <p><a href="http://">Passenger List</a></p>
      </div>
      <div class="city left outline">
        <h2>City</h2>
        <p v-for="(name, index) in cities" :key="index">
          <a :href="cityStart">{{ name }}</a>
        </p>
      </div>
      <div class="followUs right outline centerText">
        <h2 style="margin-top: 100px">Follow Us</h2>
        <p>
          <img src="../images/twiter.png" alt="" srcset="" />
        </p>
      </div>
    </div>
    <p class="centerText">@2022-2025 Maxima.ca | All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: "footerTemp",
  data() {
    return {
      cities: [
        "Hamilton",
        "Burlington",
        "Windsor",
        "Toronto",
        "Barrie",
        "London",
        "Kingston",
      ],
      cityStart: "",
    };
  },
};
</script>

<style scoped>
.body {
  background-color: #0050ef !important;
}
.footer {
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
  background-color: #0050ef;
}
.outline {
  outline: 1px black solid;
  box-sizing: border-box;
}
.left {
  width: 100%;
  text-align: left;
  padding-left: 10px;
  color: white;
  font-weight: bold;
}
a {
  color: white;
}
.right {
  /* background: lightcoral; */
  color: #fff;
}
.centerText {
  text-align: center;
  color: #fff;
}
</style>