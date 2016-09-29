<template>
    <img class="v-lazy-image" v-bind:src="placeholder"/>
</template>

<script>

/**
 * load image async
 * @param  {Object} element the img element
 * @param  {String} source  the source of the image
 */
var loadImage = function (element, source) {
    // update the source of the image if the source is different
    if (element.getAttribute('src') !== source) {
        var img = new Image();
        img.onload = () => {
            // set the src of the element
            // and set the loaded flag to 1
            element.src = source;
        };
        img.src = source;
    }
};

/**
 * load image that in the screen
 * @param  {Array} elements the img elements
 * @param  {String} source   the source of the image
 */
var loadImagesIfNeed = function (elements, source) {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var length = elements.length;
    for(var i = 0; i < length; i ++) {
        var element = elements[i];
        if (element == null) {
            continue;
        }
        var height = element.offsetHeight;
        var position = element.getBoundingClientRect();
        // whether the element is in the screen
        if (position.top > 0 && position.top + height < windowHeight) {
            loadImage(element, source);
        }
    }
};

/**
 * bin scroll event to async load image
 * @param  {Array} elements the img elements
 * @param  {String} source   the source of image
 */
var initScrollEvent = function (elements, source) {
    var timeout = -1;
    window.addEventListener('scroll', () => {
        // function debouncing
        if (timeout !== -1) {
            clearTimeout(timeout);
        }
        // get element in the screen and load images
        timeout = setTimeout(() => {
            loadImagesIfNeed(elements, source);
        }, 150);
    });
    // load image oninit
    loadImagesIfNeed(elements, source);
};
export default {
    props: ['source', 'placeholder'],
    ready() {
        // only add one listener to the scroll event
        if (document.readyState === 'complete') {
            initScrollEvent([this.$el], this.source);
        } else {
            window.addEventListener('load', () => {
                initScrollEvent([this.$el], this.source);
            });
        }
        // update the image if source change
        this.$watch('source', (val) => {
            if (val) {
                loadImagesIfNeed([this.$el], val);
            }
        });
    }
};
</script>
