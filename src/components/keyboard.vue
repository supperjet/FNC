<template>
    <transition name="kb-slide">
        <div class="ncf-kb-container flex" :class="mode" v-show="isVisible">
            <div class="kb-number" :class="{'flex-3': isPower, 'flex-1': !isPower}">
                <ul class="kb-number-list">
                    <li 
                        class="kb-number-item border-bottom-1px"
                        v-for="n in 9" :key="n-1"
                        @click.stop="_keyboardItemClick($event, numberStack[n-1])"
                    >
                        <ncf-rect mode="normal">{{numberStack[n-1]}}</ncf-rect>
                    </li>
                    <template v-if="isPower">
                        <li class="kb-number-item"  @click.stop="_keyboardItemClick($event, '.')">
                            <ncf-rect mode="normal">.</ncf-rect>
                        </li>
                        <li class="kb-number-item"  @click.stop="_keyboardItemClick($event, numberStack[9])">
                            <ncf-rect mode="normal">{{numberStack[9]}}</ncf-rect>
                        </li>
                        <li class="kb-number-item"  @click.stop="_hideKeyboard">
                            <ncf-rect mode="normal"><div class="keyboard-hide kb-icon">隐藏</div></ncf-rect>
                        </li>
                    </template>
                    <template v-else>
                        <li class="kb-number-item no-bg keyboard-hide kb-icon border-bottom-1px">空</li>
                        <li class="kb-number-item border-bottom-1px" @click="_keyboardItemClick($event, numberStack[9])">
                            <ncf-rect mode="normal">{{numberStack[9]}}</ncf-rect>
                        </li>
                        <li class="kb-number-item border-bottom-1px no-bg delete" @click="_deleteClick($event)">
                            <div class="keyboard-del-simple kb-icon">删除</div>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="kb-operate flex-1" v-if="isPower">
                <ul class="kb-operate-list">
                    <li class="kb-operate-item border-bottom-1px delete" @click.stop="_deleteClick($event)">
                        <ncf-rect mode="normal"><div class="keyboard-del kb-icon">删除</div></ncf-rect>
                    </li>
                    <li class="kb-operate-item confirm" @click.stop="_confirmClick($event)">
                        <ncf-rect bg-color="#ff8640">确认</ncf-rect>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script>
    import NcfRect from './rect.vue'

    const COMPONENT_NAME = 'keybord'
    const EVENTS = {
        ENTER: 'enter',
        DELETE: 'delete',
        CONFIRM: 'confirm',
    }
    export default {
        name: COMPONENT_NAME,
        props: {
            mode: {
                type: String,
                default: 'powerful'
            },
            disorder: {
                type: Boolean,
                default: false
            }
        },
        created() {
            this._generateNumberStack()
        },
        data() {
            return {
                isVisible: false,
                numberStack: [],
                numbers: ''
            }
        },
        computed: {
            isPower() {
                return this.mode === 'powerful'
            }
        },
        methods: {
            show() {
                this.isVisible = true
            },
            hide() {
                this.isVisible = false
            },
            _generateNumberStack() {
                const baseStack = [1,2,3,4,5,6,7,8,9,0]
                this.numberStack = this.disorder ? baseStack.sort(function(){ return (0.5 - Math.random())}) : baseStack
            },
            _keyboardItemClick(e, num) {
                this.numbers += num
                this.$emit(EVENTS.ENTER, this.numbers)
            },
            _hideKeyboard() {
                this.isVisible = false
            },
            _confirmClick() {
                this.numbers && this.$emit(EVENTS.CONFIRM, this.numbers)
                this.isVisible = false
            },
            _deleteClick() {
                if(this.numbers) {
                    this.numbers = this.numbers.substring(0, this.numbers.length-1)
                    this.$emit(EVENTS.DELETE, this.numbers)
                }
            }
        },
        components: {
            NcfRect
        }
    }
</script>

<style>
    @import '../common/common.css';
    @import '../common/icon.css';

    .kb-slide-enter,
    .kb-slide-leave-active{
        transform: translate3d(0, 100%, 0)
    }
    .kb-slide-enter-active,
    .kb-slide-leave-active{
        transition: all .4s;
    }
    .ncf-kb-container{
        position: fixed;
        font-size: 18px;
        width: 100%;
        bottom: 0px;
        left:0;
        right:0;
        z-index: 200;
        border-top: 1px solid #eee;
        -webkit-user-select: none;
    }
    .kb-number-list {
        width: 100%;
    }
    .kb-number-item{
        position: relative;
        float: left;
        width: 33.33333%;
        text-align: center;
        line-height: 2.7;
    }
    .kb-number-item::before{
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-image: -webkit-linear-gradient(to right, #eee 50%, transparent 50%);
        background-image: linear-gradient(to right, #eee 50%, transparent 50%);
    }
    .kb-number-item.no-bg{
        background:#eee;
    }
    .kb-operate-item{
        text-align: center;
        position: relative;
    }
    .kb-operate-item.delete{
        line-height: 2.7;
    }
    .kb-operate-item.confirm{
        line-height: 8.1;
        color:#fff;
    }
    .kb-icon {
        display: block;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 25%;
        color: transparent;
    }
    .kb-icon.keyboard-del-simple{
        background-size: 15%;
    }

</style>
