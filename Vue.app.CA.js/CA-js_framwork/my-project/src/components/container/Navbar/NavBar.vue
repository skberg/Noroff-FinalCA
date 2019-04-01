<template>
    <nav id="page-nav">
        <!-- [THE HAMBURGER] -->
        <label for="hamburger"><img class="navb-img2" src="./me.svg" width="30px"/></label>
        <input type="checkbox" id="hamburger" />
    
    
        <!-- [MENU ITEMS] -->
        <ul>
            <li><button class="lin-hed-activ" v-on:click="onclickHome()">Home</button></li>
            <li><button class="lin-hed" v-on:click="onclickAbout()">about us</button></li>
            <li><button class="lin-hed" v-on:click=" onclickForm()">Contact Us</button></li>
    
        </ul>
        <div class="img">
            <img class="navb-img1" src="./me.svg" width="30px" />
        </div>
    
    </nav>
</template>

<script>
export default {
    name: "HomePage",

    methods: {
        onclickAbout: function() {
            this.$router.push("AboutPage");
        },
        onclickHome: function() {
            this.$router.push("HomePage");
        },
        onclickForm: function() {
            this.$router.push("ContactForm");
        }
    }
}
</script>

<style lang="scss" scoped>
$mainColr: #424651;
$secuderColor: #A75432;


//right icon in the navbar
.img {
    float: right;
    .navb-img1 {
        border: #A75432 1px solid;
        border-radius: 50%;
    }
}


//icon and buttons/tekst int the navbar 
.lin-hed-activ {
    background-color: transparent;
    color: #fff;
    border: none;
    font-size: 16px;
    border-bottom: solid 0.5px #A75432;
         outline: none; // this one
}

.lin-hed {
    background-color: transparent;
    color: #fff;
    border: none;
    font-size: 15px;
    border-bottom: solid 1px #424651;
    transition: border-width, border-color 0.5s linear;
     outline: none; // this one
}

.lin-hed:hover {
    border-width: 1px;
    border-color: #A75432;
}

/* [MENU] */

#page-nav {
    background: #424651;
    padding: 10px;
    border-bottom: 5px solid $secuderColor;
}

#page-nav label,
#page-nav ul,
#page-nav li {
    display: inline-block;
}

/* [HAMBURGER - HIDDEN ON BIG SCREENS] */

#page-nav label,
#hamburger {
    display: none;
}

/* [MENU ITEMS] */

#page-nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#page-nav ul li {
    padding: 10px;
    box-sizing: border-box;
}

#page-nav ul li a {
    color: #fff;
    text-decoration: none;
}

/* [ON SMALL SCREENS] */

@media screen and (max-width: 768px) {
    /* [SHOW HAMBURGER] */
    #page-nav label {
        display: inline-block;
        padding: 1px;
    }
    .img {
        display: none;
    }
    /* [BREAK DOWN MENU INTO VERTICAL] */
    #page-nav ul li {
        display: block;
    }
    #page-nav ul li {
        border-top: 1px solid #333;
    }
    /* [SHOW/HIDE MENU ON CHECKBOX CLICK] */
    #page-nav ul {
        display: none;
    }
    #page-nav input:checked~ul {
        display: block;
    }
}
</style>
