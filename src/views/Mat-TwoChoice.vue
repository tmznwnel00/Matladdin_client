<template>
    <div>
        <progress id="progress" :value="this.$route.query.step" min="0" max="10"></progress>
        <p id="progress_score">{{this.$route.query.step}}/10</p>
        <p class="Question">{{this.$root.question[$route.query.session]}}</p>
        <Button class="Button_w" v-on:click="use_api('button1')">{{this.$route.query.option1}}</Button>
        <Button class="Button_w" style="top: 300px;" v-on:click="use_api('button2')">{{this.$route.query.option2}}</Button>
    </div>
    <div>
        <p class="Question">질문이 해당영역에 노출됩니다.</p>
        <Button class="Button_w" v-on:click="push_next1">답변</Button>
        <Button class="Button_w" style="top: 300px;" v-on:click="push_next2">답변</Button>
        <Button class="Button_w" style="top: 370px;" v-on:click="push_next3">답변</Button>
        <Button class="Button_w" style="top: 440px;" v-on:click="push_next4">답변</Button>
    </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

export default {
  methods : {
    async use_api(button){
      try {
      const queryParams = { uuid: this.$route.query.session, step: this.$route.query.step};
      let answer = 1;
      if (button === 'button1') {
          answer = this.$route.query.option1;
      } else if (button === 'button2') {
          answer = this.$route.query.option2;
      } 
      const payload = {
        "answer": answer
      };
      const response = await axios.post('http://110.165.19.54:5000/chat_completion', payload, {params: queryParams});
      console.log(response.data);
      const question_count = response.data['step'];
      if (question_count == '11') {
        this.delete_session();
      } else {

        this.$root.question[response.data['uuid']] = response.data['question'];

        if (response.data['option_list'][2]) {
          router.push("/page2?session=" + response.data['uuid'] + "&step=" + question_count + "&option1=" + response.data['option_list'][0] + "&option2=" + response.data['option_list'][1] + "&option3=" + response.data['option_list'][2] + "&option4=" + response.data['option_list'][3]);
        } else {
          router.push("/page1?session=" + response.data['uuid'] + "&step=" + question_count + "&option1=" + response.data['option_list'][0] + "&option2=" + response.data['option_list'][1]);
        }
      }
      
    } catch (error) {
      console.log(error);
      }
    },
    async delete_session(){
      const queryParams = { uuid: this.$route.query.session};
      const response = await axios.delete('http://110.165.19.54:5000/chat', {params: queryParams});
      this.$root.result_food[this.$route.qeury.session] = response.data['food'];
      console.log(this.$root.result_food);
      router.push("/page3?session=" + this.$route.query.session);
    },
  }
}
</script>