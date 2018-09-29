<template>
    <div class="ncf-data-window">
        <slot :data="renderData"></slot>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'data-window'

    export default {
        name: COMPONENT_NAME,
        props: {
            dataList: {
                type: Array,
                default: function() {
                    return []
                }
            }, 
            wind: {
                type: Array,
                default: function() {
                    return [0, this.dataList.length]
                }
            }
        },
        data() {
            return {
                startPoint: this.wind[0],
                endPoint: this.wind[1],
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
            wind: {
                deep: true,
                handler(newVal) {
                    this.startPoint = newVal[0]
                    this.endPoint = newVal[1]
                }
            }
        }
    }
</script>
