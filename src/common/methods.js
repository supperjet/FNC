 
//空函数
export function noop() {}

//合并对象
export function extend(to, _from) {
    for (const key in _from) {
      to[key] = _from[key]
    }
    return to
}

//遍历多维数组
export function traverse(data, childrenKeys = [], fn = noop) {
    if (!data) {
        return
    }
    if (typeof childrenKeys === 'function') {
        fn = childrenKeys
        childrenKeys = []
    }
    let level = 0 // current level
    let indexs = [] // index set of all levels
    const walk = curData => {
        for (let i = 0, len = curData.length; i < len; i++) {
            const isArray = Array.isArray(curData[i])
            const key = Array.isArray(childrenKeys) ? childrenKeys[level] : childrenKeys
            if (isArray || (curData[i] && curData[i][key])) {
                level++
                indexs.push(i)
                walk(isArray ? curData[i] : curData[i][key])
            } else if (level >= childrenKeys.length) {
                const res = fn(curData[i], level, [...indexs, i])
                if (res === 1) {
                    continue
                } else if (res === 2) {
                    break
                }
            } else {
                continue
            }
        }
        level = 0
        indexs = []
    }
    walk(data)
}

//合并一个以对象为元素的数组为一个对象
export function toObject(arr) {
    const res = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i])
        }
    }
    return res
}

//将类数组对象转换为真实数组
export function toArray(list, start) {
    start = start || 0
    let i = list.length - start
    const ret = []
    while (i--) {
      ret.unshift(list[i + start])
    }
    return ret
  }
  
  //元素是否存在于数组中，或两个元素是否相等
  export function inArray(list, item) {
    return Array.isArray(list) ? !!~list.indexOf(item) : item === list
  }
  
  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  export function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
  }
  
  //转换为字符串
  export function toString(val) {
    return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val)
  }
  
  //判断连个对象是否相等
  export function compareObjects(object0, object1) {
    let ret = true
  
    if (!object0 || !object1) {
      ret = false
    } else if (typeof object0 !== 'object' || typeof object1 !== 'object') {
      ret = false
    } else if (JSON.stringify(object0) !== JSON.stringify(object1)) {
      ret = false
    }
  
    return ret
  }
  
  //判断是否是空对象
  export function isEmptyObject(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false
      }
    }
    return true
  }

  export const warn = (msg, fn = 'error') => {
     console[fn](`[NCF]: ${msg}`)
  }

 //格式化手机号码 139 0000 1111
 export function formatPhone(mobile){
    let value = mobile.replace(/\D/g, '').substring(0, 11);
    let valueLen = value.length;
    if (valueLen > 3 && valueLen < 8) {
        value = value.replace(/^(...)/g, "$1 ");
    } else if (valueLen >= 8) {
        value = value.replace(/^(...)(....)/g, "$1 $2 ");
    }
    return value;
 }

//格式化银行卡号 2222 2222 2222 2222
export function formatBankcard(bankcard) {
    return (bankcard).replace(/\D/g, '').replace(/....(?!$)/g, '$& ');
}

//数字千分位 333,333,33.222
export function numberWithCommas(x){
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     return parts.join(".");
}
//去除字符串所有空格
export function removeAllSpace(str) {
    return str.replace(/\s+/g, "");
}

//去除所有的逗号
export function removeAllCommas(str) {
    return str.replace(/\,+/g, "");
}