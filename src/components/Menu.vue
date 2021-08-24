<template>
  <div class="menu">
    <button
      @click="onMenuChage('icon')"
      :class="[menu === 'icon' ? 'selected' : '', 'icons']"
    >
      Icons
    </button>
    <button
      @click="onMenuChage('illustration')"
      :class="[menu === 'illustration' ? 'selected' : '', 'illustration']"
    >
      Illustration
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Menu",
  computed: {
    ...mapGetters(["menu"]),
  },
  methods: {
    ...mapActions(["onMenuChage"]),
  },
};
</script>

<style scoped>
.menu {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons,
.illustration {
  width: 50%;
  border: 1px solid rgb(209, 209, 209);
  padding: 5px;
  background: white;
}

.icons {
  border-radius: 5px 0px 0px 5px;
}

.illustration {
  border-radius: 0px 5px 5px 0px;
}

.selected {
  background: rgb(95, 95, 255);
  color: white;
  border: 1px solid rgb(77, 45, 255);
}
</style>
