<template>
    <div class="demo">
        <p></p>
        <div class="demo_2">
            <ncf-calendar
                ref="calendar"
                :date-range="[new Date('2018/08/01'), new Date('2018/11/01')]"
                :default-date="defaultDate"
                :first-type-date="firstTypeDate"
                :second-type-date="secondTypeDate"
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
                <li>支持动态设置两个图例日期（firstTypeDate，secondTypeDate, 元素形式严格要求为’2018/09/03‘）</li>
                <li>点击头部 和 日期 触发事件 ('date-time-change', 'day-item-change')</li>
                <li>设置日期回调方法（setDate） <button @click="resetDate">setDate</button></li>
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
                firstTypeDate: ['2018/09/01', '2018/09/10','2018/09/12','2018/09/21'],
                secondTypeDate: ['2018/09/08','2018/09/01'],
                defaultDate: new Date()
            }
        },
        created() {
            setTimeout(() => {
                this.firstTypeDate = ['2018/09/03', '2018/09/12','2018/09/20']
                this.secondTypeDate = ['2018/09/02','2018/09/11']
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
                    this.firstTypeDate = ['2018/10/03', '2018/10/12','2018/10/29']
                    this.secondTypeDate = ['2018/10/21','2018/10/09']
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
