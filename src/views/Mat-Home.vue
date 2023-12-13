

<template>
  <div>
    <h4 class="Title">맛라딘 v1.2</h4>
    <img class="profile" src="../assets/profile_image.png">
    <h4 class="paragraph" style="top: 50px; font-weight: 200;">나의 맛BTI를 파악하고</h4>
    <h4 class="paragraph" style="top: 25px;">맛집과 메뉴를 추천받아요</h4>
    <Button class="Button_h" v-on:click="push_about">시작하기</Button>
  </div>
</template>

<script>
import router from '../router';

// import TitleScreen from './components/TitleScreen.vue'

export default {
  methods : {
    push_about(){
      router.push("/about");
    }
  }
}
</script>