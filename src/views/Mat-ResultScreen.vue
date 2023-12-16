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
            <p class="menu_title" style="top:-35px">메뉴명</p>
            <p style="padding: 30px 15px">해당 영역에 결과물에 대한 설명이 기재됩니다.</p>
        </div>
        <button class="result_button" style="top: 493px;" v-on:click="push_restaurant">식당 추천받기</button>
        <button class="result_button" style="top: 563px;" v-on:click="push_matbti">내 맛BTI 확인하기</button>
    </div>
</template>

<script>
import router from '../router';

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
    push_restaurant(){
      router.push("/restaurant");
    },
    push_matbti(){
      router.push("/mat-bti");
    }
  }
}
</script>