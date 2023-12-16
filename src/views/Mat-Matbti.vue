<template>
    <button class="backward" v-on:click="push_back">&#60; 뒤로가기</button>
    <div>
        <p class="prefix" style="top:43px">당신의 결과는..</p>
        <p class="Result" style="top:19px">결과가 해당영역에 노출됩니다.</p>
        <img class="result_image" v-if="matbti_danche()" src="../assets/mat_fairies/danche.png" style="top:-5px">
        <img class="result_image" v-if="matbti_honbap()" src="../assets/mat_fairies/honbap.png" style="top:-5px">
        <img class="result_image" v-if="matbti_always()" src="../assets/mat_fairies/always.png" style="top:-5px">
        <img class="result_image" v-if="matbti_expensive()" src="../assets/mat_fairies/expensive.png" style="top:-5px">
        <img class="result_image" v-if="matbti_gaseungbi()" src="../assets/mat_fairies/gaseungbi.png" style="top:-5px">
        <img class="result_image" v-if="matbti_newfood()" src="../assets/mat_fairies/newfood.png" style="top:-5px">
        <div class="result_decription" style="height: 200px;">
            <p class="menu_title">{{ preference[this.$root.matbti][3] }}</p>
            <p style="padding: 20px 15px">{{ preference[this.$root.matbti][0] }}</p>
        </div>
        <div class="boxbox">
            <p class="boxtitle">잘 맞는 유형</p>
            <img class="boximg" v-if="matbti_danche()" src="../assets/mat_fairies/gaseungbi.png">
            <img class="boximg" v-if="matbti_honbap()" src="../assets/mat_fairies/always.png">
            <img class="boximg" v-if="matbti_always()" src="../assets/mat_fairies/honbap.png">
            <img class="boximg" v-if="matbti_newfood()" src="../assets/mat_fairies/expensive.png">
            <img class="boximg" v-if="matbti_expensive()" src="../assets/mat_fairies/newfood.png">
            <img class="boximg" v-if="matbti_gaseungbi()" src="../assets/mat_fairies/danche.png">
            <p class="boxtext" style="left:0px; text-align: center;">{{ preference[this.$root.matbti][1] }}</p>
        </div>
        <div class="boxbox2">
            <p class="boxtitle">안 맞는 유형</p>
            <img class="boximg" v-if="matbti_danche()" src="../assets/mat_fairies/honbap.png">
            <img class="boximg" v-if="matbti_honbap()" src="../assets/mat_fairies/danche.png">
            <img class="boximg" v-if="matbti_always()" src="../assets/mat_fairies/newfood.png">
            <img class="boximg" v-if="matbti_newfood()" src="../assets/mat_fairies/always.png">
            <img class="boximg" v-if="matbti_expensive()" src="../assets/mat_fairies/gaseungbi.png">
            <img class="boximg" v-if="matbti_gaseungbi()" src="../assets/mat_fairies/expensive.png">
            <p class="boxtext" style="left:10px; text-align: center;">{{ preference[this.$root.matbti][2] }}</p>
        </div>
    </div>
</template>

<script>
import router from '../router';

export default {
    data(){
      return{
        preference: {
            "honbap" : [" 혼밥을 즐기는 사람들은 자기 시간이 소중하고 혼자 있으면서도 풍부한 경험을 즐길 수 있는 능력을 가지고 있어요.","익숙함", "단체식사","혼밥"],
            "danche" : [" 단체식사를 즐기는 사람들은 협동과 협력의 틀 안에서 타인과의 상호작용을 중요시해요. 많은 사람이 부담 없이 먹을 수 있는 가성비 메뉴와 잘 어울려요.", "가성비", "혼밥","단체식사"],
            "gaseungbi" : [" 다양한 소비자 리뷰나 음식평가를 참고하여 가성비 좋은 음식을 찾아요. 다른 사람의 의견을 듣고 참고하여 선택하는 걸 좋아해요.", "단체식사", "맛있는 음식에 투자","가성비"],
            "expensive" : [" 맛있는 음식을 즐기는 사람들이에요. 맛을 탐험하는 것을 즐기고 새로운 요리나 맛을 발견하는 것에 흥미를 느껴요.", "새로운 도전", "가성비","맛있는 음식에 투자"],
            "newfood" : [" 새로운 음식과 요리를 발견하는 것을 좋아해요. 다양한 음식을 시도하고 새로운 맛과 향을 경험하는 것을 즐겨요.", "맛있는 음식에 투자","익숙함","새로운 도전"],
            "always" : [" 익숙한 패턴과 일상적인 활동을 선호해요. 일관성 있는 경험을 선호하는 경우가 많아요.", "혼밥","새로운 도전","익숙함"]            
        }    
    }
  },
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
    push_back(){
      router.go(-1);
    }
  }
}
</script>

<style>
.boxbox{
    position: relative;
    top: 180px;
    left:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 160px;
    height: 190px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
.boxbox2{
    position: relative;
    top: -12px;
    left: 187px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 160px;
    height: 190px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
.boxtitle{
    position: relative;
    width: 96px;
    height: 32px;
    top:-10px;
    text-align: center;
    font-family: 'Heading2';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.boximg{
    position: relative;
    top:-40px;
    width: 120px;
    height: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.boxtext{
    position:absolute;
    left:30px;
    top:140px;
    width: 123px;
    height: 20px;
    font-family: 'Paragraph';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
    flex: none;
    order: 2;
    flex-grow: 0;
}
</style>