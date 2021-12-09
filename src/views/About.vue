<template lang="pug">
#about.relative
  .types.absolute.text-right.transform.-rotate-90.origin-bottom-left.z-10
    p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : type.key === "UU", "text-gray-light": type.key !== "UU"}') {{ type.name }}

  //- desktop
  .relative
    img.w-screen.selfic(:src='getImageUrl(`${isMobile ? "IOS" : "Web"}-About@2x`)')
    .absolute.mr-8.text-content
      p.text-xl Hi There,
      p.text-6xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
      p.text-xl.font-light UI/UX Designer
      p.text-xs.font-light.mt-4 過去11年專職於服飾配件類的產品設計，期間幾度參與品牌線上服務 與銷售的協作，對UI/UX設計產生強烈興趣，並逐步累積相關經驗#[br]#[br]將產品設計以使用者需求為出發的設計思維，及對流行趨勢保持專注 的工作習性，加上整合內外部跨單位的溝通經驗，轉化於UI/UX設計 中完整展現，創造美觀及貼近需求的數位產品

#detail.base
  img.cursor-pointer.transition(:src='getImageUrl(`${isMobile ? "IOS" : "Web"}-About-Card-${state}@2x`)', @click='state = state === "Before" ? "After" : "Before" ', :class='[state]')
</template>

<script>
export default {
  name: "About",
  data: () => ({
    state: "before",
  }),
};
</script>

<style lang="scss" scoped>
#about {
  .text-content {
    top: 43%;
    left: 58%;
    @media (max-width: 767px) {
      top: 62%;
      left: 30%;
    }
  }
}
#detail {
  img {
    transition: all 0.5s;
  }
  .After {
    transform: rotate3d(1, 0, 0, 180deg);
    @media (max-width: 767px) {
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }
}
</style>
