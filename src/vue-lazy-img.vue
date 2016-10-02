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
var loadImagesIfNeed = function (elementsObj) {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var length = elementsObj.length;
    for(var i = 0; i < length; i ++) {
        var element = elementsObj[i].element;
        var source = elementsObj[i].source;
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
var initScrollEvent = function (elementsObj) {
    var timeout = -1;
    window.addEventListener('scroll', () => {
        // function debouncing
        if (timeout !== -1) {
            clearTimeout(timeout);
        }
        // get element in the screen and load images
        timeout = setTimeout(() => {
            loadImagesIfNeed(elementsObj);
        }, 100);
    });
    // load image oninit
    loadImagesIfNeed(elementsObj);
};

var elementsObj = [];
var index = 0;

// only add one listener to the scroll event
initScrollEvent(elementsObj);

export default {
    props: ['source', 'placeholder'],
    ready() {
        var curIndex = index ++;
        elementsObj.push({
            element: this.$el,
            source: this.source
        });
        loadImagesIfNeed([elementsObj[curIndex]]);
        // update the image if source change
        this.$watch('source', (val) => {
            if (val) {
                var obj = elementsObj[curIndex];
                obj.source = val;
                if (obj.element != null) {
                    obj.element.src = this.placeholder;
                }
                loadImagesIfNeed([elementsObj[curIndex]]);
            }
        });
    }
};
</script>
