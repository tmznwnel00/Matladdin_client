<template>
    <div>
        <progress id="progress" :value="this.$root.question_count" min="0" max="10"></progress>
        <p id="progress_score">{{this.$root.question_count}}/10</p>
        <p class="Question">{{this.$root.question}}</p>
        <Button class="Button_four" style="top: 230px; left: calc(50% - 270px/2);" v-on:click="use_api('button1')">{{this.$root.option1}}</Button>
        <Button class="Button_four" style="top: 230px; right: calc(50% - 270px/2);" v-on:click="use_api('button2')">{{this.$root.option2}}</Button>
        <Button class="Button_four" style="top: 370px; left: calc(50% - 270px/2);" v-on:click="use_api('button3')">{{this.$root.option3}}</Button>
        <Button class="Button_four" style="top: 370px; right: calc(50% - 270px/2);" v-on:click="use_api('button4')">{{this.$root.option4}}</Button>
    </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

export default {
  methods : {
    async use_api(button){
      try {
      const queryParams = { uuid: this.$root.session_id, step: this.$root.question_count};
      let answer = 1;
      if (button === 'button1') {
          answer = this.$root.option1;
      } else if (button === 'button2') {
          answer = this.$root.option2;
      } else if (button === 'button3') {
          answer = this.$root.option3;
      } else if (button === 'button4') {
          answer = this.$root.option4;
      } 
      const payload = {
        "answer": answer
      };
      const response = await axios.post('http://110.165.19.54:5000/chat_completion', payload, {params: queryParams});
      console.log(response.data);
      this.$root.question_count = response.data['step'];
      if (this.$root.question_count == '11') {
        this.delete_session();
      } else {
        this.$root.question = response.data['question'];
        this.$root.option1 = response.data['option_list'][0];
        this.$root.option2 = response.data['option_list'][1];
        this.$root.option3 = response.data['option_list'][2];
        this.$root.option4 = response.data['option_list'][3];

        if (response.data['option_list'][2]) {
          router.push("/page2");
        } else {
          router.push("/page1");
        }
      }
      
    } catch (error) {
      console.log(error);
      }
    },
    async delete_session(){
      const queryParams = { uuid: this.$root.session_id};
      const response = await axios.delete('http://110.165.19.54:5000/chat', {params: queryParams});
      this.$root.result_food = response.data['food'];
      console.log(this.$root.result_food);
      router.push("/page3");
    },
  }
}
</script>