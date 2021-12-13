<template lang="pug">
img.w-screen(:src='getImageUrl("Work-1-頁首大圖")')
.base.py-20
  .part-1.text-left.pb-10(class='md:text-center')
    p.text-2xl.font-bold.text-blue.mb-3(class='md:text-4xl') Taiwanese Cup#[br]台灣盃自由潛水深度賽
    p 台灣盃深度賽為台灣第一場自由潛水深度賽#[br]是由意潛(One Freediving)與女子的海(Ms. Ocean)，於2021年3月24-25兩天在小琉球共同主辦#[br]過往受限台灣海域深度、洋流及法規等問題，皆以泳池賽的舉辦為主，此次主辦第一屆深度賽更顯難能可貴
  .Divide.mt-10.mb-2
  .mt-8(class='md:flex')
    .part-2.flex.flex-col.justify-between.text-left(class=' md:w-1/2')
      .mb-8(v-for='item in part2', class='md:mb-0 md:pr-10')
        .w-full.text-center(v-if='item.isButton', class='md:text-left')
          button.border-2.border-blue.rounded-full.text-blue.mx-auto.mb-8.text-xs(class='hover:bg-blue hover:text-white', @click='PrototypeLink') {{item.title}}
        p.text-2xl.font-bold.text-blue.mb-3(v-else) {{item.title}}
        p(v-if='item.describe') {{item.describe}}
        li(v-if='item.list', v-for='list in item.list') {{list}}
    .Divide.mb-10(class='md:hidden')
    .part-3.flex.justify-between.border-gray.items-baseline(class='md:w-1/2 md:border-l md:pl-10 md:flex-col')
      .mb-8.hidden(v-for='item in part3', class='md:block')
        p.text-2xl.font-bold.text-blue.mb-3 {{item.title}}
        p(v-for='list in item.list') {{list}}
      .pr-10(class='w-1/2 md:hidden')
        p.text-2xl.font-bold.text-blue.mb-3 {{part3[0].title}}
        p(v-for='list in part3[0].list') {{list}}
      .flex.flex-col.justify-between(class='w-1/2 md:hidden')
        .mb-3
          p.text-2xl.font-bold.text-blue.mb-3 {{part3[1].title}}
          p(v-for='list in part3[1].list') {{list}}
        .mb-3.mt-14
          p.text-2xl.font-bold.text-blue.mb-3 {{part3[2].title}}
          p(v-for='list in part3[2].list') {{list}}
.w-screen.bg-black
  .base.py-20.flex.flex-wrap.items-center.justify-between
    .menu.flex.items-center.justify-between.border-b.border-gray.pb-8.mb-8.w-full(v-for='item in hash', class='md:w-2/5', @click='anchor(item.id)')
      div
        p.text-3xl.text-white {{item.title}}
        p.text-blue {{item.subtitle}}
      img.w-5.transition(:src='getImageUrl("Work-1-Menu-Arrow@2x")')
.h-20
#Research.w-screen.bg-blue.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-white(class='md:text-4xl') 市場研究與競品分析
    p.text-2xl.font-bold.text-gray-light.mb-4 Market Research and Competitor Analysis
    p.text-white 官網架設的目的為避免社群平台易產生的資訊覆蓋與準確性問題，並考量方便賽事、選手、過往紀錄等資訊的統整分類
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 初步針對自由潛水賽事及型態相近的網站做研究與分析

.w-screen.bg-white.flex.flex-row-reverse.mt-20
  img(v-for='item in 4', :src='getImageUrl(`Work-${item}`)',class='w-1/4')
.base.bg-white.mt-10
  li.mb-8(v-for='item in AnalysisLi', class='md:mb-0') {{item}}
  .Divide.my-10
  .flex.flex-wrap.justify-around
    div.mb-5.w-full(v-for="item in AnalysisData1", class='md:w-5/12')
      img.w-full(:src='getImageUrl(`Work-1-競品-${item.image}`)')
      p.font-bold.text-2xl.text-blue.my-5 {{item.title}}
      p.font-bold.text-xl 優勢
      li(v-for='good in item.good') {{good}}
      p.font-bold.text-xl.mt-5 劣勢
      li(v-for='bad in item.bad') {{bad}}
  .Divide.my-10
  .flex.justify-around.flex-col(class='md:flex-row')
    div.w-full.mb-8(v-for='item in AnalysisData2', class='md:w-5/12 md:mb-0')
      p.font-bold.text-2xl.text-blue {{item.title}}
      p.font-bold.text-xl.mb-8 {{item.subtitle}}
      p.mb-8(v-for='content in item.content') {{content}}
      li.font-bold(v-for='list in item.list') {{list}}

#User.w-screen.bg-blue.text-left.mt-20.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-white(class='md:text-4xl') 使用者訪談
    p.text-2xl.font-bold.text-gray-light.mb-4 User Interviews
    p.text-white 建立一個訪談計畫，針對共9位自由潛水相關人員進行一對一的訪談
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 以各種不同角色面向的需求角度，去調查了解網站上需對應及呈現的功能資訊
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 就競品網站內容及對整體架構的假設下，設定了相關提問條件情境及問題進行訪談調查：

.base.bg-white.py-20
  .flex.flex-col-reverse(class='md:flex-row')
    .pr-10.w-full(class='md:w-1/2')
      p.font-bold.leading-8 人員：
        span.font-normal 主辦2人 / 裁判、選手、賽務各1人 / 觀眾4人
      p.font-bold.leading-8 年齡：
        span.font-normal 25-42歲 性別：男5人、女4人
      p.font-bold.leading-8 方式：
        span.font-normal 通話、視訊
      p.font-bold.leading-8 時間：
        span.font-normal 15-20分鐘 / 人
      p.font-bold.leading-8 問題：
      p.leading-8 Q1：期望在網站上獲得的資訊及幫助? 
      p.leading-8 Q2：期待選手哪些資訊?個人社群連結? 
      p.leading-8 Q3：是否有過往賽事紀錄查詢需求? 
      p.leading-8 Q4：官網上還是外部表單完成賽事報名? 
      p.leading-8 Q5：官網上可直接購買賽事周邊商品的功能? 
      p.leading-8 Q6：休賽期能持續其他自潛賽事新聞更新?
    img.w-full.mb-8(class='md:w-1/2 md:mb-0', :src='getImageUrl("Work-1-訪談-人員")')
  .Divide.my-10

.w-screen.bg-white.text-left.pb-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 訪談研究
    p.text-2xl.font-bold.mb-4.text-gray-light Interviews Research
    p 依造訪談結果綜合各角色依自身使用情境的模擬及過往經驗，整理歸納出三大需求及反饋方向
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 並列舉關鍵功能及資訊項目以做為後續規劃架構的基礎依據

img.w-screen(:src='getImageUrl("Work-1-Interview-Web@2x")')

#Persona.w-screen.bg-white.text-left.pt-20.pb-10(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 人物誌
    p.text-2xl.font-bold.mb-4.text-gray-light Persona
    p 藉由訪談研究的結果建構出三個人物誌角色，並模擬其於賽事資訊相關的對應需求
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 現行條件上將會遇到的難題，以及官網於架構功能上將解決的目標任務

.base.bg-white.pb-20.justify-between.hidden(class='md:flex')
  .w-30(v-for='item in PersonaData')
    img.mb-6(:src='getImageUrl(item.img)')
    p.font-bold.leading-8 角色：
      span.font-normal {{item.character}}
    p.font-bold.leading-8 名字：
      span.font-normal {{item.name}}
    p.font-bold.leading-8 年齡：
      span.font-normal {{item.age}}
    p.font-bold.leading-8 性別：
      span.font-normal {{item.gender}}
    p.font-bold.leading-8 居住：
      span.font-normal {{item.live}}
    p.font-bold.leading-8 職業：
      span.font-normal {{item.job}}
    p.font-bold.leading-8 年資：
      span.font-normal {{item.year}}
    p.font-bold.leading-8 收入：
      span.font-normal {{item.income}}
    p.font-bold.leading-8.mt-6 動機：
      span.font-normal {{item.motivation}}
    p.font-bold.leading-8 難題：
      span.font-normal {{item.problem}}
    p.font-bold.leading-8 目標：
      span.font-normal {{item.target}}

.base.bg-white.pb-20(class='md:hidden')
  .w-full(v-for='item in PersonaData')
    .flex.my-8
      img.object-contain(:src='getImageUrl(item.img)', class='w-1/2')
      .ml-10
        p.font-bold.leading-8 角色：
          span.font-normal {{item.character}}
        p.font-bold.leading-8 名字：
          span.font-normal {{item.name}}
        p.font-bold.leading-8 年齡：
          span.font-normal {{item.age}}
        p.font-bold.leading-8 性別：
          span.font-normal {{item.gender}}
        p.font-bold.leading-8 居住：
          span.font-normal {{item.live}}
        p.font-bold.leading-8 職業：
          span.font-normal {{item.job}}
        p.font-bold.leading-8 年資：
          span.font-normal {{item.year}}
        p.font-bold.leading-8 收入：
          span.font-normal {{item.income}}
    p.font-bold.leading-8.mt-6 動機：
      span.font-normal {{item.motivation}}
    p.font-bold.leading-8 難題：
      span.font-normal {{item.problem}}
    p.font-bold.leading-8 目標：
      span.font-normal {{item.target}}
    .Divide.my-10

#Information.w-screen.bg-blue.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-white(class='md:text-4xl') 資訊架構
    p.text-2xl.font-bold.text-gray-light.mb-4 Information Architecture
    p.text-white 根據市場與品牌自身的各項分析與訪談研究的見解結果，透過人物誌建構出相關的需求與目標
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 將相關資訊及對應的功能進行統整分類及組織管理的架構設定，標記出使用導航上的功能選單以便釐清整體的脈絡

.w-screen.bg-white.text-center.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 站點地圖
    p.text-2xl.font-bold.mb-4.text-gray-light Sitemap
    p 創造站點地圖可直觀的確認整體的內容架構及佈局邏輯

img.base.w-full.mb-20(:src='getImageUrl("Work-1-站點地圖")')

#Interaction.w-screen.bg-blue.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-white(class='md:text-4xl') 互動設計
    p.text-2xl.font-bold.text-gray-light Interaction Design

.w-screen.bg-white.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 流程圖
    p.text-2xl.font-bold.mb-4.text-gray-light Flow Chart
    p 接續以流程圖來釐清達成需求目標流程上的步驟及程序，同步設定並檢驗使用者在操作上將面臨相關的功能狀態
.base
  img(:src='getImageUrl("Work-1-流程圖")')
  .Divide.my-10

.w-screen.bg-white.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 任務流程圖
    p.text-2xl.font-bold.mb-4.text-gray-light Task Flow
    p 藉由Task Flow來檢視三位Persona的需求及目標流程，並確保操作直覺及解決與改善相關流程問題
.base
  img(:src='getImageUrl("Work-1-任務流程圖")')
  .Divide.my-10

.w-screen.bg-white.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 線框稿
    p.text-2xl.font-bold.mb-4.text-gray-light Wireframes
    p 依照規劃整理的資訊框架以及功能設定，繪製了線框稿以作為初期的介面模擬

img.w-screen(:src='getImageUrl("Work-1-線框稿")')

.w-screen.bg-white.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 響應式介面
    p.text-2xl.font-bold.mb-4.text-gray-light Responsive UI
    p 在線框稿的框架下進行整體視覺風格與原則的設定
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 依使用介面、流程以及架構等，創建響應式介面的可用性安排與評估
.relative.w-screen
  img.w-screen(:src='getImageUrl("Work-1-響應式介面@3x")')
  button.rwd.absolute.border-2.border-blue.rounded-full.text-blue.text-xs.py-3.px-16.whitespace-nowrap(class='hover:bg-blue hover:text-white', @click='PrototypeLink') View Prototype

.w-screen.bg-white.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 可用性測試
    p.text-2xl.font-bold.mb-4.text-gray-light Usability Testing
    p 為了要確保Prototype有達成設定的目標需求，以及在相關設計均讓使用者帶來美好的使用介面與體驗
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 特別從各角色類別中挑選一名受試者進行使用並反饋，做為日後實際上線的調整方向及重點
.base.pb-20
  img.hidden(:src='getImageUrl("Work-1-可用性測試")', class='md:block')
  img(:src='getImageUrl("Work-1-可用性測試@3x")', class='md:hidden')

#Visual.w-screen.bg-blue.text-left.py-20(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-white(class='md:text-4xl') 視覺指南
    p.text-2xl.font-bold.text-gray-light.mb-4 Visual Guideline
    p.text-white 台灣盃與官方網站整體主視覺Logo、配色、字型等相關原則指南

.w-screen.bg-white.text-left.pt-20.pb-10(class='md:text-center')
  .base
    p.text-2xl.font-bold.text-blue.mb-4(class='md:text-4xl') Logo
    p 以水上運動與競技領域的風格角度，藉由簡潔有力的字體與動感流線的漸層色系，設計台灣盃賽事的主副Logo
.base
  img.mx-auto.color-plan-l(:src='getImageUrl("Work-1-Logo")')
  .Divide.my-10
  .bg-white.text-left(class='md:text-center')
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 色彩計畫
    p.text-2xl.font-bold.mb-4.text-gray-light Color Plan
    p 藉由黑與白作為基礎色調，選用直覺聯想大海的深藍色作為主色調，並以湖水綠作為整體的視覺點綴色
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 網站內藉幾種不同深淺的灰色，以區別主副標語與內容間的輕重排序

  img.mt-8.mx-auto.color-plan(:src='getImageUrl("Web-Work-1-Color Plan")')

  .Divide.my-10

.base.text-center
  .bg-white.pb-10.text-left(class='md:text-center')
    p.text-2xl.font-bold.text-blue(class='md:text-4xl') 字型風格
    p.text-2xl.font-bold.mb-4.text-gray-light Font Style
    p DINPro字型生動的帶出運動競技類活動所欲呈現簡潔有力的動態感
      span.text-white(v-if='isMobile') ，
      span(v-else) #[br]
      span.text-white 並藉由其中不同粗細的型態彰顯主副內容的區隔
  p.font-bold.text-3xl.text-gray-bg.font-dinpro DINPro
  .font-style.flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
    p.text-4xl.font-dinpro.font-black Taiwanese Cup
    p.text-xs Font size: 36px
  .font-style.flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
    p.text-3xl.font-dinpro.font-bold Taiwanese Cup
    p.text-xs Font size: 30px
  .font-style.flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
    p.text-2xl.font-dinpro.font-medium Taiwanese Cup
    p.text-xs Font size: 24px
  .font-style.flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
    p.text-xl.font-dinpro Taiwanese Cup
    p.text-xs Font size: 20px
  .font-style.flex.justify-between.border-b.pb-1.mt-5.mx-auto.items-end.h-14(class='md:h-16')
    p.font-light.font-dinpro Taiwanese Cup
    p.text-xs Font size: 16px

img.w-screen.mt-20(:src='getImageUrl("Work-1-頁尾大圖")')
.h-20
</template>

<script>
export default {
  name: "taiwaneseCup",
  data: () => ({
    part2: [
      {
        title: "背景-Background",
        describe:
          "第二屆將擴大規模並成為定期舉辦之國際賽事，相關賽務資訊有線上統整必要性，以便選手及觀賽民眾能方便獲取，藉負責賽事主視覺機會進行官網設計規劃安排",
      },
      {
        title: "目標-Objectives",
        list: [
          "提供觀賽民眾獲取完整精準的賽事相關資訊",
          "回顧歷年賽事各項紀錄及完整選手成績",
          "周邊紀念商品線上電商銷售管道",
        ],
        lt: true,
      },
      {
        title: "成果-Result",
        describe:
          "藉由競品分析與訪談研究釐清需求目標，透過資訊分類管理及功能流程架構的設定，完成滿足使用者需求、簡便易懂的操作體驗以及舒適友善的使用介面",
      },
      {
        title: "View Prototype",
        isButton: true,
        url: "",
      },
    ],
    part3: [
      {
        title: "任務-Role",
        list: [
          "Branding Design",
          "UI/UX Design",
          "User Research",
          "Information Architecture",
          "Journey Mapping",
          "Interaction Design",
          "Wireframing",
          "Usability Testing",
          "Prototyping",
        ],
      },
      {
        title: "工具-Tools",
        list: ["Adobe XD ", "Adobe Illustrator", " Adobe Photoshop"],
      },
      {
        title: "時間表-Timeline",
        list: ["10 Days I 120 hours"],
      },
    ],
    hash: [
      {
        title: "研究與分析",
        subtitle: "Research and Analysis",
        id: "Research",
      },
      {
        title: "資訊架構",
        subtitle: "Information Architecture",
        id: "Information",
      },
      { title: "使用者訪談", subtitle: "User Interviews", id: "User" },
      { title: "互動設計", subtitle: "interaction Design", id: "Interaction" },
      { title: "人物誌", subtitle: "Persona", id: "Persona" },
      { title: "視覺指南", subtitle: "Visual Guideline", id: "Visual" },
    ],
    AnalysisLi: [
      "Vertical Blue，簡稱VB，自潛指標性的垂直藍名人邀請賽",
      "Asian Freediving Cup，簡稱AFC，鄰近台灣的自由潛水亞洲盃",
      "Fédération Internationale de Natation (法語)，簡稱FINA，同為水上運動性質的國際游泳總會",
      "Ultimate Fighting Championship，簡稱UFC，賽事以個人為主的終極格鬥冠軍賽",
    ],
    AnalysisData1: [
      {
        title: "Vertical Blue",
        image: "VB",
        good: ["賽事紀錄保存完整", "賽程資訊及成績分類詳細完整"],
        bad: [
          "各年度獨立頁面，易造成與主架構資訊重疊",
          "無法於同頁面做查詢切換",
        ],
      },
      {
        title: "Asia Freediving Cup",
        image: "AFC",
        good: ["首頁完成最新賽事資訊", "中英韓版介紹貼心閱讀"],
        bad: ["排版過多文字及非當前必要性資訊", "功能與選項分類邏輯不清與重複"],
      },
      {
        title: "FINA",
        image: "FINA",
        good: [
          "選項分類清晰並藉下拉細項使資訊完整",
          "各頁面皆能輕鬆篩選分類特定項目資訊",
        ],
        bad: [
          "為精簡選項導致部分功能分類較不直覺",
          "上排其他細項可規劃其他選項類別歸類",
        ],
      },
      {
        title: "UFC",
        image: "UFC",
        good: [
          "周邊商品網頁形式及其內容規劃完整豐富",
          "賽票與其他視聽加值業務整合完整",
        ],
        bad: [
          "News資訊均為影片限制閱讀性及點擊意願",
          "網站點選及滾動特效表現延遲致體驗欠佳",
        ],
      },
    ],
    AnalysisData2: [
      {
        title: "品牌分析",
        subtitle: "Brand Analysis",
        content: [
          "作為台灣第一場自由潛水深度賽事，主辦方同時也致力於成為國際型賽事，在對外溝通與資訊傳達上需要一個正式且國際化的平台，在語言調性上需滿足中、英文雙語的服務。",
          "針對賽後成績的查詢與分類上，達成簡潔直覺的操作與篩選方式、協助選手於國際上增加曝光機會、完成站內周邊商品銷售目標功能，皆是台灣盃深度賽官方網站的重點任務。",
        ],
        list: [
          "中、英文同步的網站調性設定",
          "簡潔直覺的成績查詢與分類操作",
          "增加選手於國際賽事頁面曝光機會",
          "周邊商品線上銷售功能",
        ],
      },
      {
        title: "課題分析",
        subtitle: "Issue Analysis",
        content: [
          "固定每年三月底比賽期間較有賽務資訊的更新及流量，其他時間維持賽事回顧的更新及周邊商品銷售外，其他時間偏向靜態的資訊展示。設法就多媒體資訊、服務結合互動設計做為網站流量的延續。",
        ],
        list: [
          "延伸課程、服務與商品規劃",
          "獨家多媒體影音增加點閱流量",
          "結合互動設計做使用功能優化",
          "賽事期間外熱度流量維持",
        ],
      },
    ],
    PersonaData: [
      {
        character: "觀眾",
        name: "阿傑",
        age: "30",
        gender: "男",
        live: "台北租屋",
        job: "保險業務",
        year: "7年",
        income: "NT60,000",
        motivation: "查詢選手資訊、隔日申報深度",
        problem: "社群更新頻繁難取得資訊",
        target: "登錄選手資訊、每日深度申報",
        img: "Work-1-人物誌-阿傑",
      },
      {
        character: "觀眾",
        name: "Janet",
        age: "25",
        gender: "女",
        live: "新北家裡",
        job: "接案設計師",
        year: "3年",
        income: "NT45,000",
        motivation: "找回會員密碼、購買周邊商品",
        problem: "連結到外部賣場步驟繁瑣",
        target: "一站式電商便利、分類易懂",
        img: "Work-1-人物誌-Janet",
      },
      {
        character: "選手",
        name: "Patty",
        age: "29",
        gender: "女",
        live: "台北租屋",
        job: "自由潛水教練",
        year: "1年",
        income: "NT75,000",
        motivation: "完成報名、查詢往年天氣狀況",
        problem: "外部表單核對繁瑣，天氣難追查",
        target: "會員制度報名、新增歷年天氣",
        img: "Work-1-人物誌-Patty",
      },
    ],
  }),
  methods: {
    PrototypeLink() {
      window.open(
        "https://xd.adobe.com/view/3a589399-8aac-43fb-972f-463c7ed3c0a9-6f0b/screen/3a39abbe-b5d7-48e3-afbb-b4949a39717a"
      );
    },
    anchor(id) {
      const target = document.getElementById(id);
      const top = this.isMobile ? target.offsetTop - 90 : target.offsetTop;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.part-2 {
  button {
    width: 198px;
    height: 36px;
  }
}

.color {
  &-wrapper {
    max-width: 560px;
  }
  img {
    width: 100px;
  }
}
.rwd {
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 767px) {
    bottom: 20px;
  }
}

.color-plan {
  width: 100%;
  padding: 0 55px;
  @media (max-width: 767px) {
    padding: 0;
  }
  &-l {
    padding: 0 110px;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
}
.menu {
  &:hover {
    border-bottom-width: 2px;
    img {
      transform: scale(1.1);
    }
  }
}
.w-30 {
  width: 30%;
}
</style>
