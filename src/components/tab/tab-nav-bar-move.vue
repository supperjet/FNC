<template>
    <div class="ncf-tab-move">
        <tab-nav 
            :active-item="currentIndex"
            @handle-tab-item-click="itemClick"
        >
            <tab-head-item   
                v-for="(item, index) in tabItems" :key="index"
                :index="index"
                :color="lineColor"
                :disabled="item.disabled?true:false"
                :underline="isUnderline"
            >
                {{item.name ? item.name : item}}
            </tab-head-item>
            <div class="underline" 
                 :style="{
                    'width': widPer + '%',
                    'background': paddingPer, 
                    'transform': 'translate3d('+leftPer+'%, 0, 0)',
                    '-webkit-transform': 'translate3d('+leftPer+'%, 0, 0)',
                 }"
            ></div>
        </tab-nav>
    </div>
</template>
<script>
    import TabNav from './nav/tab-nav.vue'
    import TabHeadItem from './nav/tab-head-item.vue'

    const COMPONENT_NAME = 'tab-nav-bar'
    const EVENTS = {
        TAB_ITEM_CLICK: 'tab-item-click'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            tabItems: {
                type: Array,
                default: function() {
                    return []
                }
            },
            activeItem: {
                type: String | Number,
                default: 0
            },
            lineColor: {
                type: String,
                default: '#ed4e39'
            },
            linePading: {
                type: String | Number,
                default: 0
            }
        },
        data() {
            return{
                isUnderline: false,
                currentIndex: this.activeItem,
                len: this.tabItems.length
            }
        },
        computed: {
            widPer() {
                return (100 / this.len)
            },
            leftPer() {
                return this.currentIndex * 100
            },
            paddingPer() {
                return `linear-gradient(
                        to right, 
                        transparent ${this.linePading}%,
                        ${this.lineColor} ${this.linePading}%,
                        ${this.lineColor} ${100-this.linePading}%,
                        transparent ${100-this.linePading}%)`
            }
        },
        watch: {
            activeItem(newVal, oldVal) {
                this.currentIndex = newVal
            }
        },
        methods: {
            itemClick(index) {
                if(index != this.currentIndex) {
                    this.currentIndex = index
                    this.$emit(EVENTS.TAB_ITEM_CLICK, index)
                }
            }
        },
        components: {
            TabNav,
            TabHeadItem
        }
    }
</script>

<style scoped>
    .ncf-tab-move .underline{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        animation: moveIn 0.3s;
        -webkit-animation: moveIn 0.3s;
        transition: transform 0.3s;
        -webkit-transition: transform 0.3s;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
        backface-visibility: hidden;
    }
    @keyframes moveIn {
        from {transform: translate3d(0, 0, 0)}
    }
    @-webkit-keyframes moveIn {
        from {-webkit-transform: translate3d(0, 0, 0)}
    }
</style>
