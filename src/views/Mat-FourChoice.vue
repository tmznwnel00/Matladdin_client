<template>
    <div>
        <p class="Question">질문이 해당영역에 노출됩니다.</p>
        <Button class="Button_four" style="top: 230px; left: calc(50% - 270px/2);" v-on:click="push_next1">답변</Button>
        <Button class="Button_four" style="top: 230px; right: calc(50% - 270px/2);" v-on:click="push_next2">답변</Button>
        <Button class="Button_four" style="top: 370px; left: calc(50% - 270px/2);" v-on:click="push_next3">답변</Button>
        <Button class="Button_four" style="top: 370px; right: calc(50% - 270px/2);" v-on:click="push_next4">답변</Button>
    </div>
</template>

<script>
import router from '../router';

export default {
  methods : {
    push_next1(){
      router.push("/page3");
    },
    push_next2(){
      router.push("/page3");
    },
    push_next3(){
      router.push("/page3");
    },
    push_next4(){
      router.push("/page3");
    }
  }
}
</script>