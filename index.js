import Vue from 'vue';
import vueLazyImg from './src/vue-lazy-img.vue';

var createSrc = function (length) {
    var list = [];
    for (var i = 0; i < length; i ++) {
        if (i % 2 === 0) {
            list.push('./src/asserts/github.png');
        } else {
            list.push('https://avatars0.githubusercontent.com/u/5069587?v=3&s=466');
        }
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
