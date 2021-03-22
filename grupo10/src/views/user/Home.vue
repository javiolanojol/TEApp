<template>
  <div>
    <div>
     <LoginBox />
    </div>
   

  <!--   <Cabecera /> -->
    <!-- <hr>
    <Tarea />
    <hr>
    <Tarea />
    <hr>
    <Tarea />     -->
  </div>
</template>

<script>
import Cabecera from '@/components/user/Cabecera'
import Tarea from '@/components/user/Tarea'
import LoginBox from '@/components/LoginBox'
export default {
  name: 'Home',
  components: {
    LoginBox,
    Tarea,
    Cabecera
   
  }
}
</script>
