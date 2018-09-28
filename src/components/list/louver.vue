<template>
    <div class="ncf-louver">
        <slot :data="renderData"></slot>
    </div>
</template>

<script>
    const COMPONENT_NAME = 'louver'

    export default {
        name: COMPONENT_NAME,
        props: {
            dataList: {
                type: Array,
                default: function() {
                    return []
                }
            },
            start: {
                type: Number,
                default: 0
            },
            end: {
                type: Number,
                default: function() {
                    return this.dataList.length
                }
            }
        },
        data() {
            return {
                startPoint: this.start,
                endPoint: this.end,
                privData: this.dataList
            }
        },
        computed: {
            renderData() {
                return this.privData.slice(this.startPoint, this.endPoint)
            }
        },
        watch: {
            dataList: {
                deep: true,
                handler(newVal) {
                    this.privData = newVal
                }
            },
            start(newVal) {
                this.startPoint = newVal
            },
            end(newVal) {
                this.endPoint = newVal
            }
        }
    }
</script>

<style>

</style>
