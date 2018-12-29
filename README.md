#

## Installation

```bash
npm i vuejs-alert --save
```

## Usage

```javascript
//main.js
import Alert from 'vuejs-alert';

Vue.use(Alert);

//.vue files
/*show component*/
this.$alert.show({text: 'hello world'});
/*close component*/
this.$alert.close();
```

![vuejs-alert](http://thyrsi.com/t6/638/1545384149x2890173753.png)

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