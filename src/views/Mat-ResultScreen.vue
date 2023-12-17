<template>
    <div>
        <p class="prefix">당신의 결과는..</p>
        <p class="Result">결과가 해당영역에 노출됩니다.</p>
        <img class="result_image" v-if="matbti_danche()" src="../assets/mat_fairies/danche.png">
        <img class="result_image" v-if="matbti_honbap()" src="../assets/mat_fairies/honbap.png">
        <img class="result_image" v-if="matbti_always()" src="../assets/mat_fairies/always.png">
        <img class="result_image" v-if="matbti_expensive()" src="../assets/mat_fairies/expensive.png">
        <img class="result_image" v-if="matbti_gaseungbi()" src="../assets/mat_fairies/gaseungbi.png">
        <img class="result_image" v-if="matbti_newfood()" src="../assets/mat_fairies/newfood.png">
        <div class="result_decription">
            <p class="menu_title">{{this.$root.result_food[this.$route.query.session]}}</p>
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
    matbti_honbap(){
        if(this.$root.matbti=="honbap")
            return true;
        return false;
    },
    matbti_danche(){
        if(this.$root.matbti=="danche")
            return true;
        return false;
    },
    matbti_expensive(){
        if(this.$root.matbti=="expensive")
            return true;
        return false;
    },
    matbti_gaseungbi(){
        if(this.$root.matbti=="gaseungbi")
            return true;
        return false;
    },
    matbti_always(){
        if(this.$root.matbti=="always")
            return true;
        return false;
    },
    matbti_newfood(){
        if(this.$root.matbti=="newfood")
            return true;
        return false;
    },
    async push_restaurant(){
      try {
        const url = 'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=126.9913201,37.5666936&output=json&orders=legalcode'
        const headers = {
            'X-NCP-APIGW-API-KEY-ID' : process.env.CLIENT_ID,
            'X-NCP-APIGW-API-KEY' : process.env.CLIENT_SECRET
        }
        const res = await axios.get(url, {headers})
        console.log(res.data);


        const search = '강남구 스테이크 맛집';
        const queryParams = { search: search };
        const response = await axios.get('http://110.165.19.54:5000/restuarant', {params: queryParams})
        console.log(response.data);
        this.$root.restaurant_list[this.$route.query.session] = response.data['items'];
        router.push("/restaurant?session=" + this.$route.query.session);
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
    },
    async push_matbti(){
      const queryParams = { uuid: this.$route.query.session };
      const response = await axios.get('http://110.165.19.54:5000/matbti', {params: queryParams});
      console.log(response.data);
      this.$root.matbti[this.$route.query.session] = response.data['matbti'];
      router.push("/mat-bti?session=" + this.$route.query.session);
    }
  }
}
</script>