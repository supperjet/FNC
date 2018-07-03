// 判断class是否存在
export function hasClass(el, className) {
    const reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
  }
  
//添加class
export function addClass(el, className) {
    if (hasClass(el, className)) return;
    const newClass = el.className.split(' ')
    newClass.push(className);
    el.className = newClass.join(' ');
}

//移除class
export function removeClass(el, className) {
    if (!hasClass(el, className)) return;
    const reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    el.className = el.className.replace(reg, ' ');
}
 
//获取data-的属性值
export function getData(el, name) {
    const prefix = 'data-'
    return el.getAttribute(prefix + name)
}
  
//获取元素的位置和宽度属性
export function getRect(el) {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
}

export function once(el, event, fn) {
    var listener = function() {
      if (fn) {
        fn.apply(this, arguments);
      }
      off(el, event, listener);
    };
    on(el, event, listener);
}

//事件绑定
export const on = (function() {
    if(document.addEventListener) {
        return function(element, event, handler) {
            if(element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    }else{
        return function(element, event, handler) {
            if (element && event && handler) {
              element.attachEvent('on' + event, handler);
            }
        }
    }
})()

//事件移除
export const off = (function() {
    if (document.removeEventListener) {
      return function(element, event, handler) {
        if (element && event) {
          element.removeEventListener(event, handler, false);
        }
      };
    } else {
      return function(element, event, handler) {
        if (element && event) {
          element.detachEvent('on' + event, handler);
        }
      };
    }
})()

//获取屏幕dpr
export function getDpr() {
    const getParam = (name, str) => {
        const reg = new RegExp(`(^|,)${name}=([^,]*)(,|$)`, 'i')
        const r = str.match(reg)
        if (r != null) {
            return r[2]
        }
        return null
    }

    const viewPort = document.querySelector('meta[name=viewport]')

    if (!viewPort) {
        return 1
    }

    const viewPortContent = viewPort.getAttribute('content')
    const initialScale = +(getParam('initial-scale', viewPortContent) || 1)
    const maximumScale = +(getParam('maximum-scale', viewPortContent) || 1)
    const minimumScale = +(getParam('minimum-scale', viewPortContent) || 1)

    return 1 / Math.min(initialScale, maximumScale, minimumScale)
}

export const render = (function(global) {
    const docStyle = document.documentElement.style
  
    let engine
  
    if (global.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
      engine = 'presto'
    } else if ('MozAppearance' in docStyle) {
      engine = 'gecko'
    } else if ('WebkitAppearance' in docStyle) {
      engine = 'webkit'
    } else if (typeof navigator.cpuClass === 'string') {
      engine = 'trident'
    }
  
    const vendorPrefix = {
      trident: 'ms',
      gecko: 'Moz',
      webkit: 'Webkit',
      presto: 'O',
    }[engine]
  
    const helperElem = document.createElement('div')
    const perspectiveProperty = vendorPrefix + 'Perspective'
    const transformProperty = vendorPrefix + 'Transform'
  
    if (helperElem.style[perspectiveProperty] !== undefined) {
      return function(content, left, top) {
        // console.log(top)
        content.style[transformProperty] = `translate3d(${-left}px,${-top}px,0)`
      }
    } else if (helperElem.style[transformProperty] !== undefined) {
      return function(content, left, top) {
        content.style[transformProperty] = `translate(${-left}px,${-top}px,0)`
      }
    } else {
      return function(content, left, top) {
        content.style.marginLeft = left ? `${-left}px` : ''
        content.style.marginTop = top ? `${-top}px` : ''
      }
    }
  })(window)
  

