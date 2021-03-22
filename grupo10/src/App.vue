<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/autores">Autores</router-link> |
    <router-link to="/nuevo-fragmento">Nuevo Fragmento</router-link> |
    <router-link to="/nueva-historia">Nueva Historia</router-link> |
    <router-link to="/lectura">Leer</router-link> |
    <router-link to="/registro">Registro</router-link> |
    <router-link to="/libros">Libros</router-link> |
    <router-link to="/admin">Superuser</router-link> |
    <router-link to="/perfil">Ver perfil</router-link> |
    <router-link to="/moderar">Elegir cierre</router-link> 

  
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
