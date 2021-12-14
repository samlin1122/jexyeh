<template lang="pug">
img.w-screen(:src='getImageUrl("Work-2-頁首大圖")')
.w-screen.bg-white.text-left.pt-10(class='md:text-center')
  .base
    p.text-4xl.font-bold.text-blue 個人作品集網站
    p.mt-4 由於過往設計作品皆以服飾配件類商品為主，此次為統整與展示UI/UX及視覺相關作品
      span(v-if='isMobile') ，
      span(v-else) #[br]
      span 特以規劃個人作品集網站並完成上線供紀錄與瀏覽，並從其中的規劃、設計及前端合作上累積實務經驗

.base.py-20
  .Divide.mb-2
  .part-2.flex.items-center.flex-col(class='md:flex-wrap md:flex-row')
    .part-2-section.mt-8.w-full(v-for='item in part2', class='md:w-1/2 md:pr-10')
      p.text-2xl.font-bold.text-blue.my-5(class='md:mb-3') {{item.title}}
      p(v-if='item.describe') {{item.describe}}
      li(v-if='item.list', v-for='list in item.list') {{list}}
  .Divide.my-10
  .part-3.flex
    .left.pr-4(class='w-1/2')
      p.text-2xl.font-bold.text-blue.mb-3 任務-Role
      p(v-for='item in part3[0]') {{item}}
    .right(class='w-1/2')
      p.text-2xl.font-bold.text-blue.mb-3 工具-Tools
      p(v-for='item in part3[1]') {{item}}
      p.text-2xl.font-bold.text-blue.mb-3.mt-8 時間表-Timeline
      p 10 Days I 120 hours

.w-screen.bg-blue.text-left.py-20(class='md:text-center')
  .base
    p.text-4xl.font-bold.text-white 資訊架構
    p.text-2xl.font-bold.text-gray-light Information Architecture

.base
  .bg-white.text-left.pt-20.pb-10(class='md:text-center')
    p.text-4xl.font-bold.text-blue 站點地圖 
    p.text-2xl.font-bold.mb-3.mt-1.text-gray-light Sitemap
    p 創造站點地圖可直觀的確認整體的內容架構及佈局邏輯
  img.mx-auto(:src='getImageUrl("Work-2-站點地圖")', class='w-3/5')
  .Divide.my-10

.base
  .bg-white.text-left.py-10(class='md:text-center')
    p.text-4xl.font-bold.text-blue 流程圖
    p.text-2xl.font-bold.mb-3.mt-1.text-gray-light Flow Chart
    p 接續以流程圖來釐清達成需求目標流程上的步驟及程序，同步設定並檢驗使用者在操作上將面臨相關的功能狀態
  img.mx-auto(:src='getImageUrl("Work-2-流程圖")', class='w-3/5')
  .Divide.my-10

.base
  .bg-white.text-left.py-10(class='md:text-center')
    p.text-4xl.font-bold.text-blue 線框稿
    p.text-2xl.font-bold.mb-3.mt-1.text-gray-light Wireframes
    p 依照規劃整理的資訊框架以及功能設定，繪製了線框稿以作為初期的介面模擬
img.w-screen(:src='getImageUrl("Work-2-線框稿")')
.h-20
.w-screen.bg-blue.text-left.py-20(class='md:text-center')
  .base
    p.text-4xl.font-bold.text-white 介面設計
    p.text-2xl.font-bold.text-gray-light.mb-4 UI Design
    p.text-white 創建能表現個人特色的介面風格，包含相關色彩運用及元素的結合
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 簡潔的排版配置以留白、色塊點綴與大量滿版圖做貫穿
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 並以黑白色調與冷暖不同的灰階色系，讓整體視覺帶出具有層次的豐富性

.base
  .items-center.justify-between.mt-8.mb-4(class='md:flex')
    .text-left.w-full(class='md:w-1/2 md:text-center')
      p.text-black.leading-6 首頁以Banner式的版面切換呈現#[br]過去、現在、未來三種職務角色(左)
    .text-left.w-full(class='md:w-1/2 md:text-center')
      p.text-black.leading-6 個人簡介過往職能與UI/UX共鳴處#[br]以翻轉字卡方式呈現經歷與技能(右)
  img.w-screen(:src='getImageUrl("Work-2-介面設計圖")')
  .text-left.my-8(class='md:text-center')
    p.text-black.leading-6 作品集頁面透過點選的動態顯示作品名稱#[br]作品頁面彼此間也能於置底選項中切換瀏覽

img.w-screen.hidden(:src='getImageUrl("Work-2-作品集說明")', class='md:block')
img.w-screen(:src='getImageUrl("Work-2-介面設計-2")', class='md:hidden')

.w-screen.bg-blue.text-left.py-20.mt-20(class='md:text-center')
  .base
    p.text-4xl.font-bold.text-white 視覺指南
    p.text-2xl.font-bold.text-gray-light Visual Guideline
.base.mt-10
  .bg-white.text-left(class='md:text-center')
    p.text-4xl.font-bold.text-blue 色彩計畫
    p.text-2xl.font-bold.mb-3.mt-1.text-gray-light Color Plan
    p 在黑與白的基礎色調上，以略帶金屬色調的漸層色塊點綴整體視覺
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 同樣以冷暖不同的灰階色系，讓整體帶出具有層次的豐富性，並區別主副標語與內容間的輕重排序
  img.mx-auto.color-plan(:src='getImageUrl("Web-Work-2-Color Plan")')
  .Divide.my-10

.base.text-center
  .bg-white.pb-10.text-left(class='md:text-center')
    p.text-4xl.font-bold.text-blue 字型風格
    p.text-2xl.font-bold.mb-3.mt-1.text-gray-light Font Style
    p 經典的Helvetica字型能讓使用者感到熟悉及畫面協調，進而將視覺焦點放在網站內容的本身而不受干擾
  .color-plan
    p.font-bold.text-3xl.text-gray-bg Helvetica
    .flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
      p.text-40.font-bold JexYeh
      p.text-xs Font size: 40px
    .flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
      p.text-32 JexYeh
      p.text-xs Font size: 32px
    .flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
      p.font-light.text-2xl JexYeh
      p.text-xs Font size: 24px

img.w-screen.mt-20(:src='getImageUrl("Work-2-頁尾大圖")')
.h-20

</template>

<script>
export default {
  name: "webPage",
  data: () => ({
    part2: [
      {
        title: "目標-Objectives",
        describe:
          "完成個人作品集整理記錄並達成線上瀏覽的功能，以及讓閱讀者 在不同裝置介面上均能有完整的使用體驗，並在上線過程累積與 前端協作的實務經驗",
      },
      {
        title: "架構-Architecture",
        list: [
          "Work-個人職務角色的簡介以及作品集的連結",
          "About為過往經歷及技能的說明",
          "Contact-個人聯繫方式與履歷連結",
        ],
      },
      {
        title: "課題-Issue",
        list: [
          "頁面上簡潔卻充分示意過往與當前擔任的職務 ",
          "分析商品設計的經歷與轉職UI/UX間的共鳴與切入點 ",
          "UI/UX及過往與視覺操作相關作品的展現 ",
          "以前端作業為主的聯繫方式",
        ],
      },
      {
        title: "方案-Solution",
        list: [
          "過去、現在、未來三角色切換達成轉職者的直覺理解",
          "自介頁中透過文字及字卡呈現前後角色的差異與關聯",
          "作品集頁中展示台灣盃、個人作品集及商設相關作品",
          "信箱複製按鈕、簡易聯絡資訊及履歷頁的連結做呈現",
        ],
      },
    ],
    part3: [
      [
        "UI/UX Design",
        "Information Architecture",
        "Journey Mapping",
        "Interaction Design",
        "Wireframing",
        "Prototyping",
      ],
      ["Adobe XD ", "Adobe Illustrator", " Adobe Photoshop"],
    ],
  }),
};
</script>
<style lang="scss" scoped>
.color {
  &-wrapper {
    max-width: 560px;
  }
  img {
    width: 100px;
  }
}
.text {
  &-40 {
    font-size: 40px;
    line-height: 1;
  }
  &-32 {
    font-size: 32px;
    line-height: 1;
  }
}
.color-plan {
  width: 100%;
  padding: 0 55px;
  @media (max-width: 767px) {
    padding: 0;
  }
}
</style>
