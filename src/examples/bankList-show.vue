<template>
  <div class="layout">
    <bank-list ref="banklist" 
               :data="bankListData" 
               :default-active-index="activeIndex"
               @choose-bank="chooseBank"
               @add-bank-card="addBank"
    ></bank-list>
    <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
    <button type="button" name="button" @click="showBankList" class="btn">银行列表</button>
     <pre>
        1.数据结构
        bankListData: [
          {
              picUrl: 'https://m.nicaifu.com/themes/img/bank_BOC_icon.jpg',
              bankname: '农业银行',
              bydateStr: "100万",
              bymonthStr: "100万",
              bytimeStr: "100万",
            },
            {
              bankname: '农业银行',
              bydateStr: "100万",
              bymonthStr: "100万",
              bytimeStr: "100万",
              disabled: true
            },
        ]
        2.属性说明
          data: {
            type: Array,
            default: function() {
              return []
            }
          },
          defaultActiveIndex: { //默认索引
            type: Number,
            default: -1
          }
        3.暴露事件
          const EVENTS = {
            CHOOSE_BANK: 'choose-bank',
            ADD_BANK_CARD: 'add-bank-card'
          }
    </pre>
  </div>
</template>
<script>
import BankList from '../components/bankList.vue'
import Toast from '../components/toast/index.js'

const testData =  [
          {
            picUrl: 'https://m.nicaifu.com/themes/img/bank_BOC_icon.jpg',
            bankname: '农业银行',
            bydateStr: "100万",
            bymonthStr: "100万",
            bytimeStr: "100万",
          },
          {
            // picUrl: 'https://m.nicaifu.com/themes/img/bank_BOC_icon.jpg',
            bankname: '农业银行',
            bydateStr: "100万",
            bymonthStr: "100万",
            bytimeStr: "100万",
            disabled: true
          },
          {
            // picUrl: 'https://m.nicaifu.com/themes/img/bank_BOC_icon.jpg',
            bankname: '招商银行',
            bydateStr: "100万",
            bymonthStr: "100万",
            bytimeStr: "100万",
          },
           {
            picUrl: 'https://m.nicaifu.com/themes/img/bank_BOC_icon.jpg',
            bankname: '工商银行',
            bydateStr: "100万",
            bymonthStr: "100万",
            bytimeStr: "100万",
          }
        ]

export default {
  name: "",
  data() {
    return {
         bankListData: [],
         activeIndex: 0
    }
  },
  created() {
    const self = this;
    setTimeout(() =>{
        self.bankListData = testData;
        self.activeIndex = 2;
    }, 1000)
  },
  mounted() {
    this.$banklist = this.$refs.banklist;
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    showBankList() {
      this.$banklist.show();
    },
    chooseBank(item) {
      console.log(item)
      Toast(`你选择了${item.bankname}`)
    },
    addBank() {
      Toast(`你点击了添加银行卡`,'bottom')
    }
  },
  components: {
    BankList
  }
}
</script>
<style scoped>
.layout{
  position: fixed;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn{
  width: 100px;
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  color: #444;
  margin-bottom: 10px;
}
.btn-blue{
  background: #49f;
  color: #fff;
  border: none;
}
</style>
