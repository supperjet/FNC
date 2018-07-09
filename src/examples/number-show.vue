<template>
    <div class="layout">
        <small>精度为3</small>
        <br>
        <ncf-number :value="12345.14" :precision="3"></ncf-number>
        <br>
        <small>向上取整</small>
        <br>
        <ncf-number :value="89612.16" is-round-up></ncf-number>
        <br>
        <small>使用千分位</small>
        <br>
            <ncf-number :value="10089612.16" is-separator></ncf-number>
        <br>
        <small>动画</small>
        <br>
            <ncf-number 
                class="bog"
                :value="val" 
                :duration="800" 
                is-separator
                is-animated 
            >
            </ncf-number>
        <br>
    </div>
    
</template>
<script>
    import NcfNumber from '../components/number.vue'
    export default {
        data() {
            return{
                val: 0
            }
        },
        mounted() {
            setTimeout(() => {
                this.val = 1289277.90
                setTimeout(() => {
                    this.val = 2000.008
                }, 2000)
            }, 2000)
        },
        components: {
            NcfNumber
        }
    }
</script>
<style>
    .layout {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }
    .layout small{
        color: #999;
    }
    .bog{
        font-size: 50px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bolder;
    }
</style>
å