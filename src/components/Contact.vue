<template lang="pug">
#contact.fixed.inset-0.z-30.bg-black
  img.cursor-pointer.icon-close.absolute.z-20(alt='close', :src='getImageUrl("Contact-叉叉-btn")', @click='$emit("close")')
  .base.relative.h-screen.bg-center.bg-no-repeat.bg-contain.flex.flex-col.items-center.justify-center
    .contact-detail.absolute
      .flex.items-center.py-4(
        v-for='(item,index) in contact'
        :class='{ [item.title] : true, "cursor-pointer": index == 2 }'
        class='md:py-6'
        :data-index='index'
        @click="open(index == 2)"
        )
        img.mr-6(:alt='item.content', :src='getImageUrl(item.img)')
        p.text-white.text-gray-light {{item.content}}
        img.arrow(v-if='index == 2', :src='getImageUrl("Web-Contact-Resume-Arrow@2x")')
    .absolute.email
      p#email.text-white.border-2.border-white.border-solid.rounded-full.px-10.py-3.cursor-pointer(class='hover:bg-white hover:text-black', @click='copyToClipBoard') xgodzlighttk@gmail.com
      p#copied.text-white.font-bold.text-center.mt-6.text-xs Link copied

</template>

<script>
export default {
  name: "contact",
  data: () => ({
    contact: [
      { title: "phone", content: "+886-961-069-690", img: "Contact-手機-icon" },
      { title: "address", content: "Taipei, Taiwan", img: "Contact-地址-icon" },
      { title: "resume", content: "View my resume", img: "Contact-履歷-icon" },
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
    open(boo) {
      if (boo) {
        window.open("https://www.cakeresume.com/jexyeh");
      }
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
    background-size: cover;
    @media (max-width: 767px) {
      background-image: url("@/assets/images/iOS-Contact@3x.png");
    }
    max-width: unset;
    .contact-detail {
      left: 32px;
      top: calc(50vh - 125px);
      @media (max-width: 767px) {
        left: unset;
        top: unset;
        bottom: 60px;
      }
      > .flex[data-index="2"]:hover {
        p {
          color: white;
        }
        .arrow {
          content: url("@/assets/images/Web-Contact-Resume-Arrow-Hover@2x.png");
        }
      }
      .phone,
      .resume {
        img {
          width: 22px;
          height: 22px;
          @media (max-width: 767px) {
            width: 18px;
            height: 18px;
          }
        }
      }
      .address {
        img {
          width: 18px;
          height: 24px;
          @media (max-width: 767px) {
            width: 15px;
            height: 20px;
          }
        }
      }

      .arrow {
        margin-left: 6px;
        width: auto !important;
        height: 100% !important;
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
#email {
  font-size: 14px;
}
.email {
  bottom: 23%;
  @media (max-width: 767px) {
    bottom: 36%;
  }
}
</style>
