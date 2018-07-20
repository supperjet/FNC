<template>
    <div class="container">
        <h1>red dot</h1>
        <red-dot></red-dot>
        <br>
        <red-dot :value="1"></red-dot>
        <br>
        <red-dot :value="590" :is-visible="isVisible"></red-dot>
        <br>
        <red-dot>
            <ncf-number 
                :value="val" 
                :duration="800" 
                is-animated 
                is-separator
            >
            </ncf-number>
        </red-dot>
        <br>
        <h1>tag</h1>
        <ncf-tag>新春巨献</ncf-tag>
        <br>
        <ncf-tag value="你财富" large tag-color="orange"></ncf-tag>
        <br>
        <ncf-tag value="你财富" tag-color="#29f"></ncf-tag>
        <br>
        <ncf-tag value="0元拿360手机" is-bdr large></ncf-tag>
        <br>
        <ncf-tag value="加息至10%" is-bdr></ncf-tag>
        <br>
        <ncf-tag value="360"></ncf-tag>
        <ncf-tag value="金融" tag-color="green"></ncf-tag>
        </ncf-tag><ncf-tag value="品牌" tag-color="black"></ncf-tag>
    </div>
</template>

<script> 
    import RedDot from '../components/badges/redDot.vue'
    import ncfTag from '../components/badges/tag.vue'
    import ncfNumber from '../components/number.vue'

    export default {
        data() {
            return {
                isVisible: false,
                val: 200
            }
        },
        mounted() {
            setTimeout(() => {
                this.isVisible = true
            }, 1000)

            setTimeout(() => {
                this.val = 1000
                setTimeout(() => {
                    this.val = 50
                }, 2000)
            }, 2000)
        },
        components: {
            RedDot,
            ncfNumber,
            ncfTag
        }
    }
</script>

<style>
   
</style>
