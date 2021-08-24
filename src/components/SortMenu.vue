<template>
  <div class="sortMenu">
    <select class="categary" @change="onCategary($event)">
      <option value="popular" default>Popular</option>
      <option value="latest">Latest</option>
    </select>
    <select v-show="menu === 'icon'" class="style" @change="onStyle($event)">
      <option value="" default>All</option>
      <option value="flat">Flat</option>
      <option value="line">Line</option>
      <option value="colored-outline">Colored Outline</option>
      <option value="glyph">Glyph</option>
      <option value="isometric">Isometric</option>
      <option value="doodle">Doodle</option>
      <option value="gradient">Gradient</option>
      <option value="rounded">Rounded</option>
      <option value="dualtone">Dualtone</option>
      <option value="sticker">Sticker</option>
    </select>
    <select class="type" v-show="menu === 'icon'" @change="onType($event)">
      <option value="item" default>Icons</option>
      <option value="pack">Packs</option>
    </select>
    <select
      class="type"
      v-show="menu === 'illustration'"
      @change="onType($event)"
    >
      <option value="item" default>Illustrations</option>
      <option value="pack">Packs</option>
    </select>
    <select
      class="formate"
      v-show="menu === 'illustration'"
      @change="onFormate($event)"
    >
      <option value="" default>All</option>
      <option value="svg">SVG</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SortMenu",
  computed: {
    ...mapGetters(["menu", "params"]),
  },
  methods: {
    ...mapActions(["onParamChange"]),
    onCategary(e) {
      let updParam = this.params;
      updParam.sort = e.target.value;
      this.onParamChange(updParam);
    },
    onStyle(e) {
      let updParam = this.params;
      updParam.styles = e.target.value.length == 0 ? [] : [e.target.value];
      this.onParamChange(updParam);
    },
    onType(e) {
      let updParam = this.params;
      updParam.product_type = e.target.value;
      this.onParamChange(updParam);
    },
    onFormate(e) {
      let updParam = this.params;
      updParam.formats = e.target.value.length == 0 ? [] : [e.target.value];
      this.onParamChange(updParam);
    },
  },
};
</script>

<style scoped>
.sortMenu {
  display: flex;
  margin-bottom: 10px;
}

.sortMenu > select {
  width: 33.33%;
  border: 1px solid rgb(209, 209, 209);
  padding: 5px;
  outline: none;
}
</style>
