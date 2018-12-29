import vuejsAlert from './App.vue'

vuejsAlert.install = (Vue, globalOption) => {

    //用于将option合并到组件中的data
    let merge = (data, option) => {
        let source = option || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    data[prop] = value;
                }
            }
        }
        return data;
    }

    let instance;
    //extend 是构造一个组件的语法器
    let Alertconstructor = Vue.extend(vuejsAlert);

    let initInstance = () => {
        //实例化组件
        instance = new Alertconstructor({
            el: document.createElement('div')
        });
        //合并全局option
        merge(instance.$data, globalOption);
        //添加到body
        document.body.appendChild(instance.$el);
    }

    let Alert = {
        show(option) {
            if(window.$isAlert === undefined) {
                //组件仅初始化一次
                initInstance();
            }
            else if(window.$isAlert) {
                return;
            }
            //合并option
            merge(instance.$data, option);
            //显示alert组件
            instance.state = true;
            window.$isAlert = true;
        },
        close() {
            window.$isAlert = false;
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