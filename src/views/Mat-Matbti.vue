<template>
    <button class="backward" v-on:click="push_back">&#60; 뒤로가기</button>
    <div>
        <p class="prefix" style="top:43px">당신의 결과는..</p>
        <p class="Result" style="top:19px">결과가 해당영역에 노출됩니다.</p>
        <img class="result_image" src="../assets/unknown.png" style="top:-5px">
        <div class="result_decription" style="height: 200px;">
            <p class="menu_title">나의 맛BTI</p>
            <p style="padding: 20px 15px">해당 영역에 결과물에 대한 설명이 기재됩니다.</p>
        </div>
        <div class="boxbox">
            <p class="boxtitle">잘 맞는 유형</p>
            <img class="boximg" src="../assets/unknown.png">
            <p class="boxtext">한 줄 설명</p>
        </div>
        <div class="boxbox2">
            <p class="boxtitle">안 맞는 유형</p>
            <img class="boximg" src="../assets/unknown.png">
            <p class="boxtext">한 줄 설명</p>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
  methods : {
    push_back(){
      router.go(-1);
    }
  }
}
</script>

<style>
.boxbox{
    position: relative;
    top: 180px;
    left:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 160px;
    height: 190px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
.boxbox2{
    position: relative;
    top: -12px;
    left: 187px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 160px;
    height: 190px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
.boxtitle{
    position: relative;
    width: 96px;
    height: 32px;
    top:-10px;
    text-align: center;
    font-family: 'Heading2';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.boximg{
    position: relative;
    top:-40px;
    width: 120px;
    height: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.boxtext{
    position:absolute;
    left:30px;
    top:140px;
    width: 123px;
    height: 20px;
    font-family: 'Paragraph';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
    flex: none;
    order: 2;
    flex-grow: 0;
}
</style>