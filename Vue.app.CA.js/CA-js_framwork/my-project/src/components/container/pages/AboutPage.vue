<template>
    <div>
        <navbar></navbar>
        <div class="drop-down">
              <div class="drop-back">
                 <button class="drop-buttons" v-on:click="isTrue"><i class="fas fa-chevron-down"></i></button>  
            </div>
           
    
            <div class="drop-tiem" v-if="showitem">
                <h1 class="H">About us  <i class="fas fa-user-tie"></i></h1>
                
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique, minus voluptatem debitis tempore dolores eveniet dolore quasi laudantium laboriosam deserunt explicabo eos tenetur cum animi, 
                    vero optio omnis accusamus. Sed pulvinar condimentum sem, et imperdiet magna lobortis sed. Aliquam neque felis, euismod et turpis in, rhoncus dapibus dui.
                     Nulla dignissim gravida nisl id posuere. Etiam tempus ultricies sem, in interdum nibh sollicitudin nec. Mauris sed finibus nibh. Duis iaculis lorem a turpis faucibus vestibulum. 
                     Nunc eu pretium justo. Maecenas malesuada, ligula nec porttitor facilisis, lectus augue ultricies magna, ut iaculis mauris orci et urna. 
                    Nam dapibus arcu a nunc fermentum, vel dignissim nibh sollicitudin. Nullam volutpat, augue id aliquet malesuada, nibh turpis pellentesque mauris, sit amet dictum lacus dui ultricies urna.</p>

                    
                    <h4 class="H">Stuff <i class="fas fa-shapes"></i></h4>
                
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique, minus voluptatem debitis tempore dolores eveniet dolore quasi laudantium laboriosam deserunt explicabo eos tenetur cum animi, 
                    vero optio omnis accusamus.</p>


                    
                  <h4 class="H">The team <i class="fas fa-users"></i></h4>
                
                <p class="p">Nam gravida gravida purus, et convallis mauris pharetra nec. Nullam dapibus convallis nisl vitae rhoncus. Praesent pharetra nisi sed varius condimentum. Curabitur luctus nibh vel mi commodo aliquet. 
                    Aenean eleifend auctor nibh, facilisis sagittis elit malesuada non. Vestibulum a gravida odio, et efficitur ante. Sed in semper mauris, in tristique ex. <br>
                    Vivamus sed diam porttitor velit placerat vehicula sed nec dolor. <br>
                    Aliquam congue et erat vel ornare. Donec blandit mollis dui, ac vehicula justo viverra vitae. Cras a purus posuere, aliquet tortor in, elementum lorem. <br>
                    Mauris pretium justo eget scelerisque finibus. <br>
                    Donec elit ipsum, sagittis id porttitor dictum, viverra vel tortor. Nunc eu vestibulum dui.</p>


                    
                <h4 class="H">Other stuff <i class="fas fa-shapes"></i></h4>
                
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique, minus voluptatem debitis tempore dolores eveniet dolore quasi laudantium laboriosam deserunt explicabo eos tenetur cum animi, 
                    vero optio omnis accusamus.</p>
                       

                    <h4 class="H">See you soon <i class="far fa-laugh-wink"></i></h4>
                 
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique, minus voluptatem debitis tempore dolores eveniet dolore quasi laudantium laboriosam deserunt explicabo eos tenetur cum animi, 
                    vero optio omnis accusamus.</p>
                    
                    
            </div>

        </div>
    </div>
</template>

<script>
import Navbar from "../Navbar/NavBar";
export default {
    name: 'AboutPage',
    components: {
        Navbar,

    },
    data() {
        return {
            showitem: false
        }

    },
    methods: {
        isTrue: function() {
            this.showitem = !this.showitem;
        }
    }
}
</script>

<style lang="scss" scoped>

$mainColr: #424651;
$secuderColor: #A75432;
.drop-down{
  
    margin-top: 15px auto;

    display:block;
   .drop-back{
       background-color: #A75432;
       padding: 5px;
   }
 

    .drop-buttons{
        margin: 5px auto;
        display: block;
        background-color: #ccc;
        border-radius: 90%;
        padding: 10px;
        height: 50px;
        width: 50px;
        border: none;
        font-size: 25px;
        outline: none; // this one
    }
    
    .drop-tiem{
        
        margin: 5px auto; 
        margin-top: 0px;
        height: auto;
        max-width: 1000px;
 
        background-color:#ccc;
        border-radius: 0px 0px 5px 5px;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.913);
        padding: 15px;
    
        
    }
  
    .p{
        max-width: 80%;
        margin: auto;
      
    }
    .H{
        max-width: 80%;
        margin-left: 100px;
        padding-right: 15px;
        border-bottom: #A75432 2px solid;
      
       
        i{
            padding: 15px;
        }
    }


   
   
}
@media screen and (max-width: 500px){
  .drop-buttons{
     
        background-color: #ccc;
      
    }

    .H{
        margin: 10px auto;
       
    }
}
</style>

