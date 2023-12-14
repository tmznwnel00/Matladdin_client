<template>
    <div>
        <p class="Question">질문이 해당영역에 노출됩니다.</p>
        <Button class="Button_w" v-on:click="push_next1">답변</Button>
        <Button class="Button_w" style="top: 300px;" v-on:click="push_next2">답변</Button>
    </div>
</template>

<script>
import router from '../router';

export default {
  methods : {
    push_next1(){
      router.push("/page2");
    },
    push_next2(){
      router.push("/page2");
    }
  }
}
</script>