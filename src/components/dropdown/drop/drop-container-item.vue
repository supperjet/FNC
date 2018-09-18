<template>
    <div 
        v-show="index == $parent.activeIndex" 
        class="drop-container-item"
    >
        <slot></slot>
    </div>
</template>

<script>
    const COMPONENT_NAME = "drop-container-item"
    export default {
        name: COMPONENT_NAME,
        props: {
            index: {
                type: Number | String
            }
        }
    }
</script>
