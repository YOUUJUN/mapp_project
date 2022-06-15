<template>
    <view class="root">

        <view class="avatar-wrap">

        </view>
        <view class="user-wrap" style="margin-top:-15px;">
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

        <view class="user-wrap">
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

        <button class="cu-btn bg-red margin-tb-sm lg panel-btn">退出登录</button>


    </view>
</template>

<script>
    export default {
        data() {
            
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style scoped>
    page{
        background-color: #ededed;
    }

    .avatar-wrap{
        display: flex;
        height:500rpx;
        background-image: url('/static/judy.jpg');
    }

    .bgImg{
        height: 500rpx;
        width: 100%;
    }

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
        display: flex;
        margin:10px;
    }


    /*---退出---*/
    .panel-btn{
        display: flex;
        margin:10px 10px;
    }    
</style>
