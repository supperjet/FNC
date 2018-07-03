<template>
    <div class="ncf-filed" :class="{'border-bottom-1px': hairline}">
        <div class="part_1" @click="handleFiled">
            <div class="title">{{cpu_title}}</div>
            <div class="value">
                <span>{{cpu_value}}</span>
                <i class="icon" v-if="downarrow"></i>
            </div>
        </div>
        <div class="part_2">
            <div class="tips">{{cpu_tips}}</div>
        </div>
    </div>
</template>

<script>
const COMPONENT_NAME = 'ncf-filed';
const EVENTS = {
    FILED_EVENT: 'filed-event'
}
export default {
    name: COMPONENT_NAME,
    props: {
        title: {
            type: String,
            default: '可退出金额'
        },
        value: {
            type: String | Number,
            default: 10000.00
        },
        tips: {
            type: String,
            default: '当前利率：6.5%+0.40%'
        },
        hairline: {
            type: Boolean,
            default: true
        },
        downarrow: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        cpu_title() {
            return this.title;
        },
        cpu_value() {
            return this.value;
        },
        cpu_tips() {
            return this.tips;
        }
    },
    methods: {
        handleFiled() {
            this.$emit(EVENTS.FILED_EVENT)
        }
    }
}
    
</script>

<style>
.ncf-filed {
    background: #fff;
    position: relative;
    padding: 0 15px;
    font-size: 0px;
}
.ncf-filed .part_1 > div{
    display: inline-block;
    width: 50%;
    text-overflow: ellipsis;
    word-wrap: none;
    overflow: hidden;
    font-size: 14px;
    text-align: left;
    color: #333;
}
.ncf-filed .part_1{
    padding: 13px 0 14px 0;
}
.ncf-filed .part_1 .value{
    text-align: right;
    font-size: 13px;
    color: #333;
}
.ncf-filed .part_2 {
    padding: 6px  0 15px 0;
    font-size: 13px;
    color:#999;
    text-align: right;
}
.border-bottom-1px:after{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-image: -webkit-linear-gradient(0deg, #eee 50%, transparent 50%);
    background-image: -moz-linear-gradient(0deg, #eee 50%, transparent 50%);
    background-image: -ms-linear-gradient(0deg, #eee 50%, transparent 50%);
    background-image: -o-linear-gradient(0deg, #eee 50%, transparent 50%);
    background-image: linear-gradient(0deg, #eee 50%, transparent 50%);
}
.icon {
    display: inline-block;
    width: 15px;
    height: 8.5px;
    margin-left: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(data:image/png;base64,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)
}
</style>

