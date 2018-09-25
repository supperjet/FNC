<template>
  <div class="layout">
    <date-picker
      ref="datePicker"
      type="datetime"
      :default-date="currentDate"
      is-twelve-hours
      is-view
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
      currentDate: new Date(),
    }
  },
  mounted() {
    this.$datepicker = this.$refs.datePicker
  },
  methods: {
    onDatePickerChange(columnIndex, itemIndex, value) {
        console.log(columnIndex, itemIndex, value);
        console.log(this.$datepicker.getFormatDate());
    }
  }
}

</script>
<style>

</style>
