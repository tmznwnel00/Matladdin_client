<template>
    <button class="backward" v-on:click="push_back">&#60; 뒤로가기</button>
    <div>
        <p class="prefix" style="top:43px">당신의 결과는..</p>
        <p class="Result" style="top:19px">결과가 해당영역에 노출됩니다.</p>
        <div class="result_decription" style="top:160px; height: 420px;">
            <p class="menu_title">식당</p>
            <p style="padding: 20px 15px">저희가 식당을 추천해 드릴게요!</p>
            <div class="restaurant_recommand">
                <p class="restaurant_name">식당명</p>
                <p class="category">카테고리</p>
                <p class="address">주소</p>
            </div>
            <div class="restaurant_recommand" style="top:-14px;">
                <p class="restaurant_name">식당명</p>
                <p class="category">카테고리</p>
                <p class="address">주소</p>
            </div>
            <div class="restaurant_recommand" style="top:-8px;">
                <p class="restaurant_name">식당명</p>
                <p class="category">카테고리</p>
                <p class="address">주소</p>
            </div>
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
.menu_title{
    /* Button */
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 4px;
    position: absolute;
    width: 294px;
    height: 48px;
    left: calc(50% - 294px/2);
    top: -45px;
    background: #FFFFFF;
    border: 2px solid #643CE9;
    border-radius: 8px;
    font-family: 'Heading1';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 1;
}
.restaurant_name{
    position:absolute;
    top:-7px;
    left: 15px;
    line-height: 0px;
    vertical-align: top;
    padding: 0px 0px;
    width: 228px; 
    height: 32px;
    font-family: 'Heading1';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 1;
}
.category{
    position:absolute;
    padding: 30px 0px;
    width: 272px;
    height: 24px;
    font-family: 'Body4';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #E93C8F;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.address{
    position: absolute;
    padding: 55px 10px;
    left: 7px;
    width: 25px;
    height: 24px;
    font-family: 'Body4';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #3F3F46;
    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>