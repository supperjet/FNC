<template>
    <div class="ncf-code-box-wrapper ">
        <div class="ncf-code-box flex flex-h" @click="focus">
            <template>
                <span 
                    class="box-item flex flex-align-center flex-pack-center"
                    v-for="i in num"
                    :key="i"
                    :class="{'is-active': (i === code.length+1) && focused }"
                >
                    <template v-if="code.charAt(i-1)">
                        <template v-if="mask">
                            <i class="md-codebox-dot">.</i>
                        </template>
                        <template v-else>
                            {{code.charAt(i-1)}}
                        </template>
                    </template>
                    <template v-if="i === code.length + 1 && focused">
                        <i class="md-codebox-blink"></i>
                    </template>
                </span>
            </template>
        </div>
        <template v-if="kbstyle == 'powerful'">
            <ncf-keyboard 
                ref="codeboxkb" 
                mode="powerful" 
                :disorder="disorder" 
                @enter="modifyCode" 
                @delete="modifyCode" 
                @confirm="confirmCode"
            ></ncf-keyboard>
        </template>
        <template v-else>
            <ncf-keyboard 
                ref="codeboxkb" 
                @enter="modifyCode" 
                @delete="modifyCode"
            ></ncf-keyboard>
        </template>
    </div>
</template>

<script>
    import NcfKeyboard from './keyboard.vue'

    const COMPONENT_NAME = 'code-box'

    export default {
        name: COMPONENT_NAME,
        props: {
            value: {
                type: String,
                default: ''
            },
            num: {
                type: Number | String,
                default: 4
            },
            mask: {
                type: Boolean,
                default: false
            },
            autoFocus: {
                type: Boolean,
                default: true
            },
            mode: {
                type: String,
                default: ''
            },
            disorder: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                code: '',
                focused: this.autoFocus,
                kbstyle: this.mode
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.code = newVal
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.focused && this.$refs.codeboxkb.show()
            })
        },
        methods: {
            focus() {
                if(!this.focused) {
                    this.focused = true
                    this.$refs.codeboxkb.show()
                }
            },
            modifyCode(code) {
                if(this.code.length < this.num) {
                    this.code = code 
                    console.log(code)
                }
            },
            confirmCode(code) {
                console.log(code)
            }
        },
        components: {
            NcfKeyboard
        }
    }
</script>

<style>
    @import '../common/common.css';

    .ncf-code-box-wrapper {
       
    }
    .ncf-code-box .box-item{
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        text-align: center;
    }
    .ncf-code-box .box-item:not(:first-child){
         border-left: none;
    }
    .md-codebox-blink {
        height: 20px;
        width: 1px;
        background-color: red;
        animation: flash steps(2) 1s infinite;
    }

    @keyframes flash {
        from{ opacity: 0}
        to{ opacity: 1}
    }
      
</style>
