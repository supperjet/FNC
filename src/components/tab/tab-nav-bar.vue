<template>
    <div class="ncf-tab">
        <tab-nav 
            :active-item="currentIndex"
            @handle-tab-item-click="itemClick"
        >
            <tab-head-item   
                v-for="(item, index) in tabItems" :key="index"
                :index="index"
                :disabled="item.disabled?true:false"
                :underline="underline"
                :lw="lw"
            >{{item.name ? item.name : item}}</tab-head-item>
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
            underline: {
                type: Boolean,
                default: true
            },
            lw: {
                type: Number | String,
                default: 0
            }
        },
        data() {
            return{
                currentIndex: this.activeItem
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
<style>


</style>
