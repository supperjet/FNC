<template>
    <div class="ncf-dropdown-nav-bar">
        <menu-container
            :active-index="currentIndex"
            @menu-item-click="itemClick"
        >
            <menu-container-item
                v-for="(item, index) in items" :key="index"
                :index="index"
                :disabled="item.disabled ? true : false"
            >
             {{item}}
            </menu-container-item>
        </menu-container>
    </div>
</template>
<script>
    import menuContainer from './menu/menu-container.vue'
    import menuContainerItem from './menu/menu-container-item.vue'

    const COMPONENT_NAME = 'ncf-dropdown-nav-bar'

    const EVENTS = {
        MENU_BAR_ITEM_CLICK: 'menu-bar-item-click'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            items: {
                type: Array | Object,
                dafault: function() {
                    return []
                }
            },
            activeIndex: {
                type: String | Number,
                default: -1
            }
        },
        data() {
            return {
                currentIndex: this.activeIndex
            }
        },
        watch: {
            activeIndex(newVal, oldVal) {
                this.currentIndex = newVal
            }
        },
        methods: {
            itemClick(index) {
                if(this.currentIndex != index) {
                    this.currentIndex = index
                }else{
                    this.currentIndex = -1
                } 
                this.$emit(EVENTS.MENU_BAR_ITEM_CLICK, this.currentIndex)
            }
        },
        components: {
          menuContainer,
          menuContainerItem
        }
    }
</script>
<style scoped>
    .ncf-dropdown-nav-bar {
        overflow: hidden;
    }
</style>
