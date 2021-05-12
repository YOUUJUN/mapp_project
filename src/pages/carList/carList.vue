<template>
    <view>
        <uni-section title="菜单列表" type="line"></uni-section>
        <uni-list>
            <uni-list-item title="列表右侧带箭头" rightText="右侧文字" />
            <uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />
            <uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
            <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" :show-switch="true" title="列表右侧带 switch" @switchChange="switchChange" />
        </uni-list>

    </view>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                extraIcon1: {
                    color: '#007aff',
                    size: '22',
                    type: 'gear-filled'
                },

            }
        },


        created(){
            this.getListDataFromDB();
        },

        methods: {

            async getListDataFromDB(){

                let sql = `SELECT * FROM car`;

                let isOpen = this.$db.isOpenDB('netless', '_doc/netless.db');
                if(isOpen){
                    let isCarExit = await this.$db.isTableExit('netless', 'car');
                    if(isCarExit){
                        let data = await this.$db.executeSQL('netless',sql);
                        console.log('data===>',data);
                    }
                }
            },



            switchChange(e) {
                uni.showToast({
                    title: 'change:' + e.value,
                    icon: 'none'
                })
            }
        }
    }
</script>

<style>
    /* 头条小程序组件内不能引入字体 */
    /* #ifdef MP-TOUTIAO */
    @font-face {
        font-family: uniicons;
        font-weight: normal;
        font-style: normal;
        src: url('~@/static/uni.ttf') format('truetype');
    }

    /* #endif */

    /* #ifndef APP-NVUE */
    page {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: #efeff4;
        min-height: 100%;
        height: auto;
    }

    view {
        font-size: 14px;
        line-height: inherit;
    }

    .example {
        padding: 0 15px 15px;
    }

    .example-info {
        padding: 15px;
        color: #3b4144;
        background: #ffffff;
    }

    .example-body {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        font-size: 14px;
        background-color: #ffffff;
    }

    /* #endif */
    .example {
        padding: 0 15px;
    }

    .example-info {
        /* #ifndef APP-NVUE */
        display: block;
        /* #endif */
        padding: 15px;
        color: #3b4144;
        background-color: #ffffff;
        font-size: 14px;
        line-height: 20px;
    }

    .example-info-text {
        font-size: 14px;
        line-height: 20px;
        color: #3b4144;
    }


    .example-body {
        flex-direction: column;
        padding: 15px;
        background-color: #ffffff;
    }

    .word-btn-white {
        font-size: 18px;
        color: #FFFFFF;
    }

    .word-btn {
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        height: 48px;
        margin: 15px;
        background-color: #007AFF;
    }

    .word-btn--hover {
        background-color: #4ca2ff;
    }
</style>
