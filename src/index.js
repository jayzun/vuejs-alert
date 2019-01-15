import vuejsAlert from './App.vue'

vuejsAlert.install = (Vue, defaultOption) => {

    //用于将option合并到组件中的data
    let merge = (data, ...option) => {
        for (let i = 0; i < option.length; i++) {
            let source = option[i] || {};
            for (let prop in source) {
                if (source.hasOwnProperty(prop)) {
                    let value = source[prop];
                    // if (value !== undefined) {
                    data[prop] = value;
                    // }
                }
            }
        }
        return data;
    }

    //配置默认option
    let defaults = merge({
        text: '',
        confirmText: '',
        cancelText: '',
        background: '0.5',
        duration: '',
        cancelCallback: '',
        confirmCallback: ''
    }, defaultOption);

    let instance;
    //extend 是构造一个组件的语法器
    let Alertconstructor = Vue.extend(vuejsAlert);

    let initInstance = () => {
        //实例化组件
        instance = new Alertconstructor({
            el: document.createElement('div')
        });
        //合并全局option
        merge(instance.$data, defaults);
        //添加到body
        document.body.appendChild(instance.$el);
    }

    let Alert = {
        show(option) {
            if (!instance) {
                //组件仅初始化一次
                initInstance();
            } else if (instance.state) {
                return;
            }
            //合并option
            merge(instance.$data, defaults, option);
            //显示alert组件
            instance.state = true;
        },
        close() {
            //隐藏alert组件
            instance.state = false;
        }
    }

    //注册全局组件
    Vue.component(vuejsAlert.name, Alert);

    //添加全局api
    Vue.prototype.$alert = Alert;
}

export default vuejsAlert.install;