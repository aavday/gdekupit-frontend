import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Breadcrumbs from "./components/Breadcrumbs.vue";
import Aside from "./components/Aside.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './assets/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('Breadcrumbs', Breadcrumbs);
app.component('Aside', Aside);

library.add(fas, far);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
