<template lang="pug">
footer.bg-black
  .w-full.flex.justify-between.items-center
    .copyright
      p.text-white All content and images Copyright © 2021 Jex Yeh
    .social.flex.justify-between.items-center
      img.cursor-pointer(v-for='item in socialList', :key='item.img', :alt="item.img", :src="getImageUrl(item.img)")
    .menu.flex.justify-end.items-center
      p.mx-6.text-white.cursor-pointer(v-for='item in menuList', :key='item.name', @click='goTo(item)') {{item.name}}
  transition(name="fade")
    Contact(v-if='ContactShow', @close='ContactShow = false')

</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "foot",
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
footer {
  display: flex;
  align-items: center;
  height: 92px;
  img {
    width: 20px;
  }
  .copyright,
  .menu {
    width: 35%;
  }
  .menu {
    p {
      transition: all 0.5s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .social {
    width: 10%;
  }
}
</style>
