<template>
  <div class="app">
    <Menu />
    <Search />
    <SortMenu />
    <DisplayData />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Menu from "./components/Menu.vue";
import Search from "./components/Search.vue";
import SortMenu from "./components/SortMenu.vue";
import DisplayData from "./components/DisplayData.vue";

export default {
  name: "App",
  components: {
    Menu,
    Search,
    SortMenu,
    DisplayData,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.app {
  width: 500px;
  margin: auto;
  border: 1px solid rgb(209, 209, 209);
}
</style>
