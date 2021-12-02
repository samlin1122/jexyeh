<template lang="pug">
#about.relative
  .types.absolute.text-right.transform.-rotate-90.origin-bottom-left.z-10.hidden(class='md:block')
    p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : type.key === "UU"}') {{ type.name }}

  //- desktop
  .base.relative.flex.items-center.justify-center.w-full.h-full.hidden(class='md:flex')
    .flex.flex-col.justify-center.relative.w-full
      img.selfic.ml-auto(alt="About照片" :src="getImageUrl('About照片')")
      img.selfic.absolute.line(:src='getImageUrl("背景icon底圖-白底")')
    .w-8
    .flex.flex-col.justify-center.relative.w-full.mr-8
      p.font-light Hi There,
      p.text-5xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
      p.font-light UI/UX Designer
      p.mt-4 過去11年專職於服飾配件類的產品設計，期間幾度參與品牌線上服務 與銷售的協作，對UI/UX設計產生強烈興趣，並逐步累積相關經驗#[br]#[br]將產品設計以使用者需求為出發的設計思維，及對流行趨勢保持專注 的工作習性，加上整合內外部跨單位的溝通經驗，轉化於UI/UX設計 中完整展現，創造美觀及貼近需求的數位產品
  img.box-UU.absolute.hidden(class='md:flex', :src='getImageUrl("漸層色塊")')
  //- mobile
  .base.relative.flex.flex-col.items-center.overflow-hidden(class='md:hidden')
    .flex.flex-col.justify-center.relative.p-8
      img.selfic(alt="About照片" :src="getImageUrl('About照片')")
      img.selfic.absolute.line(:src='getImageUrl("背景icon底圖-白底")')
    .flex.relative.w-full.mt-8
      .types.absolute.text-right.transform.-rotate-90.origin-bottom-left
        p.text-xs.whitespace-nowrap(v-for='type in typeList', :key='type.key', :class='{ "font-bold" : type.key === "UU"}') {{ type.name }}

      .flex.flex-col.justify-center.relative.mobile-jex
        p.font-light Hi There,
        p.text-5xl.font-bold.whitespace-nowrap.tracking-tighter I am Jex
        p.font-light UI/UX Designer
        p.mt-4 過去11年專職於服飾配件類的產品設計，期間幾度參與品牌線上服務 與銷售的協作，對UI/UX設計產生強烈興趣，並逐步累積相關經驗#[br]#[br]將產品設計以使用者需求為出發的設計思維，及對流行趨勢保持專注 的工作習性，加上整合內外部跨單位的溝通經驗，轉化於UI/UX設計 中完整展現，創造美觀及貼近需求的數位產品
  
      img.box-UU.absolute(:src='getImageUrl("漸層色塊")')
  
#detail.base.flex.items-center.py-20(class='md:py-20')
  .detail-wrapper.flex.flex-col.items-center.width-full.relative.cursor-pointer.p-8(:class='[state]', class='md:flex-row md:p-12', @click='state = state === "before" ? "after" : "before" ')
    .content
      p.font-bold.text-white.text-7xl {{detailData[state].title}}
    .Divide.my-10.bg-white(class='md:hidden')
    .content.border-white.border-solid(class='md:border-l md:pl-10')
      .flex.items-center.justify-between(v-for='item in detailData[state].jobs', :key='item.company')
        p.text-white.text-xs(class='md:text-base') {{item.company}}
        p.text-white.text-xs(class='md:text-base') {{item.title}}
      p.text-secondary.mt-6.mb-2.text-xs(class='md:text-base') Skills:
      p.text-white.text-xs(class='md:text-base') {{detailData[state].skills}}
      p.text-secondary.mt-6.mb-2.text-xs(class='md:text-base') Tools:
      .flex.items-center
        img.mr-4.icon-tool(v-for='item in detailData[state].tools', :alt='item', :src='getImageUrl(item)')
    img.arrow.absolute.hidden(alt='字卡-Bf-下箭頭-btn', :src='getImageUrl("字卡-Bf-下箭頭-btn")', class='md:block')

</template>

<script>
export default {
  name: "About",
  data: () => ({
    state: "before",
    detailData: {
      before: {
        title: "Before",
        jobs: [
          { company: "史考特國際有限公司", title: "設計師" },
          { company: "俊嶽企業股份有限公司", title: "品牌設計師" },
          { company: "銳耳創作股份有限公司", title: "設計師 / 產品管理師" },
          { company: "伯諾股份有限公司", title: "服飾配件設計副理" },
          { company: "寶悍運動平台股份有限公司", title: "自有商品開發經理" },
          { company: "尚宏電子股份有限公司", title: "資深設計師" },
        ],
        skills:
          "採購預算 / 流行趨勢分析 / 主題制定 / 系列規劃 設計開發 / 下單流程 / 驗貨進倉 / 庫存管理 / 業績分析",
        tools: ["字卡-Bf-AI-icon", "字卡-Bf-PS-icon", "字卡-Bf-Office-icon"],
      },
      after: {
        title: "After Now",
        jobs: [{ company: " UI/UX Designer" }],
        skills:
          "Branding Design / Graphic Design UI/UX Design / SiteMap / Flow Chart / UI Flow Wireframe / Mockup / Prototype / RWD Design Product Management",
        tools: [
          "About-1-Web-XD-icon",
          "字卡-Bf-AI-icon",
          "字卡-Bf-PS-icon",
          "字卡-Bf-Office-icon",
        ],
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
#about {
  height: calc(100vh - 90px);
  max-height: calc(100vh - 90px);
  min-height: 432px;
  padding-top: 90px;
  @media (max-width: 767px) {
    height: auto;
    max-height: unset;
    padding-top: 0px;
  }
  .base {
    padding-left: 96px;
    @media (max-width: 767px) {
      padding-left: 1rem;
    }
  }
  .selfic {
    min-width: 310px;
    @media (max-width: 767px) {
      min-width: unset;
      width: 100%;
    }
    z-index: 1;
    &.line {
      transform: scale(1.52) translateY(-4%);
      z-index: 0;
      @media (max-width: 767px) {
        transform: scale(1.35) translateY(-4%);
        left: 0;
        max-width: 100vw;
      }
    }
  }
}
.content {
  width: 50%;
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
}
#detail {
  height: 100vh;
  @media (max-width: 767px) {
    height: unset;
  }
  .detail-wrapper {
    transition: all 0.3s;
    background-image: url("@/assets/images/字卡-色塊.png");
    height: 400px;
    @media (max-width: 767px) {
      height: unset;
    }
  }
  .icon-tool {
    height: 34px;
    @media (max-width: 767px) {
      height: 18px;
    }
  }
  .arrow {
    right: 1rem;
    width: 1rem;
  }
}
.after {
  transform: rotate3d(1, 0, 0, 180deg);
  *:not(p):not(.arrow) {
    transform: rotate3d(1, 0, 0, 180deg);
  }
  .flex p {
    transform: rotate3d(1, 0, 0, 180deg);
  }
}

.w-8 {
  min-width: 32px;
}

.box-UU {
  width: 100px;
  height: 240px;
  right: 0;
  top: calc(50% - 120px);
  z-index: -1;
  @media (max-width: 767px) {
    right: -16px;
    width: 90px;
    height: 230px;
  }
}

.h-300 {
  height: 300px;
}
.mobile-jex {
  padding-left: 30%;
}
</style>
