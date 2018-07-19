<template>
  <div class="ncf-slide-item">
    <slot>
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </slot>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'ncf-slide-item'

  export default {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>
  .ncf-slide-item {
    float: left;
    box-sizing: border-box;
    height: 100%;
  }
  .ncf-slide-item > a {
    display: block;
    height: 100%;
    overflow: hidden;
    text-decoration: none;
  }
  .ncf-slide-item > a img{
    width: 100%;
  }
</style>
