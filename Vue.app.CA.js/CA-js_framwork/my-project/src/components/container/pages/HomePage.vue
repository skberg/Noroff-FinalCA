<template v-if="items.length > 0">
  <div>
    <navbar></navbar>
    <input class="search-input" type="text" placeholder="search" v-model="searchQuery">
    <div class="container">
    <view-card v-bind:card="item" v-for="item in filtercards" :key="item.id"></view-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/NavBar";
import ViewCard from '../../Card/ViewCard';

export default {
  name: "HomePage",

  components: {
      ViewCard,
      Navbar,
  },
  created() {
    const url = "https://api.magicthegathering.io/v1/cards";
    fetch(`${url}`)
      .then(resp => resp.json())
      .then(data => {
        this.items = data.cards.filter(card => card.imageUrl);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      items: [],
      searchQuery: ""
    };
  },

  computed: {
    filtercards() {
      return this.items.filter(card => {
        return card.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },



  

};



</script>


<style lang="scss" >
$mainColr: #424651;
$secuderColor: #A75432;

input{
    display: block;
  margin-right: auto;
  margin-left: auto;
}
.search-input {
margin: auto ;

width: 60%;

border: none; 


padding: 15px;
max-width: 100%;
 
 
}
</style>
