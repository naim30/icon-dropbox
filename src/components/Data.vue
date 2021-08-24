<template>
  <div @click="onClickDownload" class="data">
    <div class="cover"></div>
    <img :src="image" :alt="image" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Data",
  props: {
    image: String,
    info: Object,
  },
  methods: {
    ...mapActions(["onDownload"]),
    onClickDownload() {
      this.onDownload(this.uuid);
    },
  },
};
</script>

<style scoped>
.data {
  height: 112.5px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: relative;
}

.data:hover::before {
  content: "download";
  font-family: "Material Icons";
  position: absolute;
  z-index: 2;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  background: rgba(32, 32, 32, 0.452);
}

img {
  width: 80%;
  position: relative;
  z-index: 1;
}
</style>
