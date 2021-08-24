<template>
  <div class="display-data">
    <div v-for="item in data" :key="item.id">
      <Data
        :image="menu === 'icon' ? item.urls.png_256 : item.urls.thumb"
        :info="item"
      />
    </div>
    <button v-show="data.length && nextURL" @click="loadMoreData">
      Load more
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Data from "./Data.vue";

export default {
  name: "DisplayData",
  computed: {
    ...mapGetters(["data", "nextURL", "params", "menu"]),
  },
  components: {
    Data,
  },
  methods: {
    ...mapActions(["fetchData", "loadData"]),
    loadMoreData() {
      this.loadData(this.nextURL);
    },
  },
  created() {
    this.fetchData(this.params);
  },
};
</script>

<style scoped>
.display-data {
  display: grid;
  width: 100%;
  height: 500px;
  grid-template-columns: repeat(4, 112.5px);
  padding: 10px;
  gap: 10px 10px;
  overflow-y: scroll;
}
.display-data::-webkit-scrollbar {
  width: 3px;
}
.display-data::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.display-data::-webkit-scrollbar-thumb {
  background: rgb(212, 212, 212);
}
.display-data::-webkit-scrollbar-thumb:hover {
  background: rgb(148, 148, 148);
}

button {
  background: white;
  outline: none;
  border: none;
  color: blue;
  padding: 30px 10px;
}
button:hover {
  text-decoration: underline;
}
</style>
