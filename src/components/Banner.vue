<template lang="pug">
#banner.relative(v-if='selectType')
  .types.absolute.text-right.transform.-rotate-90.origin-bottom-left.z-10
    p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : (selectType === type), "text-gray-light": (selectType !== type)}') {{ type.name }}
  
  //- desktop
  .relative(class='md:block')
    img.w-screen.selfic(:alt="selectType.key", :src='getImageUrl(`${isMobile ? "IOS" : "Web"}-LP-${selectType.image}@2x`)')
    .absolute.mr-8.text-content(:class='selectType.key')
      p.text-xl Hi There,
      p.text-6xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
      p.text-xl.font-light.whitespace-pre-wrap(class='md:whitespace-nowrap') {{ selectType.name }}

  .dot-wrapper.absolute.flex.items-center.justify-between
    .dot.cursor-pointer.rounded-full(v-for='type in typeList', :key='type.key', :class='{ "is-active" : selectType === type}', @click=' selectType = type ')

</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      selectType: null,
    };
  },
  mounted() {
    this.selectType = this.typeList[0];
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

  .dot-wrapper {
    bottom: 24px;
    width: 60px;
    left: calc(50% - 30px);
    @media (max-width: 767px) {
      bottom: 39%;
    }
    .dot {
      width: 10px;
      height: 10px;
      background-color: #a6a6a6;
      &.is-active {
        background-color: #333333;
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
