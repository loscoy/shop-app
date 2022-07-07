<template>
	<view class="Card">
		<header class="header">
			<view>-</view>
			<view>{{ title }}</view>
			<view>-</view>
		</header>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	title: {
		type: String,
		default: '猜你喜欢'
	}
});
</script>

<style lang="less" scoped>
.Card {
	padding-top: 20rpx;
	.header {
		display: flex;
		justify-content: center;
		font-size: 36rpx;
		font-weight: bold;
		view {
			padding: 0 10rpx;
		}
	}
}
</style>
