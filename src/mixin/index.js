
const mixin = {
  data: () => ({
    menuList: [
      { name: "Work", url: "Home" },
      { name: "About", url: "About" },
      { name: "Contact", url: "" },
    ],
    typeList: [
      {
        name: "UI/UX Designer",
        key: "UU",
        image: "LP-1照片",
      },
      {
        name: "Apparel & Accessories Designer",
        key: "AA",
        image: "LP-2照片",
      },
      {
        name: "Freediving Instructor",
        key: "FI",
        image: "LP-3照片",
      },
    ],
    socialList: [
      { img: 'linkedin', url: "" },
      { img: 'mail', url: "" },
    ],
  }),
  methods: {
    getImageUrl (name) {
      return new URL(`../assets/images/${name}.png`, import.meta.url).href;
    },
    goTo (item) {
      if (item.url) {
        this.$router.push({ name: item.url })
      } else {
        this.ContactShow = !this.ContactShow
      }
    }
  },
}
export default mixin