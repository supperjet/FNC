<template>
    <div class="repaymode" style="text-align:center">
        <button @click="showMode">显示回款方式</button>
        <base-action-sheet ref="baseActionSheet" :is-need-footer="false">
            <div class="title" slot="header">汇款方式选择</div>
            <div class="list" slot="content">
                <ncf-radio :radio-list="list" mode="radio_2" default-index="1" @radio-item-click="showDialog"></ncf-radio>
            </div>
        </base-action-sheet>
    </div>
</template>
<script>
    import BaseActionSheet from '../components/baseActionSheet.vue'
    import NcfRadio from '../components/radio.vue'

    export default {
        data() {
            return{
                list: [
                    {name: '小活宝'},
                    {name: '利是宝'}
                ]
            }
        },
        methods: {
            showMode() {
                this.$refs.baseActionSheet.show()
            }
        },
        components: {
            BaseActionSheet,
            NcfRadio
        }
    }
</script>
<style>

</style>
