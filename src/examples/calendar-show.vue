<template>
    <div class="demo">
        <p></p>
        <div class="demo_2">
            <ncf-calendar
                ref="calendar"
                :date-range="[new Date('2018/08/01'), new Date('2018/11/01')]"
                :default-date="defaultDate"
                :legends="legends"
                @next-month="onNextMonth"
                @prev-month="onPrevMonth"
                @date-time-change="changeDate"
                @day-item-change="dayClick"
            ></ncf-calendar>
        </div>
        <small>
            <ol>
                <li>支持设置今天的文字（todayText）</li>
                <li>设置最大和最小日期显示范围 (minDate, maxDate)</li>
                <li>支持自定义设置图例legends</li>
                <li>点击头部 和 日期 触发事件 ('date-time-change', 'day-item-change')</li>
            </ol>
        </small>
    </div>
    
</template>

<script>
    import ncfCalendar from '../components/calendar/calendar.vue'
    import toast from '../components/toast/index.js'

    export default {
        data() {
            return {
                defaultDate: new Date(),
                legends: {
                    'unlockDate': {
                        dateArr: ['2018/09/22'],
                        bgColor: '#7dd4e1'
                    },
                    'dueDate': {
                        dateArr: ['2018/09/02', '2018/09/25'],
                        bgColor: '#8786ec'
                    }
                }
            }
        },
        created() {
            setTimeout(() => {
                
            }, 1000)
        },
        methods: {
            changeDate() {
                toast('点击了顶部日期')
            },
            onNextMonth(d) {
                toast('点击了下个月')
                //数据请求，设置日期状态
                setTimeout(() => {
                    this.legends['unlockDate'].bgColor = '#49f'
                    this.legends['unlockDate'].dateArr = ['2018/10/22', '2018/10/02']
                    this.legends['dueDate'].dateArr = ['2018/10/02', '2018/10/20']
                }, 1000)
            },
            onPrevMonth(d) {
                toast('点击了上个月')
                //数据请求，设置日期状态
            },
            dayClick(item) {
                console.log(item)
            },
            resetDate() {
                this.$refs.calendar.setDate(new Date('2018/09/25'))
            }
        },
        components: {
            ncfCalendar,
            toast
        }
    }
</script>

<style scoped>
    p{
        text-align: center;
    }
    button {
        background: #49f;
        outline: none;
        border: none;
        border-radius: 10px;
    }
    .demo_1, .demo_2 {
        border: 1px solid #eee;
        border-radius: 5px;
        margin: 0 10px;
    }
</style>
