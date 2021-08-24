<template>
  <div class="searchBar">
    <input
      @change="onInput($event)"
      type="text"
      placeholder="Search Icons or Illustrations"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  computed: mapGetters(["params"]),
  methods: {
    ...mapActions(["onParamChange"]),
    onInput(e) {
      let updParams = this.params;
      updParams.query = e.target.value;
      this.onParamChange(updParams);
    },
  },
};
</script>

<style scoped>
.searchBar {
  border-top: 1px solid rgb(209, 209, 209);
  padding: 5px 10px;
}
.searchBar > input {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: none;
}
</style>
