<template lang="pug">
footer.bg-black
  .w-full.flex.flex-col-reverse.justify-between.items-center(class="md:flex-row")
    .copyright(class='md:w-2/6')
      p.text-xs.text-white.whitespace-nowrap All content and images Copyright © 2021 Jex Yeh
    a.social.flex.justify-center.items-center.w-full.mb-6(class='md:mb-0 md:justify-between')
      img.mx-4.cursor-pointer(v-for='item in socialList', :key='item.key', :alt="item.key", :src="getImageUrl(item.key)", @click='href(item)')
    .menu.flex.justify-end.items-center.hidden(class='md:flex md:w-2/6')
      p.mx-10.text-white.cursor-pointer(v-for='item in menuList', :key='item.name', @click='goTo(item)') {{item.name}}
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
  methods: {
    href({ key, url }) {
      if (key === "mail") {
        this.ContactShow = true;
      } else {
        window.open(url);
      }
    },
  },
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
  .menu {
    p {
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2);
        color: #b4b5ac;
      }
    }
  }
  .social {
    img:first-child:hover {
      content: url("@/assets/images/linkedin (Hover State).png");
    }
    img:last-child:hover {
      content: url("@/assets/images/mail (Hover State).png");
    }
    @media (min-width: 768px) {
      width: 10%;
    }
  }
}
</style>
