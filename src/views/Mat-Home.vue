<template>
  <div>
    <p class="Title">맛라딘 v2.1</p>
    <img class="profile" src="../assets/profile_image.png">
    <p class="paragraph" style="top: 55px; font-weight: 200;">나의 맛BTI를 파악하고</p>
    <p class="paragraph" style="top: 30px; font-weight: 100;">맛집과 메뉴를 추천받아요</p>
    <Button class="Button_h" v-on:click="push_about(); use_api()">시작하기</Button>
    <p class="titledocs">오늘 점심 뭐먹지? 어디서 식사하지? 고민하는 시간이 <br> 아까운 당신! 빠르게 정보를 찾아보아요.</p>
    <div @click="modal_isOpen = true">
      <img class="share_small" src="../assets/Share_small.png">
    </div>
  </div>
</template>


<script>
import router from '../router';
import axios from 'axios';

// import TitleScreen from './components/TitleScreen.vue'

export default {
  methods : {
    push_about(){
      console.log('hi');
      router.push("/page1");
    },
    async use_api(){
      try {const response = await axios.post('http://110.165.19.54:5000/chat');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    }
  }
}
</script>