/* global describe, it, expect */
import Vue from 'vue';
import vueLazyImg from '../src/vue-lazy-img.vue';

describe('vue-lazy-img.vue', () => {
    it('should have correct text', () => {
        expect(vueLazyImg.data().text).toBe('Hello vueLazyImg');
    });

    it('should render correct text', () => {
        const vm = new Vue({
            template: '<div><vue-lazy-img></vue-lazy-img></div>',
            components: {
                'vue-lazy-img': vueLazyImg
            }
        }).$mount();
        expect(vm.$el.querySelector('h2').textContent)
            .toBe('Hello vueLazyImg');
    });
});
