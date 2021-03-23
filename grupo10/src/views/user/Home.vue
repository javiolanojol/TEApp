<template>
  <div class="centrado">
    <div class="fondo">
      <div class="centrado2" v-if="!user.email">
        <figure class="imagen">
          <img src="../../assets/logo.png" alt="logo tareas" />
        </figure>
        <input class="caja" v-model="email" placeholder="email" />
        <input
          class="caja"
          type="password"
          v-model="password"
          placeholder="password"
        />
        <div>
          <button @click="login" class="btn boton">Login</button>
        </div>
        <div>
          <button class="btn boton">Nuevo</button>
        </div>
      </div>
      <div v-else>
        <div class="cabecera">
          <span>{{ user.username }} | &#9733; {{ user.score }}</span>
          <button class="btn boton" @click="logout">Salir</button>
        </div>
        <hr />
        <div class="semana">
          <div>L</div>
          <div class="active">M</div>
          <div>X</div>
          <div>J</div>
          <div>V</div>
          <div>S</div>
          <div>D</div>
        </div>
        <progress id="file" max="4" :value="progress"></progress>
        <div v-if="tareas">
          <Tarea v-for="(item,i) in tareas" :key="i" 
            :title="item.title"
            :description="item.description"
            :score="item.score"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tarea from "@/components/user/Tarea";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "LoginBox",
  props: {},
  components: {
    Tarea,
  },

  setup() {
    const store = useStore();
    let email = ref("");
    let password = ref("");
    let user = computed(() => {
      return store.getters.getUser;
    });
    let progress = 3;
    let tareas = reactive([]);

    function login() {
      fetch("http://localhost:8081/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "Application/json" },
      })
        .then((resp) => resp.json())
        .then((user) => {
          if (user.datos.noEmail != true) store.commit("setUser", user.datos);
          else alert("Usuario o password incorrectos");
          console.log(user);
          tareas.splice(0)
          user.datos.tasks.forEach((element) => {
            fetch("http://localhost:8081/task/list", {
              method: "POST",
              body: JSON.stringify({
                id: element
              }),
              headers: { "Content-Type": "Application/json" },
            }).then((resp) => resp.json())
              .then((tarea)=>{
                tareas.push(tarea)
              })
          });
          console.log(tareas);
        });
    }

    function logout() {
      store.commit("setUser", {});
    }

    return {
      email,
      password,
      login,
      logout,
      user,
      progress,
      tareas,
    };
  },
};
</script>

<style lang="scss" scoped>
.centrado {
  display: grid;
  justify-content: center;
  flex-direction: column;
}
.centrado2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}
.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.cabecera {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  button {
    margin: 0;
  }
}
input {
  width: 120px;
  margin: 5px auto;
}
.fondo {
  display: flex;
  flex-direction: column;
  border: 10px solid #6ccff1;
  border-radius: 8px;
  height: 90vh;
  width: 320px;
  margin: 10px;
  text-align: center;
  overflow: scroll;
}
.boton {
  margin-top: 40px;
  margin-right: 5px;
  color: white;
  border: 2px solid #c6b7e0;
  background: #c6b7e0;
  border-radius: 8px;
  cursor: pointer;
  width: 80px;
  height: 30px;
}
.imagen {
  display: flex;
  justify-content: center;
  width: 230px;
  height: 190px;
  margin-top: 40px;
}
progress {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 70%;
  height: 20px;
  border-radius: 4px;
  padding: 5px 10px;
}
progress::-webkit-progress-bar {
  border-radius: 4px;
  background-color: rgb(240, 233, 233);
}
progress::-webkit-progress-value {
  background-color: #c6b7e0;
  border-radius: 4px;
}
.semana {
  display: flex;
  justify-content: space-around;
  div {
    border-radius: 100%;
    background-color: #b6e4f3;
    width: 22px;
  }
  .active {
    background-color: #31a6ce;
  }
}
</style>

