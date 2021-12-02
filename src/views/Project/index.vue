<template lang="pug">
router-view
.flex
  p.text-white.text-center.cursor-pointer.py-8.bg-gray.transition(class='w-1/2 hover:bg-white hover:text-gray-bg', @click='projectLink("prev")') Previous Project
  p.text-white.text-center.cursor-pointer.py-8.bg-black.transition(class='w-1/2 hover:bg-white hover:text-black', @click='projectLink("next")') Next Project

</template>

<script>
export default {
  name: "project",
  data: () => ({
    projectList: ["TaiwaneseCup", "WebPage", "Accessories"],
  }),
  methods: {
    projectLink(key) {
      const nowProjectIndex = this.projectList.findIndex(
        (e) => e === this.$route.name
      );
      switch (key) {
        case "prev":
          this.$router.push({
            name: this.projectList[
              nowProjectIndex === 0
                ? this.projectList.length - 1
                : nowProjectIndex - 1
            ],
          });
          break;
        case "next":
          this.$router.push({
            name: this.projectList[
              nowProjectIndex === this.projectList.length - 1
                ? 0
                : nowProjectIndex + 1
            ],
          });
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
