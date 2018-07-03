<template>
  <div class="bank-list">
    <base-action-sheet ref="baseActionSheet">
      <div class="title" slot="header">银行卡选择</div>
      <div class="list" slot="content">
        <ul>
            <li class="list-item"
                :class="{disabled: item.disabled}"
                v-for="(item,index) in data" :key="index"
                @click="!item.disabled&&handleClickItem(item, index)"
            >
              <template>
                <div v-if="item.picUrl" style="padding-right: 10px"><img class="icon" :src="item.picUrl"/></div>
                <div>
                  <div class="bankname">{{item.bankname}}</div>
                  <div class="banktip">
                    <span v-if="item.bytimeStr">{{item.bytimeStr}}元单笔，</span>
                    <span v-if="item.bydateStr">{{item.bydateStr}}元单日，</span>  
                    <span v-if="item.bymonthStr">{{item.bymonthStr}}单月</span>
                  </div>
                </div>
                <div v-if="!item.disabled"><span :class="[index==currentIndex?'selected':'']"></span></div>
              </template>
            </li>
        </ul>
      </div>
      <div class="footer" slot="footer">
        <div class="add-bank-card" @click="addBankCard">
          <i class="add"></i>
          <slot name="footerTxt">
            <span>添加银行卡</span>
          </slot>
        </div>
      </div>
    </base-action-sheet>
  </div>
</template>
<script>
import BaseActionSheet from './baseActionSheet.vue'

const COMPONENT_NAME = 'bank-list'
const EVENTS = {
  CHOOSE_BANK: 'choose-bank',
  ADD_BANK_CARD: 'add-bank-card'
}
export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    defaultActiveIndex: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      currentIndex: this.defaultActiveIndex
    }
  },
  watch: {
    defaultActiveIndex(newVal, oldVal) {
      this.currentIndex = newVal;
    }
  },
  mounted() {
    this.$baseActionSheet = this.$refs.baseActionSheet;
  },
  methods: {
    show() {
      this.$baseActionSheet.show();
    },
    hide() {
      this.$baseActionSheet.hide();
    },
    addBankCard() {
      this.$emit(EVENTS.ADD_BANK_CARD);
      setTimeout(()=>{
        this.hide()
      },200)
    },
    handleClickItem(item, index) {
      this.currentIndex = index;
      this.$emit(EVENTS.CHOOSE_BANK, item);
      setTimeout(()=>{
        this.hide()
      },200)
    },
    setActiveIndex(index) {
      this.currentIndex = index;
    }
  },
  components: {
    BaseActionSheet,
  }
}
</script>
<style scoped>
  .bank-list{}
  .bank-list .list ul{
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 320px;
    overflow-y: scroll;
  }
  .bank-list .list .list-item{
    padding: 16px 15px;
    box-sizing: border-box;
    position: relative;
    font-size: 0;
    text-align: left;
    color:#333;
  }
  .bank-list .list .list-item.disabled{
    background-color: #eee;
    color:#ddd;
  }
  .bank-list .list .list-item.disabled .banktip{
    color:#ddd;
  }
  .bank-list .list .list-item:not(:last-child):after{
    content: '';
    position: absolute;
    left:0;
    bottom:0;
    width:100%;
    height: 1px;
    background-image: linear-gradient(90deg, #eee 50%, transparent 50%);
    background-image: -webkit-linear-gradient(90deg, #eee 50%, transparent 50%);
  }
  .bank-list .list .list-item > div{
    display: inline-block;
    font-size: 14px;
  }
  .bank-list .list .list-item .icon{
    width: 26px;
    height: 26px;
    background: #ddd;
  }
  .bank-list .list .list-item .bankname{
    font-size: 16px;
  }
  .bank-list .list .list-item .banktip{
    font-size: 12px;
    color:#999;
  }
  .bank-list .add-bank-card {
    position: relative;
    font-size: 16px;
  }
  .bank-list .add-bank-card .add{
    display: inline-block;
    width: 18px;
    height: 18px;
    transform: translateY(-2px);
    -webkit-transform: translateY(-2px);
    vertical-align: middle;
    margin-right: 5px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,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)
  } 
  .list-item .selected{
    position: absolute;
    top: 40%;
    right: 15px;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAADICAMAAABPsd3IAAAAb1BMVEUAAADsTTnuTTfsTTn0SjXsTjjzSTHvTTfsTTjtTjjuTTjtTjjuTDjtTTnuSTftTTjuTTftTjjuTjjtTTjvTjjtTTntTTjxRzftTjjuTjbuTjnwTTjtTTjtTTjtTjjtTTjtTjjtTjjtTjj/RjrtTjlI0bfCAAAAJHRSTlMA2HiHGNsVQvbyUN86cBxdVjZl7SuPYhHSS0gyqsNr5riWgQjfOqrzAAAD/ElEQVR42uzdi1IaQRBG4YZgRMALgpdEEIV+/2fMlpoyQXD1l8Ge5pxH+GqA2ake1ohKNe4+3C7chw9Xg5XRx7te+Gv92bHRxzru+FoPd0btrR59Qz+M2jrr+MbmPaP35Ya+peGNkSLXNDeS5JpmRpJc028jTc5vjSS5ppGRJuePRpqcT4wkuSaeZlU57xptlOPL7oty7Io/IXfkH+3BaG3Nsep0Ob7rCsv50kiT84GRJuccd74vx2nn7uX82kiTGxo91fusnF8aPckd+XocEheS86nRsxwf133JnRohh1x7yIUJOeRaQi5MyCHXEnJhQg65lpALE3LItYRcmJBDrqWa5EaDy273cjC2nBWTO1sO/aWT2YXlq5Rcb+b/dZRulqeQ3Grpb5qfWaYKyU07vqFJpus8heSufUvnliVBrmvtDXxr95ajQnLTvme3KyRnHffkdqXk7tMPMJaSu5lkH/4sJWdX2Yeiep1CcrZIPnRcbM3ZXfKB7XJytsw97F5QzmapLwqUlLN55ksWReVsmPiCSlk5m+S93POVXYn6FJbjHKXsmmuae1K74nI285x25eWs6ynt9iBnZ57RrqTca7cJ7fYjZ6eezk7alQitFtnspDUnde257CQ5sbl/tshTFZKcWm+SyE6S0zv2NHainN5pFjv5t1XvPoedtuawU+WwU+WwE+V202XddpocdqpcCbva/jzwpySHXSMn7eewCyFXqV0IuSrtgshVaBdGrjq7QHKV2YWSq8oumNwWu4hv1gonV41dQDmz8xrsQspVYRdUrgK7sHLh7QLLBbcLLRfaLrhcYLvwcmHtKpBbtwvyIsYq5BS7/hu7w5QLaFeNXDi7iuSC2VUlZ3YRx64yuUB21cmFsatQLohdlXIh7CqVk+xGyIWwe5Gr8/W3it13yv2wOCl2yOl2yOl2yOl2yD03EOyQ0+2Qk+3GyKl2J2PkdDvkdDvkdDvkdDvkdDvkdDvkdDvkdDvkZLs75J77Jdghp9shp9shp9shp9shp9shp9shp9shJ9tNkVPtJlPkdDvkdmZ3c5hyO7C7uT1QObNjwQ453Q453Q453Q453Q453Q451W4xQk61c+S22SEXxi6v3JodcmHscsv9Y4dcGLv8ci92yIWxOwy5xg65MHaHI9fYIRfC7rDkGjvkvt3u8OQaO+R0O+R0uz5yaqM+crodcrodcrodcrodcrodcrodcvuzuzL6a4ecboecboecboecbHeCnNr4BDndDjndDjndDjndDjndDrk/Iz/sRnv85AIRVuwhx88wCggBcQVsWygEGUYBEUBMHj3kFMUZRgFRQJlZGDngFEQYRgHxgEdUllFYhZNbQkZgyKU4AHGgG6vlmWZSAAAAAElFTkSuQmCC);
  }
</style>
