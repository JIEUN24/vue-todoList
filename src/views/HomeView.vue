
<template>
  <div class="wrap">
    <div class="card">
      <h2 >{{ count }}</h2>
      <div>
        <button @click="countUp">up</button>
        <button @click="countDown">down</button>
      </div>
      <h5 v-if="count === 0 || count === 10">{{ message }}</h5>
    </div>

    <div class="card">
      <h5>{{ aData?.map((ele) => ele) }}</h5>
      <div>
        <button @click="clickAdd">추가</button>
        <button @click="clickPop">삭제</button>
      </div>
    </div>
    <div class="card">
      <input type="text" :value="inputText" @input="typing" maxlength="22"/>
      <h4>{{ inputText }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      inputText: "",
      aData: [],
      count: 0,
      message: '더이상 실행할 수 없습니다.'
    };
  },
  methods: {
    clickAdd() {
      if(this.aData.length > 5) {
        return;
      }
      this.aData.push('a')
    },
    clickPop() {
      if(this.aData.length < 1) {
        return;
      }
      this.aData.pop()
    },
    countUp() {
      if(this.count > 9) {
        return;
      }
      this.count++;
    },
    countDown() {
      if(this.count < 1) {
        return;
      }
      this.count--;
    },
    typing(e) {
      this.inputText = e.target.value
    }
  },
};
</script>

<style scoped lang="scss">
  .wrap {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    width: 200px;
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 40px 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      margin-bottom: 20px;
    }

    h5 {
      margin-top: 10px;
    }

    h4 {
      width: 90%;
    }

    button {
      margin-top: 20px;
    }

    div {
      width:80% ;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center; 

      button {
        width: 60%;
        margin-top: 20px;
      }
    }
  }
</style>