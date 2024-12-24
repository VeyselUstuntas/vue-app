import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

const app = createApp(App);

app.config.globalProperties.$filters={
    upperCaseFilter(title:string){
        return title.toUpperCase();
    }
}

app.use(router);

app.mount('#app');
