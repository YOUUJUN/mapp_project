<template>
    <view class="container">

        <view class="status_bar"></view>

        <u-dropdown :close-on-click-mask="true" ref="uDropdown" activeColor="#2979ff" :borderBottom="false">
            <u-dropdown-item @change="" v-model="value1" title="搜索条件" :options="options1"></u-dropdown-item>
            <u-dropdown-item @change="" v-model="value2" title="业务员" :options="options2"></u-dropdown-item>
<!--            <u-dropdown-item title="属性">-->
<!--                &lt;!&ndash;                    <view class="slot-content">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <view class="item-box">&ndash;&gt;-->
<!--                &lt;!&ndash;                            <view class="item" :class="[item.active ? 'active' : '']" @tap="" v-for="(item, index) in list" :key="index">&ndash;&gt;-->
<!--                &lt;!&ndash;                                {{item.label}}&ndash;&gt;-->
<!--                &lt;!&ndash;                            </view>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </view>&ndash;&gt;-->
<!--                &lt;!&ndash;                        <u-button type="primary" @click="">确定</u-button>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </view>&ndash;&gt;-->
<!--            </u-dropdown-item>-->
        </u-dropdown>


        <view>

            <uni-list>

<!--                <uni-list-item title="列表右侧带箭头" rightText="右侧文字" />-->
<!--                <uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />-->
<!--                <uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />-->
<!--                <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" :show-switch="true" title="列表右侧带 switch" @switchChange="switchChange" />-->

<!--                <u-sticky :offset-top="150" :enable="true" @fixed="" @unfixed="">-->
<!--                    <view class="sticky">-->
<!--                        宝剑锋从磨砺出,梅花香自苦寒来-->
<!--                    </view>-->
<!--                </u-sticky>-->


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

                showLoadMore: false,

                barHeight : '24',


                //下拉栏
                value1: '',
                value2: '2',
                options1: [
                    {
                        label: '按车牌号',
                        value: 1,
                    },
                    {
                        label: '按回收单号',
                        value: 2,
                    }
                ],
                options2: [
                    {
                        label: '所有',
                        value: 1,
                    },
                    {
                        label: 'YOUJUN',
                        value: 2,
                    },
                    {
                        label: '张三',
                        value: 3,
                    },
                    {
                        label: '柯涵',
                        value: 4,
                    }
                ]

            }
        },

        onReady(){
            this.barHeight = plus.navigator.getStatusbarHeight();
            console.log('barHeight',this.barHeight);
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

            },



            //下拉栏

            /**
             *  点击导航栏 buttons 时触发
             */
            onNavigationBarButtonTap() {
                uni.showModal({
                    title: '提示',
                    content: '点击确定，修改输入框的内容为abc',
                    success: res => {
                        if (res.confirm) {
                            const currentWebview = this.$mp.page.$getAppWebview();
                            currentWebview.setTitleNViewSearchInputText("abc");
                        }
                    }
                });
            }


        }
    }
</script>

<style>
    /*填充导航栏*/
    .status_bar {
        height: calc(var(--status-bar-height) + 38px);
        width: 100%;
        background-color: #F8F8F8;
    }



</style>


<style>
    .sticky {
        background-color: #007aff;
        color: #fff;
        padding: 24rpx;
        margin: auto;
        font-size: 28rpx;
        line-height: 1;
        border-radius: 5px;
    }
</style>
