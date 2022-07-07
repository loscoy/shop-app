<template>
	<view class="navBar">
		<scroll-view class="navList" scroll-x="true" :scroll-into-view="currentId">
			<view
				v-for="(item, index) in navBarList"
				:id="`v${index}`"
				:key="index"
				@tap="changeIndex(index)"
				:class="current === index ? 'active' : ''"
			>
				{{ item }}
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const props = defineProps(['current', 'navBarList','currentId']);

const changeIndex = index => {
	uni.$emit('index', index);
};
</script>

<style lang="less" scoped>
.navBar {
	height: 100rpx;
	line-height: 80rpx;
	font-size: 40rpx;
	.navList {
		white-space: nowrap;
		.active {
			position: relative;
			color: #49bdfb;
			transition: all 0.3s;
			&::after {
				content: '';
				position: absolute;
				width: 80%;
				height: 6rpx;
				left: 10%;
				bottom: 10rpx;
				background-color: #49bdfb;
			}
		}
		view {
			padding: 10rpx 10rpx;
			display: inline-block;
		}
	}
}
</style>
