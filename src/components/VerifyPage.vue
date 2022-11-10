<template>
  <div class="my_page">
    <div class="licenseUpload">
      <el-upload
        drag
        :limit="1"
        :on-exceed="licenseHandleExceed"
        :auto-upload="false"
        v-model:file-list="license_files"
      >
        <el-icon class="el-icon--upload">
          <upload-filled />
        </el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip> Please upload your license </template>
      </el-upload>
    </div>
    <div class="ownershipUpload">
      <div class="licenseUpload">
        <el-upload
          drag
          :limit="1"
          :on-exceed="ownershipHandleExceed"
          :auto-upload="false"
          v-model:file-list="ownership_files"
        >
          <el-icon class="el-icon--upload">
            <upload-filled />
          </el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip> Please upload your ownership </template>
        </el-upload>
      </div>
    </div>
    <el-button @click="HandleUpload">upload</el-button>
  </div>
</template>

<script>
export default {
  name: "verifyPage",
  components: {},
  data() {
    return {
      license_files: [],
      ownership_files: [],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    licenseHandleExceed(value) {
      this.license_files = value;
    },
    ownershipHandleExceed(value) {
      this.ownership_files = value;
    },

    HandleUpload() {
      //   console.log(this.ownership_files);
      //   console.log(this.license_files);

      let files = new FormData();

      files.append("photos", this.ownership_files[0].raw);
      files.append("photos", this.license_files[0].raw);
      files.append("user_id", this.$store.state.userData.user_id);
      files.append("filetype", "ownership|license");
      //   console.log(this.license_files[0].raw);

      console.log(files.getAll("file"));
      var config = {
        method: "post",
        url: "uploadfile",
        data: files,
      };
      let _this = this;
      this.$axios(config).then((data) => {
        if (data.data.code == 200) {
          alert(data.data.message);
          _this.$router.push("verifyResult");
        } else {
          alert(data.data.message);
        }
      });
    },
  },
};
</script>

<style  scoped>
</style>
