<template>
	<view class="sportIcon">
		<view class="icon" v-for="i in 8" :key="i">
			<image :class="[isFill ? 'fill' : 'notFill']" src="../../../static/images/tabbar/menu-fill.png"></image>
			<view v-if="text !== ''" class="text">{{ text }}</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	isFill: {
		type: Boolean,
		default: false
	},
	text: {
		type: String,
		default: ''
	}
});
</script>

<style lang="less" scoped>
.sportIcon {
	display: flex;
	flex-wrap: wrap;
	.icon {
		width: 187rpx;
		heigth: 187rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10rpx 0;
		position: relative;
		.notFill {
			width: 120rpx;
			height: 120rpx;
		}
		.fill {
			width: 187rpx;
			height: 187rpx;
		}
		.text {
			font-size: 24rpx;
		}
	}
}

</style>
