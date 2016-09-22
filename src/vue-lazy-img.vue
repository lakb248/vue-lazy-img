<template>
    <img class="v-lazy-image" v-bind:src="placeholder"/>
</template>

<script>

// whether the scroll event listener has been added
var hasListener = false;

/**
 * load image async
 * @param  {Object} element the img element
 * @param  {String} source  the source of the image
 */
var loadImage = function (element, source) {
    var img = new Image();
    img.onload = () => {
        // set the src of the element
        // and set the loaded flag to 1
        element.src = source;
        element.setAttribute('data-loaded', '1');
    };
    img.src = source;
};

/**
 * load image that in the screen
 * @param  {Object} elements the img elements
 * @param  {String} source   the source of the image
 */
var loadImagesIfNeed = function (elements, source) {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var length = elements.length;
    for(var i = 0; i < length; i ++) {
        var element = elements[i];
        // if the source of the element has been loaded,
        // skip the element
        if (+element.getAttribute('data-loaded') === 1) {
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
export default {
    props: ['source', 'placeholder'],
    ready() {
        // only add one listener to the scroll event
        if (!hasListener) {
            hasListener = true;
            var timeout = -1;
            window.addEventListener('scroll', () => {
                // function debouncing
                if (timeout !== -1) {
                    clearTimeout(timeout);
                }
                // get element in the screen and load images
                timeout = setTimeout(() => {
                    var elements = document.querySelectorAll('.v-lazy-image');
                    loadImagesIfNeed(elements, this.source);
                }, 300);
            });
        }
        // load image oninit
        loadImagesIfNeed([this.$el], this.source);
    }
};
</script>

