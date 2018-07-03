<template>
  <div class="md-example-child md-example-child-date-picker md-example-child-date-picker-1">
    <date-picker
      type="time"
      :unit-text="['', '', '', 'h', 'm']"
      :half-day-text="['AM', 'PM']"
      :minute-step="30"
      is-twelve-hours
      is-view
      @change="onDatePickerChange"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from '../../components/datepicker.vue'

export default {
  name: 'date-picker-demo',
  /* DELETE */
  title: '时间选择',
  /* DELETE */
  components: {
     DatePicker,
  },
  methods: {
      onDatePickerChange(columnIndex, itemIndex, value) {
        console.log(columnIndex, itemIndex, value);
    }
  }
}

</script>