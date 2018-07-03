<template>
  <content-loader
    :height="600"
    primaryColor="#eee"
    secondaryColor="#eee"
  >
    <rect x="15" y="15" rx="3" ry="3" width="50" height="30"/>
    <rect x="15" y="55" rx="3" ry="3" width="120" height="15"/>
    <rect x="320" y="30" rx="3" ry="3" width="60" height="20"/>
    <rect x="15" y="100" rx="3" ry="3" width="150" height="35"/>
    <rect x="15" y="150" rx="3" ry="3" width="200" height="12"/>
    <rect x="15" y="180" rx="3" ry="3" width="200" height="10"/>
    <rect x="15" y="210" rx="3" ry="3" width="200" height="10"/>
    <rect x="15" y="240" rx="3" ry="3" width="220" height="10"/>
    <rect x="15" y="270" rx="3" ry="3" width="240" height="10"/>
    <rect x="15" y="300" rx="3" ry="3" width="200" height="10"/>
    <rect x="15" y="330" rx="3" ry="3" width="180" height="10"/>
    <rect x="15" y="360" rx="3" ry="3" width="200" height="10"/>
    <rect x="15" y="390" rx="3" ry="3" width="210" height="10"/>
    <rect x="15" y="420" rx="3" ry="3" width="250" height="10"/>
    <rect x="15" y="450" rx="3" ry="3" width="220" height="10"/>
  </content-loader>
</template>
<script>
import {ContentLoader} from 'vue-content-loader'

export default {
  components: {
    ContentLoader
  }
}
</script>
<style scoped>
</style>
