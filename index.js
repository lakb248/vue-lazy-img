import Vue from 'vue';
import vueLazyImg from './src/vue-lazy-img.vue';

var srcList = [
    './src/asserts/github.png',
    './src/asserts/wallpaper.jpg'
];

var getRandom = function (min, max) {
    return min + Math.round(Math.random() * (max - min));
};

var createSrc = function (length) {
    var list = [];
    for (var i = 0; i < length; i ++) {
        list.push(srcList[getRandom(0, 1)]);
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
    },
    methods: {
        refreshList() {
            this.list = createSrc(this.list.length);
        },
        add() {
            this.list.push(srcList[getRandom(0,1)]);
        }
    }
});
