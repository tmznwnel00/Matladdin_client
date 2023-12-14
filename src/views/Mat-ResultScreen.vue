<template>
    <div>
        <p class="prefix">당신의 결과는..</p>
        <p class="Result">결과가 해당영역에 노출됩니다.</p>
        <img class="result_image" src="../assets/unknown.png">
        <div class="result_decription">
            <p class="menu_title">메뉴명</p>
            <p style="padding: 20px 15px">해당 영역에 결과물에 대한 설명이 기재됩니다.</p>
        </div>
        <button class="result_button" style="top: 493px;" v-on:click="push_restaurant">식당 추천받기</button>
        <button class="result_button" style="top: 563px;" v-on:click="push_matbti">내 맛BTI 확인하기</button>
    </div>
</template>

<script>
import router from '../router';

export default {
  methods : {
    push_restaurant(){
      router.push("/restaurant");
    },
    push_matbti(){
      router.push("/mat-bti");
    }
  }
}
</script>