import Vue from 'vue';
import vueLazyImg from './src/vue-lazy-img.vue';

var createSrc = function (length) {
    var list = [];
    for (var i = 0; i < length; i ++) {
        list.push('./src/asserts/github.png');
    }
    return list;
};

new Vue({
    el: '#container',
    components: {
        'vue-lazy-img': vueLazyImg
    },
    data() {
        return {
            list: createSrc(20)
        };
    }
});
