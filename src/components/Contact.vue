<template lang="pug">
#contact.fixed.inset-0.z-20.bg-black
  img.cursor-pointer.icon-close.absolute.z-20(alt='close', :src='getImageUrl("Contact-叉叉-btn")', @click='$emit("close")')
  .base.relative.h-screen.bg-center.bg-no-repeat.bg-contain.flex.flex-col.items-center.justify-center
    .contact-detail.absolute
      .flex.items-center.py-6(v-for='item in contact')
        img.mr-6(:alt='item.content', :src='getImageUrl(item.img)')
        p.text-white {{item.content}}
    
    p.text-white.font-bold.text-7xl.my-10 Let’s Chat
    p#email.text-white.border-2.border-white.border-solid.rounded-full.px-10.py-3.cursor-pointer(class='hover:bg-white hover:text-black', @click='copyToClipBoard') xgodzlighttk@gmail.com
    p#copied.text-white.font-bold.mt-6 Link copied

</template>

<script>
export default {
  name: "contact",
  data: () => ({
    contact: [
      { content: "+886-961-069-690", img: "Contact-手機-icon" },
      { content: "Taipei, Taiwan", img: "Contact-地址-icon" },
      { content: "View my resume", img: "Contact-履歷-icon" },
    ],
  }),
  created() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  beforeUnmount() {
    document.querySelector("html").style.overflowY = "unset";
  },
  methods: {
    copyToClipBoard() {
      let content = document.getElementById("email").innerHTML;
      navigator.clipboard
        .writeText(content)
        .then(() => {
          document.getElementById("copied").classList.add("active");
          setTimeout(() => {
            document.getElementById("copied").classList.remove("active");
          }, 1500);
        })
        .catch((err) => {
          alert("Something went wrong", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
  .icon-close {
    width: 30px;
    right: 30px;
    top: 30px;
  }
  .base {
    background-image: url("@/assets/images/背景icon底圖-黑底.png");
    max-width: unset;
    .contact-detail {
      left: 32px;
      top: calc(50vh - 125px);
      img {
        width: 32px;
      }
    }
  }
}
#copied {
  transition: all 1s;
  opacity: 0;
  &.active {
    opacity: 1;
  }
}
</style>
