<template>
	<view class="commondity" :style="`flex-wrap:${wrap}`" v-if="list.commodityList">
		<view class="commondity-item" :style="`width:${size}rpx`" v-for="item in list.commodityList.data" :key="item.id">
			<image class="commondity-img" :style="`height:${size}rpx`" :src="item.imgUrl"></image>
			<view class="commodity-content">
				<text class="item-title">{{ item.title }}</text>
				<view class="item-price">
					<text class="nprice">￥{{ item.price }}</text>
					<text class="oprice">￥{{ item.oprice }}</text>
				</view>
				<text class="discount">{{ item.discount }}折</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onReady } from '@dcloudio/uni-app';
import {watch,ref,inject} from 'vue';
const props = defineProps({
	size: {
		type: String,
		default: '375'
	},
	wrap: {
		type: String,
		default: 'wrap'
	}
});
const list = inject('list');
</script>

<style lang="less" scoped>
.commondity {
	display: flex;
	text-align: center;
	padding-top: 20rpx;
	.commondity-item {
		// width: 375rpx;
		box-sizing: border-box;
		padding: 10rpx;
		.commondity-img {
			width: 100%;
			// height: 375rpx;
			border-radius: 10rpx;
		}
		.commodity-content {
			.item-title {
				overflow: hidden;
				display: -webkit-box;
				// white-space: nowrap;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-break: break-all;
				padding: 5rpx 10rpx;
				text-overflow: ellipsis;
			}
			.item-price {
				.oprice {
					padding-left: 10rpx;
					text-decoration: line-through;
					font-size: 24rpx;
					color: #999;
				}
			}
			.discount {
				font-size: 20rpx;
				font-weight: bold;
				border-radius: 6rpx;
				border: 4rpx solid #2e89d0;
				padding: 2rpx 10rpx;
				color: #2e89d0;
			}
		}
	}
}
</style>
