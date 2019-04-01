<template>
    <div>
        <navbar></navbar>
       
        <div class="gvhbjn">
         <view-card  v-bind:card="item"></view-card>

          
       
         <div class="infoboc">
         <h1 class="heding">{{item.name}}</h1>
          <div class="me"><h4> Powers</h4> 
          <p class="type">{{item.power}}</p>
          </div> 
            <div class="me"> <h4>Type</h4>
            <p  class="type" v-for="type in item.types " :key="type"> {{type}}</p>
            </div>
            <div class="me"> <h4>Subtype</h4>
            <p class="type" v-for="type in item.subtypes " :key="type">  {{type}}</p>
           </div>


            <div class="me"> <h4>Description</h4>
            <p class="type">{{item.originalText}}</p>
            </div>
            <div class="me"> <h4>hjkl</h4> 

              <p class="type">{{item.flavor}}</p>
         </div>
         </div>
       
      </div>
    </div>
</template>

<script>
import Navbar from "../Navbar/NavBar";
import ViewCard from '../../Card/ViewCard';
export default {
    name: 'CardcPage',

    components: {
        ViewCard,
        Navbar,


    },
    created(){
      this.getcard()
    },
    data() {
        return {
            item: {

            }
        }

    },
    methods: {
        getcard: function() {
            const url = "https://api.magicthegathering.io/v1/cards/"+this.$route.params.id;
            fetch(`${url}`)
                .then(resp => resp.json())
                .then(data => {
                  this.item = data.card 
                 
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

}
</script>

<style lang="scss"  scoped>
    
$mainColr: #424651;
$secuderColor: #A75432;

.gvhbjn{
  display:grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
 
   

}
.infoboc{
background-color: #cccc;
padding: 20px;
margin: 0px;
max-width: 1000px;
float: right;
display: inline;

}
.heding{
   padding: 20px;
  margin: 0px;
  color: #000;
  border-bottom: 5px solid #A75432;
 width: 60%;
}
.me{
  padding: 20px;
  margin: 10px;


 
   
}
.type{
   padding: 10px;
   margin: 0px;
   text-align: right;
   background-color: aliceblue;
   border-radius: 5px;
    border: 2px inset #ccc;
}

@media screen and (max-width: 500px){
  .gvhbjn{
    grid-template-columns: 1fr;
    }
}
   
</style>
