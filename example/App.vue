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
            
            this.$alert.show({text: 'hello world'});
            this.$alert.close();
            this.$alert.show();
        }
    }
</script>

<style lang="less">
    
</style>