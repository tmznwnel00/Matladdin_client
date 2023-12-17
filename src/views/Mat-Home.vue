<template>
  <div>
    <img style="height:32px; position:relative; left:130px; top: 40px;" src="../assets/Title.png">
    <img class="profile" src="../assets/MatBTI-Main.png">
    <p class="paragraph" style="top: 55px; font-weight: 200;">나의 맛BTI를 파악하고</p>
    <p class="paragraph" style="top: 30px; font-weight: 100;">맛집과 메뉴를 추천받아요</p>
    <Button class="Button_h" v-on:click="use_api()">시작하기</Button>
    <p class="titledocs">오늘 점심 뭐먹지? 어디서 식사하지? 고민하는 시간이 <br> 아까운 당신! 빠르게 정보를 찾아보아요.</p>
    <div>
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
    async use_api(){
      try {const response = await axios.post('https://110.165.19.54:5000/chat');
      console.log(response.data);
      this.$root.question[response.data['uuid']] = response.data['question'];
      console.log(this.$root.question)
      if (response.data['option_list'][2]) {
        router.push("/page2?session=" + response.data['uuid'] + "&step=1" + "&option1=" + response.data['option_list'][0] + "&option2=" + response.data['option_list'][1] + "&option3=" + response.data['option_list'][2] + "&option4=" + response.data['option_list'][3]);
      } else {
        router.push("/page1?session=" + response.data['uuid'] + "&step=1" + "&option1=" + response.data['option_list'][0] + "&option2=" + response.data['option_list'][1]);
      }
    } catch (error) {
      console.log(error);
      }
    },
  }
}
</script>