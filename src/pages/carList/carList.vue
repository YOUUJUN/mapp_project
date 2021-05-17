<template>
    <view>

        <view class="uni-padding-wrap uni-common-mt">

            <uni-section title="车辆列表" type="line"></uni-section>
            <uni-list>

<!--                <uni-list-item title="列表右侧带箭头" rightText="右侧文字" />-->
<!--                <uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />-->
<!--                <uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />-->
<!--                <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" :show-switch="true" title="列表右侧带 switch" @switchChange="switchChange" />-->

                <template v-for="item of carListData">

                    <uni-swipe-action>
                        <uni-swipe-action-item :right-options="options">
                            <uni-list-item>
                                <template v-slot:header="" style="display: flex;flex-direction: column;">
                                    <div>
                                        <div><span>车牌号：</span><span style="">{{item.car_no}}</span></div>
                                        <div style="color:#999;font-size: 24rpx;margin-top: 10rpx;"><span>录入时间：</span><span style="">{{item.in_date}}</span></div>
                                    </div>
                                </template>
                                <template v-slot:footer="" style="display: flex;flex-direction: column; justify-content: space-around;">
                                    <div>
                                        <div style="color:#999;font-size: 24rpx;margin-top: 10rpx;"><span>车型：</span><span>{{item.car_kind}}</span></div>
                                        <uni-badge class="" text="车辆录入" type="error" :customStyle="badgeStyle"/>
                                    </div>
                                </template>
                            </uni-list-item>
                        </uni-swipe-action-item>
                    </uni-swipe-action>

                </template>
            </uni-list>

<!--            <view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>-->

            <u-loadmore v-if="showLoadMore" status="loading" :loadText="{loading: '正在加载...'}" icon-type="circle" :is-dot="false" marginTop="14" marginBottom="14"/>

        </view>

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

                badgeStyle : {
                    width : '60px',
                    marginTop : '10rpx'
                },

                carListData : [],

                options:[
                    {
                        text: '删除',
                        style: {
                            backgroundColor: '#dd524d'
                        }
                    }
                ],

                data: [],
                showLoadMore: false,
                loadMoreText: '加载中...',




                status: 'loadmore',
                iconType: 'circle',
                isDot: false,
                loadText: {
                    loadmore: '点击或上拉加载更多',
                    loading: '正在加载...',
                    nomore: '没有更多了'
                },
                current: 0
            }
        },

        onLoad() {
            this.getListDataFromDB();
        },
        onUnload() {
            this.showLoadMore = false;
        },

        onPullDownRefresh() {
            console.log('onPullDownRefresh');
            this.getListDataFromDB();
        },


        onReachBottom() {
            console.log("onReachBottom");
            this.showLoadMore = true;
            setTimeout(() => {
                this.getListDataFromDB();
            }, 300);
        },


        created(){
            // this.getListDataFromDB();
        },

        methods: {

            async getListDataFromDB(){

                let result = await this.$db.selectData('netless', 'car');
                console.log('result',result);
                for(let item of result.data){
                    let obj = {
                        car_no : item.CAR_NO,
                        in_date : item.IN_DATE,
                        car_kind : item.CAR_KIND
                    };
                    this.carListData.push(obj);
                }

                uni.stopPullDownRefresh();
            },

            switchChange(e) {
                uni.showToast({
                    title: 'change:' + e.value,
                    icon: 'none'
                })
            },


            createTitle(item){
                let car_no = item.car_no;
                let title = `<span style="color:red">${car_no}</span>`;
                return title;
            },

            //创建列表详细信息
            createLeftNote(item){
                let in_date = item.in_date;

                let note = `回收时间：${in_date}
                `;
                return note;
            },

            createRightNote(item){
                let car_kind = item.car_kind;

                let note = `车型：${car_kind}`;
                return note;
            },




            //下拉刷新
            initData(){
                setTimeout(() => {
                    uni.stopPullDownRefresh();
                }, 300);
            },
            setListData() {

            }


        }
    }
</script>

<style>
    .text {
        margin: 16rpx 0;
        width:100%;
        background-color: #fff;
        height: 120rpx;
        line-height: 120rpx;
        text-align: center;
        color: #555;
        border-radius: 8rpx;
    }
</style>


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


    .cont {
        flex: 1;
        height: 45px;
        line-height: 45px;
        padding: 0 15px;
        position: relative;
        background-color: #fff;
        font-size: 15px;
        border-bottom-color: #F5F5F5;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    .example-body {
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: row;
        justify-content: center;
        padding: 10px 0;
        background-color: #fff;
    }

    .button {
        border-color: #e5e5e5;
        border-style: solid;
        border-width: 1px;
        padding: 4px 8px;
        border-radius: 4px;
    }

    .button-text {
        font-size: 15px;
    }
</style>
