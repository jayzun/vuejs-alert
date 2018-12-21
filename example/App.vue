<template>
    <div id="app"></div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                
            }
        },
        mounted() {
            this.$alert.show({
                text: 'hello world', 
                confirmCallback: function() {
                alert('你选择了确定');
            }, cancelCallback: function() {
                alert('你选择了取消');
            }});
        }
    }
</script>

<style lang="less">
    
</style>