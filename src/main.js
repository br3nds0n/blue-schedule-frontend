import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

app.use(VueSweetalert2);

app.mount('#app');
