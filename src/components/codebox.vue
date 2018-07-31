<template>
    <div class="ncf-code-box-wrapper ">
        <div class="ncf-code-box flex flex-h" @click="focus">
            <template>
                <span 
                    class="box-item flex flex-align-center flex-pack-center"
                    v-for="i in (+num)"
                    :key="i"
                    :class="{'is-active': (i === code.length+1) && focused }"
                >
                    <template v-if="code.charAt(i-1)">
                        <template v-if="mask">
                            <i class="md-codebox-dot"></i>
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
        <ncf-keyboard ref="codeboxkb" @enter="modifyCode" @delete="modifyCode"></ncf-keyboard>
    </div>
</template>

<script>
    import NcfKeyboard from './keyboard.vue'

    const COMPONENT_NAME = 'code-box'
    const EVENTS = {
        INPUT_DONE: 'input-done'
    }

    export default {
        name: COMPONENT_NAME,
        props: {
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
            }
        },
        data() {
            return {
                code: '',
                focused: this.autoFocus
            }
        },
        watch: {
            code(newVal, oldVal) {
                if(newVal.length == this.num) {
                    this.$refs.codeboxkb.hide();
                    this.$emit(EVENTS.INPUT_DONE, newVal)
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
                this.focused = !this.focused
                if(this.code.length < this.num) {
                    this.$refs.codeboxkb.show()
                }
            },
            modifyCode(code) {
                if(this.code.length < this.num) {
                    this.code = code 
                }
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
        width: 35px;
        height: 35px;
        color: #333;
        border: 1px solid #333;
        text-align: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    .ncf-code-box .box-item:not(:first-child) {
        border-left: none;
    }
    .ncf-code-box .box-item .md-codebox-dot {
        width: 10px;
        height: 10px;
        background: #000;
        border-radius: 100%;
    }
    .md-codebox-blink {
        height: 20px;
        width: 1px;
        background-color: #ed4e39;
        animation: flash steps(2) 1s infinite;
    }
    @keyframes flash {
        from{ opacity: 0}
        to{ opacity: 1}
    }
</style>
