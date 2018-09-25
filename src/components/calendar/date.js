
 export default {
    formatDate(d, formatStr){
        return formatStr.replace("Y", d.getFullYear())
            .replace("M", (d.getMonth() + 1)<10?`0${d.getMonth() + 1}`:(d.getMonth() + 1))
            .replace("D", d.getDate()<10?`0${d.getDate()}`:d.getDate())
            .replace("h", d.getHours())
            .replace("m", d.getMinutes())
            .replace("s", d.getSeconds());
     },

    //获取当前如期的下个月或上一个月
    /**
     * 
     * @param {*} d  date
     * @param {*} go  >0~next <0~prev
     */
    getAnotherMonth(d, go, returnStr) {
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        let day = d.getDate();
        let _day = new Date(year, month, 0).getDate();

        if(go > 0) {
            if(month >= 12) {
                month = 1
                year += 1
            }else{
                month += 1
            }
        }else{
            if(month <= 1) {
                month = 12
                year -= 1
            }else{
                month -= 1
            }
        }
       
        if(day > _day) {
            day = _day
        }

        month = month < 10 ? `0${month}`: month;
        day = day < 10 ? `0${day}` : day;

        const dateStr = `${year}/${month}/${day}`

        if(returnStr) {
            return dateStr
        }else{
            return new Date(dateStr)
        }
    },

    //获取一个月的天数
    getDaysInMonth(d) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const dd = new Date(year, month, 0);
        return dd.getDate();
    },

    //获取每月一号是星期几
    getWeekInMonth(d) {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const weekFirst = new Date(`${year}/${month}/1`).getDay();
        return weekFirst;
    },
   
    //获取渲染列表
    /**
     * 
     * @param {*} d  Date 当前日期
     * @param {*} dStart String '2018/09/21' 开始日期
     * @param {*} dEnd String '2018/10/20' 结束日期
     */
    getRenderList(d, dStart, dEnd) {
        const currList = this.getCurrMonthDaysList(d, dStart, dEnd);
        const prevList = this.getPrevMonthLastDaysList(d, dStart, dEnd);
        const nextList = this.getNextMonthFirstDaysList(d, dStart, dEnd);
        return [...prevList, ...currList, ...nextList]
    },
    //获取当前月的渲染列表
    getCurrMonthDaysList(d, dStart, dEnd) {
        let arr = [];
        let num = this.getDaysInMonth(d); //本月天数
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        month = month < 10 ? `0${month}`: month;
        let todayDate = this.formatDate(new Date(), 'Y/M/D');  //今日
        for(let i=0; i<num; i++) {
            let day = (i+1) < 10 ? `0${i+1}` : (i+1);
            const _date = `${year}/${month}/${day}`;
            arr.push({
                id: i+1,
                date: _date,
                isToday: todayDate == _date,
                isCurrMonth: true,
                isStart: dStart ? (dStart == _date) : false,
                isEnd: dEnd ? (dEnd == _date) : false
            })
        }
        return arr
    },

    //获取上个月的月末天数渲染列表
    getPrevMonthLastDaysList(d, dStart, dEnd) {
        let arr = [];
        // 空余天数与星期几相对应
        let prevNum = this.getWeekInMonth(d);
        //获取空余天数的开始日期
        let num = this.getDaysInMonth(this.getAnotherMonth(d, -1)) - prevNum + 1;
        //获取上个月的日期
        let preDate = this.getAnotherMonth(d, -1, true);
        let year = preDate.split('/')[0], month = preDate.split('/')[1];
        
        for(let i=0; i<prevNum; i++) {
            let _date = `${year}/${month}/${num+i}`;
            arr.push({
                id: num+i,
                date: _date,
                isToday: false,
                isCurrMonth: false,
                isStart: dStart ? (dStart == _date) : false,
                isEnd: dEnd ? (dEnd == _date) : false
            })
        }
        return arr;
    },

    //获取下个月的月初天数渲染列表
    getNextMonthFirstDaysList(d, dStart, dEnd) {
        let arr = [];
        //天数+星期
        let num = this.getDaysInMonth(d) + this.getWeekInMonth(d);
        let nextDate = this.getAnotherMonth(d, 1, true);
        let year = nextDate.split('/')[0], month = nextDate.split('/')[1];
        let _num = 7 - num % 7;

        for (let i = 0; i < _num; i++) {
            let _date = `${year}/${month}/${i+1}`;
            arr.push({
                id: i+1,
                date: _date,
                isToday: false,
                isCurrMonth: false,
                isStart: dStart ? (dStart == _date) : false,
                isEnd: dEnd ? (dEnd == _date) : false
            })
        }
        return arr;
    }
 }