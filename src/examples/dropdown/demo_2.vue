<template>
    <div class="dropdown">
        <div class="demo_2">
            <div class="drop">
                <drop-nav-bar
                    :items="items"
                    :active-index="activeIndex"
                    @menu-bar-item-click="itemClick"
                >
                </drop-nav-bar>
                <drop-container :active-index="activeIndex" @mask-click="hideContainer">
                    <drop-container-item index="0">
                        this is page 1 <br>
                        this is page 1 <br>
                        this is page 1 <br>
                    </drop-container-item>
                    <drop-container-item index="1">
                        this is page 2 <br>
                        this is page 1 <br>
                        this is page 1 <br>
                        this is page 1 <br>
                    </drop-container-item>
                    <drop-container-item index="2">
                        this is page 3
                    </drop-container-item>
                </drop-container>
            </div>
            <div class="ctn">
                <h1>drop content</h1>
                <ul>
                    <li v-for="i in 30" :key="i">{{i}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import dropNavBar from  '../../components/dropdown/menu-bar.vue'
    import dropContainer from '../../components/dropdown/drop/drop-container.vue'
    import dropContainerItem from '../../components/dropdown/drop/drop-container-item.vue'

    export default {
        props: {

        },
        data() {
            return {
                items: ['区域','价格','分享'],
                activeIndex: -1
            }
        },
        methods: {
            itemClick(index) {
                this.activeIndex = index
            },
            hideContainer() {
                this.activeIndex = -1
            }
        },
        components: {
            dropNavBar,
            dropContainer,
            dropContainerItem
        }
    }
</script>

<style scoped>
    .dropdown{
        position: fixed;
        top:0; bottom:0; right:0; left:0;
        background: #000;
        overflow: auto;
    }
    .demo_2{
        position: relative;
        top: 100px; 
        height: 500px;
        overflow: auto;
        background: #fff;
    }
    .ctn{
       position: absolute;
       left: 0; right:0;
       height: 456px;
       overflow: auto;
       background: #fff;
    }
</style>
