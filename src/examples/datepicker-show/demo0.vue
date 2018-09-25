<template>
  <div class="md-example-child md-example-child-date-picker md-example-child-date-picker-0">
    <date-picker
      ref="datePicker"
      today-text="今天"
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="currentDate"
      is-view
      @initialed="onDatePickerInitialed"
      @change="onDatePickerChange"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from '../../components/datepicker.vue'

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      minDate: new Date('2013/9/9'),
      maxDate: new Date('2020/9/9'),
      currentDate: new Date(),
    }
  },
  methods: {
    onDatePickerInitialed() {
      console.log(`[Mand Mobile] DatePicker getFormatDate: ${this.$refs.datePicker.getFormatDate('yyyy/MM/dd')}`)
    },
    onDatePickerChange(columnIndex, itemIndex, value) {
        console.log(columnIndex, itemIndex, value);
    }
  },
}

</script>
