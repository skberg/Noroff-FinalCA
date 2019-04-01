<template>

  <router-view ></router-view>

  
</template>

<script>

(function () {
        localStorage.setItem('username', '--');
        localStorage.setItem('password', '--');
    })();
    
export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style lang="scss">
$mainColr: #424651;
$secuderColor: #A75432;
body{
  background-color: #2c3e50;
  margin: 0px;
 font-family: 'IM Fell English SC', serif;
}
.container{
    display: grid;
    column-count: 2;
    column-gap: 60px;
    grid-row: auto auto ;
    grid-template-columns: repeat(auto-fill, minmax(250px,  1fr));
    margin: 80px;
 
 
  
    
}
@media screen and (max-width: 500px){
.container{
  margin: auto;
}
}


</style>
