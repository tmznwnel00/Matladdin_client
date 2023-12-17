<!-- App.vue -->
<template>
  <div v-on:mouseover="getLocation">
    <!-- 여기에 마우스 올려봐 : {{ textContent }} -->
  </div>
  <div class="background">
    <router-view/>
  </div>
</template>

<script>
// import {onBeforeRouteLeave} from 'vue-router'
export default {
  name: 'App',
  components: {
    // TitleScreen
  },
  data(){
    return {
      modal_isOpen : false,
      question: {},
      result_food: {},
      matbti: {},
      restaurant_list:{},
      location:[]
    }
  },
  methods : {
    getLocation(){
      if(!("geolocation" in navigator)) {
        this.textContent = 'Geolocation is not available.';
        return;
        }
        this.textContent = 'Locating...'
        
        // get position
        navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        this.textContent = 'Your location data is ' + this.latitude + ', ' + this.longitude
        }, err => {
        this.textContent = err.message;
        })
    },
  }
}
</script>

<style>
 #progress {
    appearance: none;
}
#progress::-webkit-progress-bar {
  position: relative;
  width: 328px;
  height: 8px;
  left: 16px;
  top: 28px;
  background: #EEEFF5;
  border-radius: 8px;
}
#progress::-webkit-progress-value {
  position: relative;
  width: 30px;
  height: 8px;
  left: 0px;
  top: calc(50% - 8px/2);
  background: #643CE9;
  border-radius: 12px;
}
#progress_score{
  position: absolute;
  width: 328px;
  height: 14px;
  left: calc(50% - 328px/2 + 1px);
  top: 44px;
  font-family: 'Caption';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #3F3F46;
}
.Question{
position: relative;
width: 328px;
height: 36px;
left: calc(50% - 328px/2);
top: 132px;
font-family: 'Heading1';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #000000;
}
.prefix{
position: absolute;
width: 328px;
height: 16px;
left: calc(50% - 328px/2);
top: 33px;
font-family: 'paragraph';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #000000;
}
.Result{
position: relative;
width: 328px;
height: 36px;
top: 33px;
left: calc(50% - 328px/2);
font-family: 'Heading1';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #000000;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.profile{
position: relative;
width: 328px;
height: 251px;
left: 20px;
top: 79px;
background: #F5F6FA;
}
.result_image{
position: relative;
width: 328px;
height: 188px;
left: 16px;
top: 15px;
background: white;
}
.result_decription{
  position: absolute;
  left: calc(50% - 328px/2);
  top: 290px;
  width: 328px;
  height: 198px;
  font-family: "paragraph";
  color:white;
  background:#643ce9;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  display: block;
}
.result_button{
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 4px;
position: absolute;
width: 328px;
height: 56px;
left: calc(50% - 328px/2);
background: #FFFFFF;
border: 1px solid #E4E4E7;
border-radius: 8px;
font-family: 'Heading2';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 32px;
color: #000000;
flex: none;
order: 0;
flex-grow: 1;
}
.backward{
position: relative;
width: 100px;
height: 24px;
left: -6px;
top: 5px;
font-family: 'Heading1';
font-style: normal;
font-weight: 1700;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #000000;
border: none;
background-color: white;
}
.restaurant_recommand{
  position: relative;
  top:-20px;
  left:12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 4px;
  gap: 12px;
  width: 296px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 8px;
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
.share_small{
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 5px;

position: absolute;
width: 67px;
height: 20px;
left: calc(50% - 67px/2);
top: 592px;
}
.titledocs{
position: relative;
width: 328px;
height: 40px;
left: calc(50% - 328px/2);
top: 90px;

font-family: 'Paragraph';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
text-align: center;

color: #000000;
}
.paragraph{
position: relative;
width: 314px;
height: 36px;
left: calc(50% - 314px/2);
font-family: 'Heading1';
font-style: normal;
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
.Button_w{
  position: absolute;
  left: calc(50% - 335px/2);
  top: 230px;
  font-family: "Heading2";
  color:black;
  background:white;
  font-size: 20px;
  padding: 15px 150px;
  border-radius: 8px;
  border:1px solid #A1A1AA;
  margin: auto;
  display: block;
  text-align: left;
}
.Button_four{
position: absolute;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 4px;

width: 120px;
height: 120px;

background: #FFFFFF;
border: 1px solid #A1A1AA;
border-radius: 8px;

flex: none;
order: 0;
flex-grow: 0;

/* Heading2 */
font-family: 'Heading1';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */
text-align: center;

color: #000000;

flex: none;
order: 0;
flex-grow: 1;
}
@font-face {
  font-family:'Heading1';
  src: url('assets/fonts/Pretendard-Bold.otf') format('opentype');
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
  src: url('assets/fonts/Pretendard-Regular.otf') format('opentype');
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>
