<template>
  <div>
    <h1>안녕하세요</h1>
    <TestCompo :data="data.value" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive } from "@vue/runtime-core";
import { ref } from "vue";
import axios from "axios";
import TestCompo from "../components/TestCompo.vue";

export default {
  name: "Test",
  components: { TestCompo },

  setup() {
    const data = ref([
      {
        id: 1,
        name: "Lia",
      },
      {
        id: 2,
        name: "Judy",
      },
    ]);
    console.log(data.value);

    onMounted(() => {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    });

    onUnmounted(() => {
      console.log("마운트 끝");
    });

    return { data };
  },
};
</script>

<style scoped lang="scss"></style>
