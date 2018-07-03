<template>
    <div class="layout">
        <picker
        ref="picker"
        :cols="3"
        :data="pickerData"
        :default-index="defaultIndex"
        @initialed="onPickerInitialed"
        @change="onPickerConfirm"
        is-view
        is-cascade
        ></picker>
    </div>
</template>

<script>
    import Picker from '../../components/picker/picker.vue'
    import district from './district.js'
    export default {
        data() {
            return {
                pickerData: [],
                pickerValue: '',
                defaultIndex: []
            }
        },
        mounted() {
            this.pickerData = district;
            this.defaultIndex = [2,0,1]

        },
        methods: {
            onPickerInitialed() {
                console.log(this.$refs.picker);
                console.log(this.$refs.picker.getColumnValues());
                console.log(this.$refs.picker.getColumnIndexs());
            },
            onPickerConfirm(columnIndex, itemIndex, value) {
                console.log(columnIndex, itemIndex, value);
            }
        },
        components: {
            Picker
        }

    }
</script>

<style>
.layout{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0f0f0;

}
</style>
