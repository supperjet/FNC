<template>
    <div class="seg-picker">
        <ncf-popup position="bottom" ref="popup" prevent-scroll prevent-scroll-exclude=".tabContainer">
            <div class="segHeader" v-if="showHeader">
                <slot name="seghead">这是级联头部</slot>
            </div>
            <div class="segContainer">
                <tab-container 
                    ref="segCon"
                    class="tabContainer"
                    :active-item="activeItem"
                >  
                    <template v-if="level==1">
                        <tab-container-item class="item main">
                            <slot name="main">
                                <div>主框</div>
                            </slot>
                        </tab-container-item>
                    </template> 
                    <template v-if="level==2">
                        <tab-container-item class="item main">
                            <slot name="main">
                                <div>主框</div>
                                <button @click="gotoSub">去往下一页</button>
                            </slot>
                        </tab-container-item>
                        <tab-container-item class="item sub">
                            <slot name="sub">
                                <div>副框</div>
                                <button @click="gotoMain">返回上一页</button>
                            </slot>
                        </tab-container-item>
                    </template>
                    <template v-if="level==3">
                        <tab-container-item class="item main">
                            <slot name="main">
                                <div>主框</div>
                                <button @click="gotoSub">去往下一页</button>
                            </slot>
                        </tab-container-item>
                        <tab-container-item class="item sub_1">
                            <slot name="sub">
                                <div>副框1</div>
                                <button @click="gotoTrub">去往下一页</button>
                                <button @click="gotoMain">返回上一页</button>
                            </slot>
                        </tab-container-item>
                        <tab-container-item class="item sub_2">
                            <slot name="trub">
                                <div>副框2</div>
                                <button @click="gotoSub">返回上一页</button>
                            </slot>
                        </tab-container-item>
                    </template>
                </tab-container>
            </div>
            <div class="segFooter" v-if="showFooter">
                <slot name="segfoot">这是级联底部</slot>
            </div>
      </ncf-popup>
    </div>
</template>
<script>
    import ncfPopup from './ncfPop/ncfPopup.vue'
    import tabContainer from './tab/container/tab-container.vue'
    import tabContainerItem from './tab/container/tab-container-item.vue'

    const COMPONENT_NAME = 'seg-picker'

    const EVENTS = {
        GOTO_MAIN: 'go-main',
        GOTO_SUB: 'go-sub',
        GOTO_SUB_2: 'go-trub'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
            level: {
                type: Number | String,
                default: 2
            },
            showHeader: {
                type: Boolean,
                default: true
            },
            showFooter: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                activeItem: 0,
                tabItems:[1,2,3]
            }
        },
        methods: {
            show() {
                this.$refs.popup.show()
                setTimeout(() => {
                    this.$refs.segCon.refresh()
                }, 20)
            },
            hide() {
                this.$refs.popup.hide()
            },
            gotoMain() {
                this.activeItem = 0
                this.$emit(EVENTS.GOTO_MAIN, this.activeItem)
            },
            gotoSub() {
                this.activeItem = 1
                this.$emit(EVENTS.GOTO_SUB, this.activeItem)
            },
            gotoTrub() {
                this.activeItem = 2
                this.$emit(EVENTS.GOTO_SUB_2, this.activeItem)
            }
        },
        components: {
            ncfPopup,
            tabContainer,
            tabContainerItem
        }
    }

</script>
<style scoped>
    .segContainer{
        background: #fff;
        max-height: 600px;
        overflow: hidden;
    }
</style>
