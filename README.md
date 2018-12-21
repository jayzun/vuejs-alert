#

## Installation

```bash
npm i vuejsAlert --save
```

## Usage

```javascript
//main.js
import Alert from 'vuejsAlert';

Vue.use(Alert);

//.vue files
this.$alert.show({text: 'hello world'});
```

![vuejsAlert](./assets/images/alert.png)

## Option

use Option to custom the component.  
Option is an object.  
Use option in the following ways:

```javascript
this.$alert.show(option);
```

or

```javascript
Vue.use(Alert, option);
```

option available:

| key | type | default | description |
| :-: | :-: | :-: | ------ |
| text | string |  | alert text |
| confirmText | string | "确定" | text of confirm button |
| cancelText | string | "取消" | text of cancel button |
| confirmCallback | function |  | function to call when confirm button is clicked |
| cancelCallback | function |  | function to call when cancel button is clicked |
| duration | number |  | auto close time, 1000 = 1 second |
| background | string | 0.5 | opacity of background color, range from 0 to 1|

## License

The MIT License