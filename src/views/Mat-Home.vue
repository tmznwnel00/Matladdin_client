<template>
  <div>
    <img style="height:32px; position:absolute; left:330px; top: 40px;" src="../assets/Title.png">
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

export default {
  methods : {
    async use_api(){
      try {const response = await axios.post('http://110.165.19.54:5000/chat');
      console.log(response.data);
      this.$root.question_count = 1;
      this.$root.question = response.data['question'];
      this.$root.option1 = response.data['option_list'][0];
      this.$root.option2 = response.data['option_list'][1];
      this.$root.option3 = response.data['option_list'][2];
      this.$root.option4 = response.data['option_list'][3];
      this.$root.session_id = response.data['uuid'];
      if (this.$root.option3) {
        router.push("/page2");
      } else {
        router.push("/page1");
      }
    } catch (error) {
      console.log(error);
      }
    },
  }
}
</script>