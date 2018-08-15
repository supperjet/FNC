<template>
    <div class="layout">
        <small>基础进度条</small>
        <ncf-process-bar></ncf-process-bar>
        <br>
        <small>外层容器控制进度条宽度</small>
        <div style="width:50%">
            <ncf-process-bar></ncf-process-bar>
        </div>
        <br>
        <small>进度条长度（value="70"）</small>
        <div style="width:50%">
            <ncf-process-bar value="70"></ncf-process-bar>
        </div>
        <br>
        <small>进度条高度（barHeight="8"）</small>
        <div style="width:50%">
            <ncf-process-bar bar-height="8"></ncf-process-bar>
        </div>
        <br>
        <small>进度条底色（shadowColor="#d7fbf6"）</small>
        <div style="width:80%">
            <ncf-process-bar shadow-color="#4ab8b8"></ncf-process-bar>
        </div>
         <br>
        <small>进度条颜色（lineColor="#d7fbf6"）</small>
        <div style="width:80%">
            <ncf-process-bar line-color="#e40475"></ncf-process-bar>
        </div>
         <br>
        <small>渐变色（lineColor="linear-gradient(to right, #f37ff4,#ed4e39)"）</small>
        <div style="width:80%">
            <ncf-process-bar value="90" line-color="linear-gradient(to right, #f37ff4,#ed4e39)"></ncf-process-bar>
        </div>
         <br>
        <small>不要动画（isAnimate=false）</small>
        <div style="width:80%">
            <ncf-process-bar :is-animated="ani"></ncf-process-bar>
        </div>
        <br>
        <small>两端插入内容(slot = 'start'&&'end')</small>
        <div style="width:80%">
            <ncf-process-bar is-animated>
                <div slot="start">0</div>
                <div slot="end">100</div>
            </ncf-process-bar>
        </div>
        <br>
        <div>显示tag(isFlag=true)</div>
        <br>
        <div style="width:80%">
            <ncf-process-bar is-animated is-flag lineColor="#ed4e39" value="44"></ncf-process-bar>
        </div>
    </div>
</template>
<script>
    import ncfProcessBar from '../components/progressbar.vue'
    export default {
        data() {
            return {
                ani: false
            }
        },
        components: {
            ncfProcessBar
        }
    }    
</script>
<style>

</style>
