<template>

    <div class="whatever">
    
        <div class="card-img">
            <img v-bind:src="card.imageUrl" alt="img">
        </div>
        <div class="card-border">
        <div class="card">

            <div class="card-title">{{card.name}}</div>
          
              <button class="card-button" v-on:click="CardcPage">Learn more</button>
        </div>
    
    
    
    
    </div>
    </div>
</template>

<script>
export default {
    name: 'ViewCard',
    props: ['card'],
    data() {
        return {}
        },
    components: {},
    methods: {
        CardcPage: function() {
            this.$router.push({ name: 'CardcPage', params: { id: this.card.id } });
           
        }
    }

}
</script>

<style lang="scss">
$mainColr: #424651;
$secuderColor: #A75432;


.whatever {
    display: grid;
  
    margin: 190px auto;
    
    position: relative;




    .card{
      background-color: #A75432;
      max-width: 300px;
      width: 270px;
      padding: 7px;
      height: 250px;
     

      box-shadow: 0px 0px 36px -3px rgba(0,0,0,0.45);
      border-radius: 30px;
     
    }
   

  
    .card-img {
 box-shadow: 0px 5px 18px 1px rgba(0, 0, 0, 0.516);
    background-color: black;
    border-bottom: none;
    position: absolute;
    top: -155px;
    left: 30px;
    
    }
    .card-title {
        text-align: center;
        padding-top: 180px;
        font-size: 20px;

    }

  .card-button{
   
    z-index: 1;
    height:20px; 
    width:100px; 
    margin: -20px -50px; 
    position:relative;
    top:20%; 
    left:30%;
    margin: 15px auto;
    
    font-size: 14px;
    background-color: #E0E0E0;
    border: none;
    border-radius: 3px;
   
  }
 

}
   

.card-item {
 

   
    li {
        list-style: none;
 
    }
}

</style>