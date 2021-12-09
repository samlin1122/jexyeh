<template lang="pug">
Header
router-view
#top.cursor-pointer.hidden(@click='scrollTop')
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
  mounted() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        document.getElementById("top").classList.remove("hidden");
      } else {
        document.getElementById("top").classList.add("hidden");
      }
    });
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
</style>
