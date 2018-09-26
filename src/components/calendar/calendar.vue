<template>
    <div class="ncf-calendar">
        <div class="yearMonth border-bottom-1px">
            <div class="arrow ncf-arrow-left-1" @click="_handlePrevMonth"></div>
            <span class="title" @click="_handleDateTitle">{{curDateStr}}</span>
            <div class="arrow ncf-arrow-right-1" @click="_handleNextMonth"></div>
        </div>
        <div class="weeks border-bottom-1px">
            <ul>
                <li class="week-item" v-for="(item, index) in unitText" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="days">
            <ul class="">
                <li class="day-item" 
                    v-for="(item, index) in renderList" :key="index"
                    @click="item.isCurrMonth && _handleDayItem(item)"
                    :class="{
                        'notCurr': !item.isCurrMonth, 
                        'today': item.isToday, 
                        'start': item.isStart,
                        'end': item.isEnd
                    }"
                >
                    <a>{{item.isToday ? todayText : item.id}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import dateUtil from './date.js'

    const COMPONENT_NAME = 'ncf-calendar'

    const EVENTS = {
        NEXT_MONTH: 'next-month',
        PREV_MONTH: 'prev-month',
        DATE_TIME_CHANGE: 'date-time-change',
        DAY_ITEM_CHANGE: 'day-item-change'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            defaultDate: {          //默认显示时间
                type: Date,
                default: function() {
                    return new Date()
                }
            },
            dateRange: {            //日期范围
                type: Array,
                default: function() {
                    return []
                }
            },
            firstTypeDate: {        //状态1
                type: Array,
                default: function() {
                    return []
                }
            },
            secondTypeDate: {       //状态2
                type: Array,
                default: function() {
                    return []
                }
            },  
            todayText: {           //今日显示文字  
                type: String,
                default: '今'
            },
            strType: {             //title显示格式化支持 'Y*M*D* h*m*s' （*代表任意连字符）
                type: String,
                default: 'Y年M月'
            },
            unitText: {            //星期
                type: Array,
                default: function() {
                    return ['日', '一', '二', '三', '四', '五', '六']
                }
            }
        },
        data() {
            return {
                curDate: this.defaultDate,
                minDate: this.dateRange[0],
                maxDate: this.dateRange[1],
                dStart: this.firstTypeDate,
                dEnd: this.secondTypeDate,
                renderList: []
            }
        },
        created() {
            this._renderDayList()
        },
        
        computed: {
            curDateStr() {
                return dateUtil.formatDate(this.curDate, this.strType)
            }
        },
        methods: {
            _handlePrevMonth() {
                if(this.minDate) {
                   let minTime = dateUtil.getAnotherMonth(this.minDate, 1)
                   let currTime = this.curDate.getTime()
                   if (currTime <= minTime) {
                       return
                   }
                }
                //  获取下个月的日期
                this.curDate = dateUtil.getAnotherMonth(this.curDate, -1)
                this.$emit(EVENTS.PREV_MONTH, this.curDate)
                this._renderDayList()
               
            },
            _handleNextMonth() {
                if(this.maxDate) {
                   let maxTime = this.maxDate.getTime()
                   let currTime = this.curDate.getTime()
                   if (currTime >= maxTime) {
                       return
                   }
                }
                //  获取上个月的日期
                this.curDate = dateUtil.getAnotherMonth(this.curDate, 1)
                this.$emit(EVENTS.NEXT_MONTH, this.curDate)
                this._renderDayList()
            },
            _handleDateTitle() {
                this.$emit(EVENTS.DATE_TIME_CHANGE)
            },
            _handleDayItem(item) {
                this.$emit(EVENTS.DAY_ITEM_CHANGE, item)
            },
            _renderDayList() {
                this.$nextTick(() => {
                    this.renderList = dateUtil.getRenderList(this.curDate, this.dStart, this.dEnd)
                })
            },
            setDate(d) {
                this.curDate = d
                this._renderDayList()
            }
        },
        watch: {
            firstTypeDate: {
                deep: true,
                handler(newVal) {
                    this.dStart = newVal
                    this._renderDayList()
                }
            },
            secondTypeDate: {
                deep: true,
                handler(newVal) {
                    this.dEnd = newVal
                    this._renderDayList()
                }
            },
            defaultDate(newVal) {
                this.curDate = newVal
                this._renderDayList()
            }
        }
    }
    
</script>

<style>
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .ncf-calendar {
        color: #333;
        font-size: 14px;
        position: relative;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        user-select: none;
    }
    .ncf-calendar .yearMonth {
        position: relative;
        text-align: center;
        padding: 12px 0;
    }
    .ncf-calendar .yearMonth .title {
        font-size: 1.1rem;
        letter-spacing: 1px;
        color: #666;
    }
    .ncf-calendar .yearMonth .arrow {
        width: 26px;
        height: 16px;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }
    .ncf-calendar .weeks{
        position: relative;
        text-align: center;
        font-size: 0;
        padding: 5px 0;
    }
    .ncf-calendar .weeks .week-item{
        display: inline-block;
        width: 14.2857%;
        font-size: 14px;
        color: #999;
    }
    .ncf-calendar .days{
        font-size: 0;
        padding: 10px 0;
    }
    .ncf-calendar .days .day-item{
        width: 14.2857%;
        position: relative;
        display: inline-block;
        text-align: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        color: #333; 
        font-size: 14px;
    }
    .ncf-calendar .days .day-item a{
        display: inline-block;
        text-align: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border-radius: 100%;
        transform: scale(0.7);
        -webkit-transform: scale(0.7);
    }
    .ncf-calendar .days .day-item a:active{
        -webkit-tap-highlight-color:transparent;
        background: rgba(0,0,0,.3)
    }
    .ncf-calendar .days .day-item.notCurr {
        color: #c3c3c3;
    }
    .ncf-calendar .days .day-item.today a,
    .ncf-calendar .days .day-item.end a,
    .ncf-calendar .days .day-item.start a{
        color: #fff;
        background: #fff;
        border-radius: 100%;
    }
    .ncf-calendar .days .day-item.today a{
        color: #ed6355;
        border: 1px solid #ed6355;
    }
    .ncf-calendar .days .day-item.end a{
        background: #8786ec;
    }
    .ncf-calendar .days .day-item.start a{
        background: #7dd4e1;
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
    .ncf-arrow-right-1 {
        right: 12px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFlElEQVR4Xu3dTWtkRRQG4FNNUPzAH6Ags3UjpvvcpSK4UcRhFiIMKqM4RhCXMgv/hQsRJ/g1gsxuGJBxJ8xCVG4VIYuA4GJWo/8gC0MsuZpmOp2ku+pUdbqqzpttqm6qzvvcqntvp7sN4Ud1BYzq2WPyBADKEQAAACivgPLpF7UC7O3tPb6/v/+CMeZZ7/39jY2NXzc3N/9QntFKp18EAGvto977T4wxHxPRwzMz/puIrjHzpyutguKDFwGg7/s7xphXFuRwg5mvKM5pZVNfOwDn3Fve++8CZrjNzFsB7dAkogJrB9D3/W1jzMXAMWMlCCxUaLO1A7DW3iOiC6EDJiKsBBHFWta0BACOiMbLBjr3e6wEkQU7q3kJAL4hIskFHhBkQLB2ADs7O88dHh7+RkQPCeYDBIKizXZZO4BhMM65Le/9F5K5eO+/6rruPUlf9KFyXgyy1l4dLvCEoWAlEBauiBVgOnYgEKaY0K0oAMM8gCAhTUHX4gAAgSDFhC5FAgCChEQjuxYLAAgikxQ2LxoAEAhTjehWPAAgiEhT0LQKAEAgSDawSzUAUhF47292XXc5sC5qmlUFAAjyu6wOABDkRVAlACDIh6BaAECQB0HVAIAgHUH1AIAgDUETAIBAjqAZAEAgQ9AUACCIR9AcACCIQ9AkACAIR9AsACAIQ9A0ACBYjqB5AECwGIEKADMIrpPgvRAtv5SsBsCAoO/7t40x3wLBg1VBFQAgOLkdqAMABMcRqAQABIq3gFn/qdcEzPymMeaf5Tdb5bZQuwJMI0lBQES3JpPJ6zUjUA8gdTuoHQEAHC0FWlcCAJjZnjUiAIC56zNtCADglAt0TQgA4Iw7NC0IAGDBLboGBACw5BlN6wgAIOAhXcsIACAAQMsPiwAgEECrCAAgAkCLCAAgEkBrCABAAKAlBAAgBDB0c869O3xaufAQnzPzh8K+2boBQGIpU24RjTEvTSaTnxKHkNQdAJLK93/nBAQ/MPNrGYYgPgQAiEt3vKMQwZ/M/FSmIYgOAwCisp3sJATwFzM/mWkIosMAgKhsWc7+4SB3mPnVDEMQHwIAxKVL3v9pNBq9OB6P7yYOIak7ACSUL+U20Hv/Wdd1HyX8+SxdAUBYRuGeP/1rxfw7OQAIALQS/jB1AIgE0FL4AKA8fACIANDamT+dOraAAAStho8VQHn4ALAEQMtnPrYAhP9fBXANcAoEDWc+VoAzVgBN4WMFmEOgLXwAmAGgMXwAOAKgNXwASPt/vqF+xbyqF/BI49Qmqu8CUs784fOD8TFxUnYF9EsNv5XvIVa5AiD8B2egOgAI//jyqwoAwj+596oBYK29SkT4wog5AyoAHIW/Lbn2bPnbQlQ8B0D4i9k3vQIg/OVrXrMAEP7y8JvdAhB+WPhNAkD44eE3BwDhx4XfFACEHx9+MwAQviz8JgAgfHn41QNA+GnhVw0A4aeHXy2AlPCJ6AYzX8lTvvqPUt2TQISfF11VABB+3vCr2gIQfv7wqwGA8FcTfhUAEP7qwi8eAMJfbfhFA0D4qw+/WAAI/3zCLxIAwj+/8IsDgPDPN/yiACD88w+/GADOuXe8918LS/AlMw9v+sCPoAJrfxRsrX3ae/+7MeYRwfjxwo6gaLNdSgAwvF3r/dh5eO+vd133QWw/tD9egRIAOCIaRwaDMz+yYGc1LwHAPSK6EDofnPmhlQprt3YAfd/fNsZcDBsubTPzVmBbNAuowNoBOOde9t7/GDBWhB9QpNgmawcwDNhae4uILi0YPMKPTTawfREAdnd3Hzs4OBi+hPmNuXHfJ6JrzPx94HzQLLICRQCYjtk59zwRPeO9f2I0Gv08Ho9/iZwPmkdWoCgAkWNH8wwVAIAMRaz5EABQc3oZxg4AGYpY8yEAoOb0Moz9X4oiGa7sNLCnAAAAAElFTkSuQmCC)
    }
    .ncf-arrow-left-1 {
        left: 20px;
        background-image: url(data:image/png;base64,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)
    }
    @media screen and (min-width: 320px){
        .ncf-calendar .yearMonth .title {
            font-size: 1rem;
        }
        .ncf-calendar .weeks .week-item{
            font-size: 13px;
        }
        .ncf-calendar .days .day-item a{
            width: 40px;
            line-height: 2.2;
            font-size: 18px;
        }
        .ncf-calendar .days .day-item.today a {
            line-height: 2.15;
            font-size: 18px;
        }
        .ncf-calendar .days .day-item.start a {
            line-height: 2.25;
            font-size: 18px;
        }
        .ncf-calendar .days .day-item.end a {
            line-height: 2.25;
            font-size: 18px;
        }
    }
    @media screen and (min-width: 325px) and (max-width: 375px){
        .ncf-calendar .yearMonth .title {
            font-size: 1.05rem;
        }
        .ncf-calendar .weeks .week-item{
            font-size: 13px;
        }
        .ncf-calendar .days .day-item a{
            width: 43px;
            line-height: 2.2;
            font-size: 20px;
        }
        .ncf-calendar .days .day-item.today a {
            line-height: 2.05;
            font-size: 20px;
        }
        .ncf-calendar .days .day-item.start a {
            line-height: 2.15;
            font-size: 20px;
        }
        .ncf-calendar .days .day-item.end a {
            line-height: 2.15;
            font-size: 20px;
        }
    }
    @media screen and (min-width: 414px){
        .ncf-calendar .yearMonth .title {
            font-size: 1.1rem;
        }
        .ncf-calendar .weeks .week-item{
            font-size: 14px;
        }
        .ncf-calendar .days .day-item a{
            width: 46px;
            line-height: 2.3;
            font-size: 20px;
        }
        .ncf-calendar .days .day-item.today a {
            line-height: 2.2;
            font-size: 20px;
        }
        .ncf-calendar .days .day-item.start a {
            line-height: 2.3;
            font-size: 20px;
        }
        .ncf-calendar .days .day-item.end a {
            line-height: 2.3;
            font-size: 20px;
        }
    }

</style>

