<template lang="pug">
#banner.relative(v-if='selectType')
  .types.absolute.text-right.transform.-rotate-90.origin-bottom-left.z-10.hidden(class='md:block')
    p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : selectType === type}') {{ type.name }}
  
  //- desktop
  .base.relative.flex.justify-center.h-full.hidden(:class='{ "flex-row-reverse" : selectType.key === "AA" , [selectType.key] : true }', class='md:flex')
    .flex.flex-col.justify-center.relative.w-full
      img.selfic(:alt="selectType.key", :src="getImageUrl(selectType.image)")
      //- img.selfic.absolute.line(:src='getImageUrl("背景icon底圖-白底")')
    .w-8
    .flex.flex-col.justify-center.relative.mr-8(:class='{"w-full": selectType.key !== "FI"}')
      p.font-light Hi There,
      p.text-5xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
      p.font-light.whitespace-nowrap {{ selectType.name }}
  img.box.box-UU.opacity-0.absolute.hidden(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "UU"}', class='md:block')
  img.box.box-AA.opacity-0.absolute.hidden(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "AA"}', class='md:block')
  img.box.box-FI-1.opacity-0.absolute.hidden(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "FI"}', class='md:block')
  img.box.box-FI-2.opacity-0.absolute.hidden(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "FI"}', class='md:block')

  //- mobile
  .base.relative.flex.flex-col.items-center.overflow-hidden(class='md:hidden')
    .flex.flex-col.justify-center.relative.p-8
      img.selfic(:alt="selectType.key", :src="getImageUrl(selectType.image)")
      //- img.selfic.absolute.line(:src='getImageUrl("背景icon底圖-白底")')
    .flex.relative.h-300.w-full
      .types.absolute.text-right.transform.-rotate-90.origin-bottom-left
        p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : selectType === type}') {{ type.name }}

      .flex.flex-col.justify-center.relative.mobile-jex
        p.font-light Hi There,
        p.text-5xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
        p.font-light.whitespace-nowrap {{ selectType.name }}
      img.box.box-UU.opacity-0.absolute(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "UU"}', class='md:hidden')
      img.box.box-AA.opacity-0.absolute(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "AA"}', class='md:hidden')
      img.box.box-FI-1.opacity-0.absolute(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "FI"}', class='md:hidden')
      img.box.box-FI-2.opacity-0.absolute(:src='getImageUrl("漸層色塊")', :class='{ "opacity-100": selectType.key === "FI"}', class='md:hidden')
  
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
  height: 100vh;
  max-height: 100vh;
  min-height: 432px;
  padding-top: 90px;
  @media (max-width: 767px) {
    height: auto;
    max-height: unset;
    padding-top: 0px;
  }
  .base:not(.FI) {
    padding-left: 96px;
    @media (max-width: 767px) {
      padding-left: 1rem;
    }
  }
  .FI {
    padding-left: 266px;
    @media (max-width: 767px) {
      padding-left: 1rem;
    }
  }
  .selfic {
    transform: scale(1.5);
    @media (max-width: 767px) {
      transform: scale(1);
      min-width: 100vw;
    }
  }
  .dot-wrapper {
    bottom: 24px;
    width: 60px;
    left: calc(50% - 30px);
    @media (max-width: 767px) {
      bottom: 300px;
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
    top: calc(50% - 120px);
    @media (max-width: 767px) {
      right: -16px;
      width: 90px;
      height: 230px;
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
