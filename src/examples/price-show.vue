<template>
    <div class="layout">
        <h3>金额拖动组件</h3>
        <div class="demo_1">
            <ncf-price 
                :min="min" 
                :max="max" 
                :default-value="value" 
                :width="width" 
                :step="step"
                @price-change="handlePriceChange"
            ></ncf-price>
        </div>
        <div>
            <ncf-popup position="bottom" ref="popup1">
                <div class="container">
                    <!-- <popup-title-bar></popup-title-bar> -->
                    <ncf-price 
                        :min="min" 
                        :max="max" 
                        :default-value="value" 
                        :width="width" 
                        :step="step"
                        @price-change="handlePriceChange"
                        v-if="showPrice"
                    ></ncf-price>
                </div>
            </ncf-popup>
        </div>
        <pre>
            1、参数
            min: 最小值
            max: 最大值
            defaultValue: 默认值
            width: 标尺宽度
            step: 步长
            color: 标尺和标尺文字颜色
            midColor: 中线游标颜色
            fl: 摩擦系数
            isAttract: 是否开启吸附
            counter: 是否开启头部数字显示

            2、事件
            price-change: '滚动停止时的触发事件'
        </pre>
        <button @click="showPop" class="btn">弹出层显示</button>
    </div>
</template>
<script>
    import ncfPrice from '../components/price/ruler.vue'
    import Toast from '../components/toast/index.js'
    import ncfPopup from '../components/ncfPop/ncfPopup.vue'
    import ncfPopTitle from '../components/ncfPop/popTitleBar.vue'
    import popupTitleBar from '../components/ncfPop/popTitleBar.vue'
    export default {
        data() {
            return {
                min: 1000,
                max: 50000,
                value: 0,
                width: 2000,
                step: 1000,
                showPrice: false
            }
        },
        created() {
            setTimeout(() => {
                this.min = 100,
                this.value = 2000
            }, 2000)
        },
        methods: {
            handlePriceChange(val) {
                Toast(`当前金额为: ${val}`, 'bottom')
            },
            showPop() {
                this.$refs.popup1.show()
                this.$nextTick(() => {
                    this.showPrice = true
                })
            }
        },
        components: {
            ncfPrice, 
            ncfPopup, 
            ncfPopTitle,
            popupTitleBar,
            Toast
        }
    }
</script>
<style scoped>
    .layout {
        position: absolute;
        top:0; bottom: 0;left:0; right: 0;
        background: #eee;
        text-align: center;
    }
    .demo_1{
        background: #fff;
        height: 100px;
        overflow: hidden;
    }
    .btn{
        background: #49f;
        border: none;
        outline: none;
        padding: 10px;
    }
    pre{
        text-align: left;
    }
    .container{
        padding: 20px 0;
    }
</style>

