<template>
    <div class="radio-list">
        <ul>
            <li class="ncf-radio flex flex-align-center flex-pack-justify" 
                :class="{'border-bottom-1px': needBorderBtm, 'selected': currenntIndex == index, 'disabled': item.disabled}"
                @click="!item.disabled&&handleRadioEvent(index)"
                v-for="(item, index) in radioList" :key="index"
            >
                <div class="content">
                    <slot name="content">
                           <div class="name">{{item.name}}</div>
                           <div class="tip" v-if="item.tip">{{item.tip}}</div>
                    </slot>
                </div>
                <div class="label"
                     :class="[mode]"
                     v-if="!item.disabled"
                ></div>
            </li>
        </ul>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'ncf-radio'
    const EVENTS = {
        RADIO_ITEM_CLICK: 'radio-item-click'
    }
    export default {
        name: COMPONENT_NAME,
        props: {
            radioList: {
                type: Array,
                default: function() {
                    return []
                }
            },
            defaultIndex: {
                type: String | Number,
                default: 0
            },
            needBorderBtm: {
                type: Boolean,
                default: true
            },
            mode: {
                type: String,
                default: 'radio_1'
            }
        },
        data() {
            return {
                currenntIndex: this.defaultIndex,
            }
        },
        watch: {
            defaultIndex(newVal) {
                this.currenntIndex = newVal
            }
        },
        methods: {
            handleRadioEvent(index) {
                if(this.currenntIndex != index) {
                    console.log(index)
                    this.currenntIndex = index
                    this.$emit(EVENTS.RADIO_ITEM_CLICK, index)
                }
            }
        },
    }
</script>
<style>
    @import '../common/common.css';
    .ncf-radio {
        position: relative;
        padding: 12px 15px 12px 0;
        background: #fff;
    }
    .ncf-radio.disabled {
        background: #fafafa;
        margin: 0;
    }
    .ncf-radio .content{
        margin: 0 0 0 15px;
    }
    .ncf-radio .content .name{
        color: #333;
        font-size: 16px;
    }
    .ncf-radio.disabled .content .name{
         color: #c3c3c3;
    }
    .ncf-radio .content .tip{
        color: #999;
        font-size: 12px;
    }
    .ncf-radio .label{
        width: 16px;
        height: 16px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .ncf-radio.selected .label.radio_1 {
        animation: zoom 0.3s;
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAADICAMAAABPsd3IAAAAb1BMVEUAAADsTTnuTTfsTTn0SjXsTjjzSTHvTTfsTTjtTjjuTTjtTjjuTDjtTTnuSTftTTjuTTftTjjuTjjtTTjvTjjtTTntTTjxRzftTjjuTjbuTjnwTTjtTTjtTTjtTjjtTTjtTjjtTjjtTjj/RjrtTjlI0bfCAAAAJHRSTlMA2HiHGNsVQvbyUN86cBxdVjZl7SuPYhHSS0gyqsNr5riWgQjfOqrzAAAD/ElEQVR42uzdi1IaQRBG4YZgRMALgpdEEIV+/2fMlpoyQXD1l8Ge5pxH+GqA2ake1ohKNe4+3C7chw9Xg5XRx7te+Gv92bHRxzru+FoPd0btrR59Qz+M2jrr+MbmPaP35Ya+peGNkSLXNDeS5JpmRpJc028jTc5vjSS5ppGRJuePRpqcT4wkuSaeZlU57xptlOPL7oty7Io/IXfkH+3BaG3Nsep0Ob7rCsv50kiT84GRJuccd74vx2nn7uX82kiTGxo91fusnF8aPckd+XocEheS86nRsxwf133JnRohh1x7yIUJOeRaQi5MyCHXEnJhQg65lpALE3LItYRcmJBDrqWa5EaDy273cjC2nBWTO1sO/aWT2YXlq5Rcb+b/dZRulqeQ3Grpb5qfWaYKyU07vqFJpus8heSufUvnliVBrmvtDXxr95ajQnLTvme3KyRnHffkdqXk7tMPMJaSu5lkH/4sJWdX2Yeiep1CcrZIPnRcbM3ZXfKB7XJytsw97F5QzmapLwqUlLN55ksWReVsmPiCSlk5m+S93POVXYn6FJbjHKXsmmuae1K74nI285x25eWs6ynt9iBnZ57RrqTca7cJ7fYjZ6eezk7alQitFtnspDUnde257CQ5sbl/tshTFZKcWm+SyE6S0zv2NHainN5pFjv5t1XvPoedtuawU+WwU+WwE+V202XddpocdqpcCbva/jzwpySHXSMn7eewCyFXqV0IuSrtgshVaBdGrjq7QHKV2YWSq8oumNwWu4hv1gonV41dQDmz8xrsQspVYRdUrgK7sHLh7QLLBbcLLRfaLrhcYLvwcmHtKpBbtwvyIsYq5BS7/hu7w5QLaFeNXDi7iuSC2VUlZ3YRx64yuUB21cmFsatQLohdlXIh7CqVk+xGyIWwe5Gr8/W3it13yv2wOCl2yOl2yOl2yOl2yD03EOyQ0+2Qk+3GyKl2J2PkdDvkdDvkdDvkdDvkdDvkdDvkdDvkdDvkZLs75J77Jdghp9shp9shp9shp9shp9shp9shp9shJ9tNkVPtJlPkdDvkdmZ3c5hyO7C7uT1QObNjwQ453Q453Q453Q453Q453Q451W4xQk61c+S22SEXxi6v3JodcmHscsv9Y4dcGLv8ci92yIWxOwy5xg65MHaHI9fYIRfC7rDkGjvkvt3u8OQaO+R0O+R0uz5yaqM+crodcrodcrodcrodcrodcrodcvuzuzL6a4ecboecboecboecbHeCnNr4BDndDjndDjndDjndDjndDrk/Iz/sRnv85AIRVuwhx88wCggBcQVsWygEGUYBEUBMHj3kFMUZRgFRQJlZGDngFEQYRgHxgEdUllFYhZNbQkZgyKU4AHGgG6vlmWZSAAAAAElFTkSuQmCC);
    }
    .ncf-radio .label.radio_2{
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .ncf-radio.selected .label.radio_2{
        border: none;
        animation: zoom 0.3s;
        background-image: url(data:image/png;base64,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)
    }
    @keyframes zoom {
        from{
            transform: scale(0);
        }
        to{
            transform: scale(1);
        }
    }
</style>
