<template lang="pug">
#banner.relative
  .types.absolute.text-right.transform.-rotate-90.origin-bottom-left.z-10
    p.text-xs.whitespace-nowrap(v-for='(type, index) in typeList', :key='type.key', :class='{ "font-bold" : (active === index), "text-gray-light": (active !== index)}') {{ type.name }}
  Carousel
    Slide(v-for='type in typeList', :key='type.key')
      img.w-screen.selfic(:alt="type.key", :src='getImageUrl(`${isMobile ? "iOS" : "Web"}-LP-${type.image}@2x`)')
      .absolute.mr-8.text-content(:class='type.key')
        p.text-xl Hi There,
        p.text-6xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
        p.text-xl.font-light.whitespace-pre-wrap(class='md:whitespace-nowrap') {{ type.name }}
    template(#addons)
      Pagination

</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "banner",
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    document.addEventListener("transitionend", () => this.paginationWatcher());
  },
  beforeDestroy() {
    document.removeEventListener("transitionend", this.paginationWatcher());
  },
  methods: {
    paginationWatcher() {
      let buttons = document.querySelectorAll(".carousel__pagination-button");
      buttons.forEach((e, i) => {
        if (
          Array.apply(null, e.classList).some(
            (el) => el === "carousel__pagination-button--active"
          )
        ) {
          this.active = i;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#banner {
  min-height: 432px;
  @media (max-width: 767px) {
    height: auto;
    max-height: unset;
    padding-top: 0px;
  }
  .text-content {
    top: 43%;
    @media (max-width: 767px) {
      top: 70%;
      left: 30% !important;
    }
    &.UU {
      left: 58%;
    }
    &.AA {
      left: 15%;
    }
    &.FI {
      left: 75%;
    }
  }
  ::v-deep(.carousel__pagination) {
    bottom: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 767px) {
      bottom: 39%;
    }
    .carousel__pagination-item {
      .carousel__pagination-button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #a6a6a6;
        &--active {
          background-color: #333333;
        }
      }
    }
  }
}
.box {
  z-index: -1;
  &-UU {
    width: 100px;
    height: 240px;
    right: 0;
    top: calc(50% - 45px);
    @media (max-width: 767px) {
      right: -16px;
      width: 90px;
      height: 230px;
      top: calc(50% - 120px);
    }
  }
  &-AA {
    width: 300px;
    height: 70px;
    left: 0;
    bottom: 15%;
    @media (max-width: 767px) {
      width: 180px;
      height: 60px;
      left: -16px;
    }
  }
  &-FI {
    &-1,
    &-2 {
      width: 200px;
      height: 34px;
      @media (max-width: 767px) {
        width: 154px;
        height: 24px;
      }
    }
    &-1 {
      left: 0;
      bottom: 43px;
      @media (max-width: 767px) {
        left: -16px;
      }
    }
    &-2 {
      right: 0;
      top: 140px;
      @media (max-width: 767px) {
        top: 50px;
        right: -16px;
      }
    }
  }
}
.w-8 {
  min-width: 32px;
}
.h-300 {
  height: 300px;
}
.mobile-jex {
  padding-left: 30%;
}
</style>
