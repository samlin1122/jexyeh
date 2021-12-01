<template lang="pug">
#banner.relative(v-if='selectType')
  .types.absolute.text-right.transform.-rotate-90.origin-bottom-left.z-10
    p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : selectType === type}') {{ type.name }}

  .base.relative.flex.justify-center.h-full(:class='{ "flex-row-reverse" : selectType.key === "AA" , [selectType.key] : true }')
    .flex.flex-col.justify-center.relative.w-full
      img.selfic(:alt="selectType.key", :src="getImageUrl(selectType.image)")
      img.selfic.absolute.line(:src='getImageUrl("背景icon底圖-白底")')
    .w-8
    .flex.flex-col.justify-center.relative.w-full.mr-8
      p.font-light Hi There,
      p.text-5xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
      p.font-light.whitespace-nowrap {{ selectType.name }}
      
  img.box-UU.absolute(:src='getImageUrl("漸層色塊")', :class='{ hidden: selectType.key !== "UU"}')
  img.box-AA.absolute(:src='getImageUrl("漸層色塊")', :class='{ hidden: selectType.key !== "AA"}')
  img.box-FI-1.absolute(:src='getImageUrl("漸層色塊")', :class='{ hidden: selectType.key !== "FI"}')
  img.box-FI-2.absolute(:src='getImageUrl("漸層色塊")', :class='{ hidden: selectType.key !== "FI"}')

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
  height: calc(100vh - 90px);
  max-height: calc(100vh - 90px);
  min-height: 432px;
  .base:not(.FI) {
    padding-left: 96px;
  }
  .FI {
    padding-left: 266px;
  }
  .selfic {
    width: auto;
    min-width: 310px;
    max-width: 100%;
    z-index: 1;
    &.line {
      transform: scale(1.52) translateY(-4%);
      z-index: 0;
    }
  }
  .dot-wrapper {
    bottom: 24px;
    width: 60px;
    left: calc(50% - 30px);
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
  &-UU {
    width: 100px;
    height: 240px;
    right: 0;
    top: calc(50% - 120px);
  }
  &-AA {
    width: 300px;
    height: 70px;
    left: 0;
    bottom: 15%;
  }
  &-FI {
    &-1,
    &-2 {
      width: 200px;
      height: 34px;
    }
    &-1 {
      left: 0;
      bottom: 43px;
    }
    &-2 {
      right: 0;
      top: 43px;
    }
  }
}
.w-8{
  min-width: 32px;
}
</style>
