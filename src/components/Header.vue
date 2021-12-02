<template lang="pug">
header.fixed.flex.items-center.justify-between.w-full.shadow-lg.z-30.bg-white(class='md:shadow-none md:absolute md:bg-transparent')
  router-link.arrow.cursor-pointer(v-if='$route.path.includes("project")', :to="{ name: 'Home' }")
  router-link.logo(v-else, :to="{ name: 'Home' }", :class='{ "opacity-0" : $route.path.includes("project")}')
    img(:src='getImageUrl("LOGO")')
  .item-wrapper.hidden.items-center.justify-between(class='md:flex')
    p.mx-6.cursor-pointer(v-for='item in menuList', :key='item.name', @click='goTo(item)') {{item.name}}
  img.menu-icon.cursor-pointer(:src='getImageUrl(MenuShow ? "Menu-叉叉@3x" : "選項icon@3x")', @click='MenuShow = !MenuShow', class='md:hidden')

  transition(name="fade")
    Menu(v-if='MenuShow', @close='MenuShow = false', @contact='ContactShow = true')
  transition(name="fade")
    Contact(v-if='ContactShow', @close='ContactShow = false')
</template>

<script>
import Contact from "@/components/Contact.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "heady",
  components: { Contact, Menu },
  emits: {
    close() {
      this.ContactShow = false;
      return true;
    },
    contact() {
      this.ContactShow = true;
      return true;
    },
  },
  data: () => ({
    ContactShow: false,
    MenuShow: false,
  }),
};
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  .logo {
    width: 50px;
  }
  .arrow {
    width: 43px;
    height: 43px;
    background-size: cover;
    background-image: url("@/assets/images/返回箭頭-btn.png");
    &:hover {
      background-image: url("@/assets/images/返回箭頭-btn (Hover State).png");
    }
  }
  .item-wrapper {
    p {
      transition: all 0.5s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
.menu {
  &-icon {
    width: 50px;
    object-fit: cover;
  }
}
</style>
