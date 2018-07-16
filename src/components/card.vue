<template>
    <div class="ncf-card">
        <div class="ncf-card-header flex flex-h flex-align-center flex-pack-justify" 
             :class="{'border-bottom-1px': needBdrBtm}"
        >
            <div class="card-left flex flex-h">
                <div class="card-img" v-show="iconShow">
                    <slot name="pic">
                        <img src="" class="cell-pic"/>
                    </slot>
                </div>
                <div class="card-content">
                    <slot name="title">基础card</slot>
                </div>
            </div>
            <div class="card-right">
                <slot name="label">
                    <div class="icon flex flex-h flex-align-center" v-show="labelShow" @click="handleMoreClick">
                        <div class="tips" v-show="tipShow">
                            <slot name="tips">
                                <span>查看更多信息</span>
                            </slot>
                        </div>
                        <i class="more"></i>
                    </div>
                </slot>
            </div>
        </div>
        <div class="ncf-card-content">
            <slot name="content">
                <p>内容填充区域</p>
            </slot>
        </div>
        <div class="ncf-card-footer border-top-1px" 
             v-show="needFooter"
        >
            <slot name="footer">
                <div @click="checkMore">查看更多</div>
            </slot>
        </div>
    </div>
</template>

<script>
     const COMPONENT_NAME = 'card'
     const EVENTS = {
         CHECK_DETAIL: 'check-detail',
         CHECK_MORE: 'check-more'
     }

     export default {
        name: COMPONENT_NAME,
        props: {
            iconShow: {
                type: Boolean,
                default: false
            },
            labelShow: {
                type: Boolean,
                default: false
            },
            needFooter: {
                type: Boolean,
                default: false
            },
            tipShow: {
                type: Boolean,
                default: false
            },
            needBdrBtm: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            handleMoreClick(e) {
                this.$emit(EVENTS.CHECK_DETAIL, e);
            },
            checkMore(e) {
                this.$emit(EVENTS.CHECK_MORE, e);
            }
        }
     }

</script>

<style scoped>
    @import '../common/common.css';

    .ncf-card{
        background: #fff;
    }
    .ncf-card .ncf-card-header{
        position: relative;
        padding: 12px 15px;
        color: #333;
        font-size: 14px;
    }
    .ncf-card .ncf-card-header .card-img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .ncf-card .ncf-card-header .icon .tips{
        color: #999;
        font-size: 12px;
    }
    .ncf-card .ncf-card-header .icon .more{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-left: 6px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        content: "";
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transition: transform .2s;
        -webkit-transition: transform .2s;
    }
    .ncf-card .ncf-card-content {
        font-size: 14px;
        color:#999;
    }
    .ncf-card .ncf-card-footer{
        position: relative;
        padding: 8px 15px 8px 0;
        font-size: 13px;
        color: #5c8ae5;
        text-align: center
    }
</style>
