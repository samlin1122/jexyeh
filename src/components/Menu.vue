<template lang="pug">
#menu.fixed.inset-0.z-20.bg-black
  .base.text-right
    p.font-bold.text-white.text-6xl.py-6.cursor-pointer(v-for='item in menuList', @click='menuSelected(item)') {{item.name}}
</template>

<script>
export default {
  name: "contact",
  created() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  beforeUnmount() {
    document.querySelector("html").style.overflowY = "unset";
  },
  methods: {
    menuSelected(item) {
      if (item.url) {
        this.goTo(item);
      } else {
        this.$emit("contact");
      }
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
#menu {
  top: 90px;
}
</style>
