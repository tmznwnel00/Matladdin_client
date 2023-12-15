<template>
    <div>
      <progress id="progress" :value="this.$root.question_count" min="0" max="10"></progress>
      <p id="progress_score">{{this.$root.question_count}}/10</p>
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

export default {
  data(){
    return{
    }
  },
  methods : {
    push_next1(){
      this.$root.question_count++;
      //server 통신 값 넣기
      if(this.$root.question_count == 10)
        router.push("/page3");
    },
    push_next2(){
      this.$root.question_count++;
      if(this.$root.question_count == 10)
        router.push("/page3");
    },
    push_next3(){
      this.$root.question_count++;
      if(this.$root.question_count == 10)
        router.push("/page3");
    },
    push_next4(){
      this.$root.question_count++;
      if(this.$root.question_count == 10)
        router.push("/page3");
    }
  }
}
</script>