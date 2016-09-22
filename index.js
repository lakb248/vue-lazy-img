import Vue from 'vue';
import vueLazyImg from './src/vue-lazy-img.vue';

new Vue({
    el: '#container',
    components: {
        'vue-lazy-img': vueLazyImg
    },
    data() {
        return {};
    }
});
