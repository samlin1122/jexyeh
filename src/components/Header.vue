<template lang="pug">
header.flex.items-center.justify-between
  router-link.logo(:to="{ name: 'Home' }")
    img(src='@/assets/images/LOGO.png')
  .item-wrapper.flex.items-center.justify-between
    p.mx-6.cursor-pointer(v-for='item in menuList', :key='item.name', @click='goTo(item)') {{item.name}}
  transition(name="fade")
    Contact(v-if='ContactShow', @close='ContactShow = false')
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "heady",
  components: { Contact },
  emits: {
    close() {
      this.ContactShow = false;
      return true;
    },
  },
  data: () => ({
    ContactShow: false,
  }),
};
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  .logo {
    width: 50px;
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
</style>
