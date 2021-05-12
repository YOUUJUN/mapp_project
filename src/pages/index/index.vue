<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-grid :col="col" @click="click" v-if="!isSwiper" :border="border">
					<u-grid-item name="item1" :index="0" @click="itemClick">
						<u-badge count="9" :offset="[col == 3 ? 20 : 14, col == 3 ? 30 : 20]"></u-badge>
						<u-icon name="photo" :size="46"></u-icon>
						<view class="grid-text">车辆录入</view>
					</u-grid-item>
					<u-grid-item :index="1"  @click="itemClick">
						<u-icon name="lock" :size="46"></u-icon>
						<view class="grid-text">车辆列表</view>
					</u-grid-item>
					<u-grid-item :index="2">
						<image src="https://cdn.uviewui.com/uview/grid/hot5.png" :style="{
							top: col == 3 ? '14rpx' : '8rpx',
							right: col == 3 ? '40rpx' : '28rpx'
						}" style="width: 34rpx;height: 34rpx;" class="badge-icon" mode="widthFix"></image>
						<u-icon name="hourglass" :size="46"></u-icon>
						<view class="grid-text">车辆上传</view>
					</u-grid-item>

<!--					<u-grid-item :index="3">-->
<!--						<u-icon name="home" :size="46"></u-icon>-->
<!--						<view class="grid-text">首页</view>-->
<!--					</u-grid-item>-->
<!--					<u-grid-item :index="4">-->
<!--						<u-icon name="star" :size="46"></u-icon>-->
<!--						<view class="grid-text">星星</view>-->
<!--					</u-grid-item>-->
<!--					<u-grid-item :index="5">-->
<!--						<u-icon name="volume-up" :size="46"></u-icon>-->
<!--						<view class="grid-text">音量</view>-->
<!--					</u-grid-item>-->
<!--					<u-grid-item :index="6">-->
<!--						<image src="https://cdn.uviewui.com/uview/grid/hot6.png" style="width: 44rpx;height: 44rpx;top:0;right:0;" class="badge-icon"></image>-->
<!--						<u-icon name="trash" :size="46"></u-icon>-->
<!--						<view class="grid-text">回收站</view>-->
<!--					</u-grid-item>-->
<!--					<u-grid-item :index="7">-->
<!--						<u-icon name="rewind-right" :size="46"></u-icon>-->
<!--						<view class="grid-text">快进</view>-->
<!--					</u-grid-item>-->
<!--					<u-grid-item :index="8">-->
<!--						<u-icon name="shopping-cart" :size="46"></u-icon>-->
<!--						<view class="grid-text">购物车</view>-->
<!--					</u-grid-item>-->

				</u-grid>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSwiper: false,
				current: 0,
				border: true,
				col: 3
			};
		},
		methods: {

			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}宫格`,
					type: 'warning'
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
			// 针对单个grid-item的事件
			itemClick(index) {
				console.log(index);
				let url = "";
				switch(index){
					case 0:
						url = "/pages/post/post";
					break;
					case 1:
						url = "/pages/carList/carList";
					break;
				}

				uni.navigateTo({
					url: url,
					success : result => {
						console.log('result', result);
					},
					fail : msg =>{
						console.log('msg', msg);
					}
				});

			}
		}
	};
</script>

<style scoped lang="scss">
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.badge-icon {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
	}

	.swiper {
		height: 480rpx;
	}

	.indicator-dots {
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.indicator-dots-item {
		background-color: $u-tips-color;
		height: 6px;
		width: 6px;
		border-radius: 10px;
		margin: 0 3px;
	}

	.indicator-dots-active {
		background-color: $u-type-primary;
	}
</style>
