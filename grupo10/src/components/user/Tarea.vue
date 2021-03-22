<template>
  <div>
    <h3> RUTINA MAÑANA &#128073;</h3>
    <p>Me levanto y preparo todo antes de salir de casa.</p>
    <label for="tarea1">Lavarse dientes</label><input type="checkbox" name="tarea1" id="" value="tarea1"><br>
    <label for="tarea2">Desayunar</label><input type="checkbox" name="tarea2" id="" value="tarea2"><br>
    <label for="tarea3">Hacer la cama</label><input type="checkbox" name="tarea3" id="" value="tarea3"><br>

<h3>PUNTUACIÓN: 3 &#9734;</h3>
<h3>PENDIENTE</h3>




      	

  </div>
    
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Tarea",
  props: {},
  setup() {
    
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>

</style>