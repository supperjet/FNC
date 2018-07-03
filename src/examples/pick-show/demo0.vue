<template>
    <div class="layout">
        <picker
        ref="picker"
        :data="pickerData"
        :invalid-index="[[2, 5],[1,3]]"
        :default-index="defaultIndex"
        @initialed="onPickerInitialed"
        @change="onPickerConfirm"
        is-view
        ></picker>
    </div>
</template>

<script>
    const testData = [
        [
            {text: '2015', value: 1},
            {text: '2016', value: 2},
            {text: '2017', value: 3},
            {text: '2018', value: 4},
            {text: '2019', value: 5},
            {text: '2020', value: 6},
            {text: '2021', value: 2},
            {text: '2022', value: 3},
            {text: '2023', value: 2},
            {text: '2024', value: 3},
            {text: '2025', value: 2},
            {text: '2026', value: 3},
            {text: '2027', value: 2},
            {text: '2028', value: 3},
            {text: '2029', value: 2},
            {text: '2030', value: 3},
        ]
    ];

    import Picker from '../../components/picker/picker.vue'
    export default {
        data() {
            return {
                pickerData: testData,
                pickerValue: '',
                defaultIndex: [3]
            }
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
