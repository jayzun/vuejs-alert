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

![vuejsAlert][alert]

## Option

use option to custom the component.  
option is an object.  
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
| ------ | ------ | ------ | ------ |
| text | string |  | alert text |
| confirmText | string | "确定" | text of confirm button |
| cancelText | string | "取消" | text of cancel button |
| confirmCallback | function |  | function to call when confirm button is clicked |
| cancelCallback | function |  | function to call when cancel button is clicked |
| duration | number |  | auto close time, 1000 = 1 second |
| background | string | 0.5 | opacity of background color, range from 0 to 1|

## License

The MIT License

[alert]:data:image/png;base64,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
