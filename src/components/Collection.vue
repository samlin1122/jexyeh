<template lang="pug">
#collection.cursor-pointer
  .item.relative(@click='$router.push({ name : "TaiwaneseCup"})')
    img.bg-image(alt="Vue logo" src="@/assets/images/台灣盃.png")
    .content.absolute.inset-0
        p.text-white.text-2xl.font-bold 台灣盃深度賽
        p.text-white UI/UX | Branding | Product
        p.text-white Mobile
  .portfolio.items-center.w-full(class='md:flex')
    .item.relative.w-full(class='md:w-1/2', @click='$router.push({ name : "WebPage"})')
      img.bg-image(alt="Vue logo" src="@/assets/images/Work-2-頁首大圖.png")
      .content.absolute.inset-0
        p.text-white.text-2xl.font-bold 個人網頁
        p.text-white UI/UX
        p.text-white Desktop | Mobile
    .item.relative.w-full(class='md:w-1/2', @click='$router.push({ name : "Accessories"})')
      img.bg-image(alt="Vue logo" src="@/assets/images/服飾配件.png")
      .content.absolute.inset-0
        p.text-white.text-2xl.font-bold 服飾配件
        p.text-white Branding | Product
        p.text-white Desktop
</template>

<script>
export default {
  name: "collection",
};
</script>

<style lang="scss" scoped>
#collection {
  width: 100%;
  min-height: 432px;
  .item {
    width: 100%;
    max-width: 100%;
    min-height: 216px;
    max-height: 50vh;
    overflow: hidden;
    position: relative;
    @media (max-width: 767px) {
      max-height: 271px;
      height: 271px;
    }
    &:hover {
      .content {
        opacity: 1;
      }
    }
    .bg-image {
      transition: all 0.3s;
      width: 100%;
      object-fit: cover;
      z-index: -1;
      @media (max-width: 767px) {
        min-height: 271px;
      }
    }
    .content {
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      transition: all 0.3s;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }
  }
  & > .item .bg-image {
    background-color: #5e9ab5;
  }
  .portfolio {
    min-height: 216px;
    max-height: 50vh;
    @media (max-width: 767px) {
      max-height: unset;
    }
    .item {
      &:first-child .bg-image {
        background-color: #9f9d98;
      }
      &:last-child .bg-image {
        background-color: #989a84;
      }
    }
  }
}
</style>
