<template>
    <div>
        <p class="prefix">당신의 결과는..</p>
        <p class="Result">결과가 해당영역에 노출됩니다.</p>
        <img class="result_image" src="../assets/unknown.png">
        <div class="result_decription">
            <p class="menu_title">{{this.$root.result_food}}</p>
            <p style="padding: 20px 15px">해당 영역에 결과물에 대한 설명이 기재됩니다.</p>
        </div>
        <button class="result_button" style="top: 493px;" v-on:click="push_restaurant">식당 추천받기</button>
        <button class="result_button" style="top: 563px;" v-on:click="push_matbti">내 맛BTI 확인하기</button>
    </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

export default {
  methods : {
    async push_restaurant(){
      const search = encodeURIComponent('강남구 스테이크 맛집');
      const headers = {
        'X-Naver-Client-Id': process.env.CLIENT_ID,
        'X-Naver-Client-Secret': process.env.CLIENT_ID.SECRET
      };
      const queryParams = { query: search, display: 3 };
      const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {headers}, {params: queryParams});
      console.log(response.data);
      this.$root.restaurant_list = response.data['items'];
      router.push("/restaurant");
    },
    async push_matbti(){
      const queryParams = { uuid: this.$root.session_id};
      const response = await axios.get('http://110.165.19.54:5000/matbti', {params: queryParams});
      console.log(response.data);
      this.$root.matbti = response.data['matbti'];
      router.push("/mat-bti");
    }
  }
}
</script>