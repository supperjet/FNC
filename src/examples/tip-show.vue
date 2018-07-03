<template>
    <div class="tip">
        <ncf-button fixed @click.native="back">返回</ncf-button>
        <br>
        <tip placement="top">
            <button>上</button>
        </tip>
        <br>
        <br>
        <tip placement="right">
            <button>右</button>
        </tip>
        <br>
        <br>
        <tip placement="left" content="this is a test!">
            <button>左</button>
        </tip>
        <br>
        <br>
        <tip placement="bottom">
            <button>下</button>
        </tip>
        
    </div>
</template>
<script>
    import Tip from '../components/tip.vue'
    import ncfButton from '../components/button.vue'
    export default {
        methods: {
            back() {
                this.$router.push({
                    path: '/'
                })
            },
        },
        components: {
            Tip,
            ncfButton
        }
    }
</script>
<style scoped>
    .tip{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    button{
        background: #eee;
        border: 1px solid #ccc;
        /* margin: 10px; */
        /* padding:10px; */
        outline: none;
    }
    .btn{
    width: 100%;
    height: 40px;
    background-color: #fff;
    outline: none;
    color: #444;
    margin-bottom: 10px;
    }
    .btn-blue{
    background: #49f;
    color: #fff;
    border: none;
    }
    
</style>
