# vue-lazy-img

> A component for image lazy loading implement by vuejs

## Demo
[Demo](https://lakb248.github.io/vue-lazy-img/)

## Usage

### Install

```bash
npm install vue-lazy-img --save
```

### CommonJS

```javascript
var VueLazyImg = require('vue-ip-input');

new Vue({
    components: {
        'vue-lazy-img': VueLazyImg
    },
    template: '<vue-lazy-img source="..." placeholder="..."></vue-lazy-img>'
});
```

### ES6

```javascript
import VueLazyImg from 'vue-lazy-img';

new Vue({
    components: {
        'vue-lazy-img': VueLazyImg
    },
    template: '<vue-lazy-img source="..." placeholder="..."></vue-lazy-img>'
});
```

### Props
| Property | Description |
|:--|:--|
| source | the source of the image |
| placeholder | the placeholder of the image which will be loaded before the source |

## License

[MIT](http://opensource.org/licenses/MIT)
