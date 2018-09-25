<template>
    <div class="demo">
        <small>
           <ol>
               <li>支持设置今天的文字（todayText）</li>
               <li>设置最大和最小日期显示范围 (minDate, maxDate)</li>
               <li>支持动态设置两个图例日期（startAndEndDate）</li>
               <li>点击头部 和 日期 触发事件 ('date-time-change', 'day-item-change')</li>
               <li>设置日期回调方法（setDate） <button @click="resetDate">setDate</button></li>
           </ol>
        </small>
       
        <div class="demo_2">
            <ncf-calendar
                ref="calendar"
                today-text="才"
                :min-date="minDate"
                :max-date="maxDate"
                :default-date="defaultDate"
                :start-and-end-date="date"
                @date-time-change="changeDate"
                @day-item-change="dayClick"
            ></ncf-calendar>
        </div>
        <p></p>
        <br>
    </div>
    
</template>

<script>
    import ncfCalendar from '../components/calendar/calendar.vue'
    import toast from '../components/toast/index.js'

    export default {
        data() {
            return {
                date:[],
                defaultDate: new Date(),
                minDate: new Date('2018/08/01'),
                maxDate: new Date('2018/11/01')
            }
        },
        created() {
            setTimeout(() => {
                this.date = ['2018/09/08', '2018/09/14']
                this.defaultDate = new Date('2018/10/2')
            }, 1000)
        },
        methods: {
            changeDate() {
                toast('点击了顶部日期')
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
