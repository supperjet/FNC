<template>
  <div class="layout">
    <cell class="cell-item">
      <div slot="content">
        默认样式
      </div>
    </cell>
    <br>
    <cell class="cell-item" iconShow >
      <div slot="content">带图标</div>
      <div slot="pic" class="pic"></div>
    </cell>
    <br>
    <cell class="cell-item" :labelShow="false">
      <div slot="content">
        不带图标
      </div>
    </cell>
    <br>
    <cell needBorderBtm>
      <div slot="content">
        带底部边框
      </div>
    </cell>
    <cell :tipShow="true">
      <div slot="content">
        带箭头注释内容
      </div>
    </cell>
    <br>
     <cell class="cell-item" disabled>
      <div slot="content">
        禁用
      </div>
    </cell>
    <button type="button" name="button" @click="back" class="btn btn-blue">返回上一层</button>
  </div>
</template>
<script>
import Cell from '../components/cell.vue'

export default {
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
  },
  components: {
    Cell
  }
}
</script>
<style scoped>
  .layout{
    /* position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0; */
    background: #f3f3f3;
    padding-top: 20px;
  }
  .cell-item {
     margin-bottom: 10px;
  }
  .btn-blue{
    text-align: center;
    background: #49f;
    width: 100%;
    border: none;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    outline: none;
  }
  .pic {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAAGWB6gOAAAAAXNSR0IArs4c6QAABRxJREFUWAndWF1MY0UUnpYGsgkBhWSXoizgE1HEVRKfXGLESHxZAy9GH4hr+DMFbbqJPBHAR402QAl/m+oTjRsC7gsGDUazJhrFjVJ54QWouzT1YX9CjPy19fsuPTe37b3sbWETs5PcnplzznznzJyZMzNVyqx0d3fPkt/V1ZUU6kwmk2+xMT097SBlcR2Ro9+dnZ1kcXGx0qVkAyoOMnGkktOvjgOMtdLS0qfTeotvD2Q6MzUdDsegsRflTiOD9ampqY9IIUzs7u7usO7o6+t7cm9v7y82jAXKanl5WTU3NxvZOdQxRF+mOh3/PpMp7d7e3lqtDqVSYVrRrNGZKabFUhTg17LX6z07Pz9/9+Dg4FVTJCrEYrF6KF/c3t7eI9I9+CUgGg2FQmp4eFjn6dHVOagMDQ0VEoE84zoz6uRV16zBv1lZxUTBQvgWoXuNdbibRPsK2p9JmzRVokVFRS+OjY3dclARzMfg3n2RCoWBIAxcZruysrIAw0mITCj7c2gCJPy8KIEkbqYemaF6PJ5nDg8Pr0F2Ht9VeOylngCxfmwhABZDOBAIOLa2tlR1dbUKh8NeRI5zGuciiTqdzqpjUSCEFz+Pjo7+gz2lysvL1eLioqqtrVUtLS0KXpkuNktMTuxvKOiol56enhiCErDs9IgLMHZfasE+cKSuVHb7BZpu0bbahAC9Dp1Looewh7B13mbbxRRZWFj4FNbHhihYURh4wyiDxz/gmyWYFn8zEOwrHkefsiOUg0YAqUN+CZ92ZFkuJG5QbTPiSIDFd6WzFT3dTWs1uVbWhY/JZ8q/x7btTSudMV9+1DvwRTA/+pBtA0mOxq6/4fP51MbGRsLv9/8kBiwnWxSERqPRf+HNzaampotIr8Xg1yMIWqpmirENhGE4X0Cpq6tTAwMDTB2KKaW9vZ0p5pptIPEM3mhJraqqShUUFKiGhgbm8fOcozt29xPBeB1yuVwaZXtkZORXEH2uyDu2YH4CTGIYkl6Y5MQJ01PUCpFgQPGIHJs24Xa7zyCi+8J79GhOU5Q5fMz9O4lE4nPycaJdnpyc/CJTJ9d2zsvRaADxK5O2sS68fKhk/j/QWQc3A8KC0S9MZnIzHhbdV3A0Lcmb6N3BnnuOFyzKmGa3Qd2Y8mcx5X+adMhiIVQfIlRvwslzMPgEFVC/jXoMOF8C5+OsTiYM4NQDJwxRFBm6kirc+NqZCEHW7Z8KZoUGYfwTAI5A3pfSmUeO+wCO8RZpqxhs6uey7WydaSFl+H3w+WkFDkk1b2p0KOvunzfqCToaHbJ9NT6BvbSuxhNaBEaHhHcqlAcyzlI+W97DejNNLwh7ArI0ew/FIZ4xeAd4sOP+7uzs/J3ncprVVANn2OrMzMwFOsU+WIO9pp6bdbbLA7AfBjw1NTU3JiYmztKZSCSi+vv7FR8uq6uranBwUOGfC9XY2HgBO1ZVVFTwAuFh31N3CI530Hncm54nXVpaUgsLC3wsqvHxcTU3N6fKyspUMBhUa2trVKGuRvHT4UQcQ6nWdf0vABHnRyPshkvcJimeddrVidcn5B0Vj8f1Nuss6+vr2tUT1Yh2uPLhsL+/z2T3Mph6kkL9RKWtrU17CgoIw1VSUqIQTmGplZWVMNZRPfMabloNJzrtddSMSmqHfY0BvgJREg782Nra+jjeqjVoa7OHMN7d3Nx8CU344vgOF6vXebF6KA7RqJTUc57riv9k8EnPwrB+gxm5inV1tJA09v/w5z+uOVkb58GlYQAAAABJRU5ErkJggg==)
  }
</style>
