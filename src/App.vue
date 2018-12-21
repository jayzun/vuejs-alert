<template>
    <div class="mask" :style="`background: rgba(0, 0, 0, ${background})`" v-show="state" ref="mask">
        <div class="alert" ref="alert">
            <div class="alert-text">
                <span>{{text}}</span>
            </div>
            <div class="control">
                <div class="cancel" @click="cancel">{{cancelText || '取消'}}</div>
                <div class="confirm" @click="confirm">{{confirmText || '确定'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vuejs-alert',
        data() {

            return {
                state: false,
                text: '',
                confirmText: '',
                cancelText: '',
                background: '0.5',
                duration: '',
                cancelCallback: '',
                confirmCallback: ''
            }
        },
        methods: {

            cancel() {

                this.close().then(() => {
                    if (typeof this.cancelCallback === 'function') {
                        this.cancelCallback();
                    }
                });

            },
            confirm() {

                this.close().then(() => {
                    if (typeof this.confirmCallback === 'function') {
                        this.confirmCallback();
                    }
                });
            },
            close() {

                return new Promise((resolve, reject) => {

                    this.$refs.mask.className = 'mask fade-out';
                    this.$refs.alert.className = 'alert disappear';
                    setTimeout(() => {
                        this.state = false;
                        resolve();
                    }, 500);
                });
            }
        },
        watch: {
            state(curVal, preVal) {

                let duration = parseInt(this.duration);

                if (curVal) {
                    //根据duration设置的时间，alert自动消失
                    if (!isNaN(duration)) {
                        setTimeout(() => {
                            this.close();
                        }, duration);
                    }

                    this.$refs.mask.className = 'mask fade-in';
                    this.$refs.alert.className = 'alert showup';
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .fade-out {
        animation: fadeOut .3s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .fade-in {
        animation: fadeIn .3s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .mask {
        display: flex;
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        .showup {
            animation: showup .3s ease-in-out;
        }

        @keyframes showup {
            0% {
                transform: translateY(-30px);
                opacity: 0;
            }

            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .disappear {
            animation: disappear .3s ease-in-out;
            animation-fill-mode: forwards;
        }

        @keyframes disappear {
            0% {
                transform: translateY(0);
                opacity: 1;
            }

            100% {
                transform: translateY(-30px);
                opacity: 0;
            }
        }

        .alert {
            position: absolute;
            width: 230px;
            min-height: 135px;
            border-radius: 10px;
            background: #fff;
            font-size: 12px;
            font-weight: bold;
            overflow: hidden;
            text-align: center;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

            .alert-text {
                display: table;
                box-sizing: border-box;
                width: 100%;
                min-height: 90px;
                padding: 20px 40px;

                span {
                    display: table-cell;
                    vertical-align: middle;
                }
            }

            .control {
                box-sizing: border-box;
                width: 100%;
                height: 45px;
                border-top: 1px solid #e1e1e1;
                padding: 9px 0;
                font-size: 14px;
                white-space: nowrap;

                .confirm {
                    float: left;
                    box-sizing: border-box;
                    width: 50%;
                    height: 100%;
                    line-height: 26px;
                    border-left: 1px solid #e1e1e1;
                    color: #ff6565;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .cancel {
                    float: left;
                    box-sizing: border-box;
                    width: 50%;
                    height: 100%;
                    line-height: 26px;
                    color: #777;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>