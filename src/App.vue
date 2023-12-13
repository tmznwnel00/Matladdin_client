<!-- App.vue -->

<template>
  <div class="background">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // TitleScreen
  },
  data(){
    return {
    }
  },
  methods : {
  }
}
</script>

<style>
.profile{
position: relative;
width: 328px;
height: 283px;
left: 20px;
top: 79px;
background: #F5F6FA;
}
.background{
  height: 640px;
  width: 360px;
  margin: 0 auto;
  overflow: hidden;
  border:1px solid #643ce9;
}
.Title{
  font-family: "Heading2";
  color:#643ce9;
  font-size: 20px;
  position: absolute;
  width: 314px;
  height: 32px;
  left: calc(50% - 314px/2);
  top: 28px;
  text-align: center;
}
.paragraph{
position: relative;
width: 314px;
height: 36px;
left: calc(50% - 314px/2);
font-family: 'Heading1';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
text-align: center;

color: #000000;
}
.Button_h{
  position: absolute;
  left: calc(50% - 328px/2);
  top: 460px;
  font-family: "Heading2";
  color:white;
  background:#643ce9;
  font-size: 20px;
  padding: 15px 132px; 
  border-radius: 8px;
  border: none;
  margin: auto;
  display: block;
}
@font-face {
  font-family:'Heading1';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
}
@font-face {
  font-family:'Heading2';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
}
@font-face {
  font-family:'Heading3';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
@font-face {
  font-family:'Heading4';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
@font-face {
  font-family:'Body1';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
}
@font-face {
  font-family:'Body2';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}
@font-face {
  font-family:'Body3';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
@font-face {
  font-family:'Body4';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
@font-face {
  font-family:'Caption';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
@font-face {
  font-family:'Paragraph';
  src: url('assets/fonts/Pretendard-SemiBold.otf') format('opentype');
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>
