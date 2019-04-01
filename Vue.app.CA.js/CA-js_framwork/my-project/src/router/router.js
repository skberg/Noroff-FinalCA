import Vue from 'vue';
import VueRrot from 'vue-router';
import HomePage from '../components/container/pages/HomePage';
import LoginPage from '../components/inloging/LoginPage';
import AboutPage from '../components/container/pages/AboutPage';
import CardcPage from '../components/container/pages/CardcPage';
import ContactForm from '../components/container/ContactForm/ContactForm';

Vue.use(VueRrot);

const router = new VueRrot({
    routes: [
        {
            path: '/',
            name: 'LoginPage',
            component: LoginPage,
           
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/AboutPage',
            name: ' AboutPage',
            component: AboutPage
        },
        {
            path: '/CardcPage',
            name: 'CardcPage',
            component: CardcPage
        },
        {
            path: '/ContactForm',
            name: 'ContactForm',
            component: ContactForm
        }
     
      
    ]
})
export default router;