<template>
    <div style="margin: 10px;">
        <select name="bounce" class="aniSelected" @change="animationChange">
            <template v-for="val in transitionsList">
                <option :value="val">{{val}}</option>
            </template>
        </select>
        <button class="btn" @click="showDemo">showDemo</button>
        <ncf-transitions :name="curAnimation">
            <div class="demo" v-if="isShow">测试用例</div>
        </ncf-transitions>
    </div>
</template>

<script>
import NcfTransitions from '../components/transitions'
export default {
    data() {
        return {
            isShow: false,
            animationName: 'bounce',
            transitionsList: [
                'bounce', 'zoom', 'punch', 'fly',
                'slide-up', 'slide-right', 'slide-left', 'slide-down',
                'fade', 'fade-up', 'fade-down', 'fade-right', 'fade-left'
            ]
        }
    },
    computed: {
        curAnimation() {
            const prefix = 'ncf'
            return `${prefix}-${this.animationName}`
        }
    },
    methods: {
        showDemo() {
            this.isShow = !this.isShow
        },
        animationChange(e) {
            this.animationName = e.target.value
        }
    },
    components: {
        NcfTransitions
    }
}
</script>

<style scoped>

    .btn{
        width: 80px;
        height:50px;
        background: orange;
        border-radius: 5px;
        outline: none;
    }
    .demo{
        width: 100px;
        height: 200px;
        background: #ed4e39;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 -50px;
        line-height: 200px;
        text-align: center;
        color: #f0f0f0;
        box-shadow: 0 0 50px rgba(0,0,0,.3);
    }
    .aniSelected{
        width: 200px;
        height: 50px;
        outline: none;
        border: 1px solid #aaa;
        border-radius: 5px;
        line-height: 50px;

    }
</style>
