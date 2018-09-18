<template>
    <div class="drop-index">
        <router-link tag="a" class="tab-item" to="/dropdown/demo1">
            demo1(dropdown的第一种用法，全屏)
        </router-link>
         <p></p>
        <router-link tag="a" class="tab-item" to="/dropdown/demo2">
            demo2(dropdown的第二种用法，部分屏，注意外层css的不同)
        </router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .drop-index{
        margin: 100px 0 100px 0px;
    }
</style>
