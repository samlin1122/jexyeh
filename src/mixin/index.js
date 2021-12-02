
const mixin = {
  data: () => ({
    menuList: [
      { name: "Work", url: "Home" },
      { name: "About", url: "About" },
      { name: "Contact" },
    ],
    typeList: [
      {
        name: "UI/UX Designer",
        key: "UU",
        image: "LP1-Pic@2x",
      },
      {
        name: "Apparel & Accessories Designer",
        key: "AA",
        image: "LP2-Pic@2x",
      },
      {
        name: "Freediving Instructor",
        key: "FI",
        image: "LP3-Pic@2x",
      },
    ],
    socialList: [
      { key: 'linkedin', url: "http://linkedin.com/in/chun-chuan-yeh-118ba5112" },
      { key: 'mail', url: "xgodzlighttk@gmail.com" },
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