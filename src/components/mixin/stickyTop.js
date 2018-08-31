let stickyAction

const getScrollTop = () => {
    var scrollTop=0  
    if (document.documentElement && document.documentElement.scrollTop){  
        scrollTop=document.documentElement.scrollTop
    }else {  
        scrollTop=document.body.scrollTop;  
    }  
    return scrollTop 
}

const getOffsetTop = (el) => {
    return el.offsetTop || el.getBoundingClientRect().top
}

export default {
    bind(el, binding) {
        let active = true;
        let offsetTop, scrollTop;
        let elStyle = el.style;
        let zIndex = binding.value.zIndex || 10;
        let stickyTop = binding.value.stickyTop || 0;
        elStyle.cssText = `left: 0; right: 0; top: ${stickyTop}px; z-index: ${zIndex}`;

        stickyAction = () => {
            scrollTop = getScrollTop()  //window 滚动距离
            !offsetTop&&(offsetTop = getOffsetTop(el))  //元素距离页面顶部的距离
            if (active) {
                if (scrollTop >= (offsetTop-stickyTop)) {
                    elStyle.position = 'fixed'
                    active = false
                }
            } else {
                if (scrollTop <= (offsetTop-stickyTop)) {
                    elStyle.position = ''
                    active = true
                }
            }
        }
        window.addEventListener('scroll', stickyAction)
    },
    unbind(el, binding) {
        window.removeEventListener('scroll', stickyAction)
    },
    update(el, binding) {
        let elStyle = el.style
        let zIndex = binding.value.zIndex || 10
        let stickyTop = binding.value.stickyTop || 0
        elStyle.cssText = `left: 0; right: 0; top: ${stickyTop}px; z-index: ${zIndex}`
    }
}