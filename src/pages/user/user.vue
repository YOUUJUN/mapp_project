<template>
    <view class="root">

        <view class="log-wrap">

            <view class="log">
                <u-avatar class="avatar-img" src="/static/judy.jpg" :size="140" shape="circle"></u-avatar>
                <text class="nickname">YOUJUN</text>
            </view>

        </view>
        <view class="user-wrap shadow-warp bg-white" style="margin-top:-40px;">
            <text class="user-title">我的订单</text>

            <view class="user">

                <view class="item">
                    <image class="item-icon" src="/static/pop.png"></image>
                    <text class="item-title">我的车辆</text>
                </view>

                <view class="item">
                    <image class="item-icon" src="/static/pop.png"></image>
                    <text class="item-title">我的车辆</text>
                </view>

                <view class="item">
                    <image class="item-icon" src="/static/pop.png"></image>
                    <text class="item-title">我的车辆</text>
                </view>

            </view>
        </view>

        <view class="service-wrap shadow-warp bg-white">
            <text class="user-title">我的服务</text>

            <view class="user">

                <view class="item">
                    <image class="item-icon" src="/static/pop.png"></image>
                    <text class="item-title">我的车辆</text>
                </view>

                <view class="item">
                    <image class="item-icon" src="/static/pop.png"></image>
                    <text class="item-title">我的车辆</text>
                </view>

                <view class="item">
                    <image class="item-icon" src="/static/pop.png"></image>
                    <text class="item-title">我的车辆</text>
                </view>

            </view>
        </view>

        <button class="cu-btn bg-red margin-tb-sm lg panel-btn">退出登录</button>


    </view>
</template>

<script>
    export default {
        data() {
            return {
                src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
            }
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style scoped>
    page{
        background-color: #f7f8fa;
    }

    .log-wrap{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height:450rpx;
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    }

    .log{
        display: flex;
        flex-direction: row;
        margin-left: 28px;
        margin-bottom: 70px;
    }

    ::v-deep .u-avatar__img{
        border: 3rpx solid #fff;
        border-radius: 50%;
        -webkit-box-shadow: 0 3rpx 13rpx 0 rgba(0,0,0,.15);
        box-shadow: 0 5rpx 13rpx 0 rgba(0,0,0,.15);
    }

    .nickname{
        font-size: 18px;
        color: #fff;
        margin-left: 12px;
        margin-top: 10px;
    }

    .bgImg{
        height: 500rpx;
        width: 100%;
    }

    /*---*/
    .user-wrap{
        margin: 10px;
        background: #fff;
        padding: 7px 10px 20px 10px;
        border-radius: 6px;
    }

    .user-title{
        font-weight: 600;
        font-size: 16px;
        display: inline-block;
        margin-bottom: 10px;
    }

    .user{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .user .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .item-icon{
        width:90rpx;
        height: 90rpx;
        margin-bottom:6px;
    }

    .item-title{
        font-size: 12px;
        color:rgba(0,0,0,0.7)
    }

    /*--服务功能---*/
    .service-wrap{
        margin: 10px;
        background: #fff;
        padding: 7px 10px 20px 10px;
        border-radius: 6px;
        margin-top:18px;
    }


    /*---退出---*/
    .panel-btn{
        display: flex;
        margin:18px 10px;
    }    



</style>
