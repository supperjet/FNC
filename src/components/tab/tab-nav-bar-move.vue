<template>
    <div class="ncf-tab-move">
        <tab-nav 
            :active-item="currentIndex"
            @handle-tab-item-click="itemClick"
        >
            <tab-head-item   
                v-for="(item, index) in tabItems" :key="index"
                :index="index"
                :disabled="item.disabled?true:false"
                :underline="underline"
            >
                {{item.name ? item.name : item}}
            </tab-head-item>
            <div class="underline" 
                 :style="{
                    'width': widPer + '%', 
                    'left': leftPer + '%',
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
            linePading: {
                type: String | Number,
                default: 0
            }
        },
        data() {
            return{
                underline: false,
                currentIndex: this.activeItem,
                len: this.tabItems.length
            }
        },
        computed: {
            widPer() {
                return (100 / this.len) - this.linePading
            },
            leftPer() {
                return (this.currentIndex * (100 / this.len)) + this.linePading/2
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
        background: #ed4e39;
        border-radius: 1px;
        animation: moveIn 0.3s;
        -webkit-animation: moveIn 0.3s;
        transition: left 0.3s;
        -webkit-transition: left 0.3s;
    }
    @keyframes moveIn {
        from {left: 0}
    }
    @-webkit-keyframes moveIn {
        from {left: 0}
    }
</style>
