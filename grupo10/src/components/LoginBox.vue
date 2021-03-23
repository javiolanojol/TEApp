<template>
  <div class="centrado">
    <div class="fondo">
      <figure class="imagen">
        <img src="../assets/logo.png" alt="logo tareas" />
      </figure>
      <div class="centrado2" v-if="!user.email">
        <div class="login">
          <input class="caja" v-model="email" placeholder="email" />
          <input class="caja" v-model="password" placeholder="password" />
        </div>
        <div>
          <button @click="login" class="btn boton">Login</button>
        </div>
      </div>
      <div v-else>
        Bienvenid@ {{ user.nombre }} {{ user.apellidos }}
        <button class="btn boton" @click="logout">Salir</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "LoginBox",
  props: {},
  setup() {
    const store = useStore();
    let email = ref("");
    let password = ref("");
    let user = computed(() => {
      return store.getters.getUser;
    });

    function login() {
      fetch("http://localhost:8081/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: { "Content-Type": "Application/json" },
      })
        .then((resp) => resp.json())
        .then((user) => {
          if (user) store.commit("setUser", user);
          else alert("Usuario o password incorrectos");
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
.caja {
  width: 120px;
}
.fondo {
  display: flex;
  flex-direction: column;
  border: 10px solid #6ccff1;
  border-radius: 8px;
  height: 560px;
  width: 90%;
  margin: 10px;
  text-align: center;
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
</style>