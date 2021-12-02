<template lang="pug">
div(v-for='item in data')
  img.w-screen(:src='getImageUrl(item.url)')
  .base
    p.text-left.text-blue.font-bold.text-2xl.mb-6.mt-12(class='md:text-center') {{item.title}}
    p.text-left.text-gray.font-light.text-base.mb-10(class='md:text-center') {{item.subtitle}}
</template>

<script>
export default {
  name: "accessories",
  data: () => ({
    data: [
      {
        title: "F.O.R Maniac-識別設計",
        subtitle:
          "任職於伯諾公司期間，負責旗下通路品牌【F.O.R Maniac】的CI識別設計",
        url: "Work-3-FOR Maniac",
      },
      {
        title: "DAYONE-Logo設計",
        subtitle:
          "任職於寶悍公司期間，負責旗下運動休閒服飾品牌【DAYONE】的CI識別設計，包含品牌MI以及VI等",
        url: "Work-3-D1-Logo設計",
      },
      {
        title: "DAYONE-色彩&指南",
        subtitle: "VI視覺識別包含標準色及相關Logo運用等guildline設定",
        url: "Work-3-D1-色彩指南",
      },
      {
        title: "DAYONE-Mockup",
        subtitle: "相關商品及周邊備品於品牌提案初期合成示意效果",
        url: "Work-3-D1-Mockup-1",
      },
      {
        title: "DAYONE-Mockup",
        subtitle:
          "整合賽事資訊、運動服務及電商銷售之APP icon設計，於品牌提案初期合成示意效果",
        url: "Work-3-D1-Mockup-2",
      },
      {
        title: "DAYONE-商品設計",
        subtitle:
          "定調運動結合休閒的品牌路線，負責系列商品的設計開發，以及品牌運作與採購規劃",
        url: "Work-3-D1-商品設計",
      },
      {
        title: "Moshi-商品設計",
        subtitle:
          "任職於尚宏電子期間，負責公司旗下包袋類商品的設計開發，並建立系列功能袋的設定通則",
        url: "Work-3-Moshi-商品設計-1",
      },
      {
        title: "Moshi-商品設計",
        subtitle:
          "依品牌調性及流行趨勢，設計系列包款及相關配件，符合品牌風格及滿足使用需求同時，也在外觀與功能上尋求突破",
        url: "Work-3-Moshi-商品設計-2",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
