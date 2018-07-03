<template>
    <div class="layout">
        <button class="btn" @click="showpicker">showPicker</button>
        <picker
        ref="picker"
        v-model="isPickerShow"
        :cols="3"
        :data="pickerData"
        :title="'选择市/区/县'"
        :default-index="defaultIndex"
        @initialed="onPickerInitialed"
        @change="onPickerConfirm"
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
                pickerData: district,
                isPickerShow: false,
                pickerValue: '',
                defaultIndex: [3,2,1]
            }
        },
        mounted() {
            this.$picker = this.$refs.picker;
        },
        methods: {
            showpicker() {
                this.isPickerShow = true;
            },
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn{
  /* width: 150px; */
  height: 50px;
  border: 1px solid #ddd;
  background-color: #fff;
  outline: none;
  color: #444;
  margin-bottom: 20px;
  border-radius: 4px;
  margin-left: 45%;
}
</style>
