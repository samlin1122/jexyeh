
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
        image: "1",
      },
      {
        name: "Apparel & Accessories Designer",
        key: "AA",
        image: "2",
      },
      {
        name: "Freediving Instructor",
        key: "FI",
        image: "3",
      },
    ],
    socialList: [
      { key: 'linkedin', url: "http://linkedin.com/in/chun-chuan-yeh-118ba5112" },
      { key: 'mail', url: "xgodzlighttk@gmail.com" },
    ],
  }),
  computed: {
    isMobile () {
      return window.innerWidth < 767
    }
  },
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