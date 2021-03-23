<template>
  <div>
    <div class="tarea">
      <h3 v-html="title" @click="acordeon"></h3>
      <div v-if="toggle">
        <p>{{description}}</p>
        <h4>Consigues: {{score}} &#9733;</h4>
        <label for="tarea3">FINALIZADO</label>
        <input type="checkbox" name="tarea3" id="" value="tarea3" /><br />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Tarea",
  props: {
    title: String,
    description: String,
    score: Number
  },
  setup() {
    let toggle = ref(false);

    function acordeon() {
      if (toggle.value == false) toggle.value = true;
      else toggle.value = false;
    }

    return {
      toggle,
      acordeon,
    };
  },
};
</script>

<style lang="scss" scoped>
.tarea {
  margin: 5px auto;
  width: 250px;
  border: 2px solid rgb(119, 116, 116);
  background-color: rgb(240, 233, 233);
  border-radius: 8px;
  padding: 5px;
}
</style>