<template lang="pug">
Header
.HH
  router-view
#top.cursor-pointer(@click='scrollTop')
Footer(v-if='!$route.path.includes("project")')
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  watch: {
    $route: {
      handler() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-image: url("@/assets/images/置頂箭頭.png");
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
  z-index: 5;
  &:hover {
    background-image: url("@/assets/images/置頂箭頭 (Hover State).png");
  }
}
.HH {
  @media (max-width: 767px) {
    padding-top: 90px;
  }
}
</style>
