<template>
	<view class="shop">
		<view class="shop-item">
			<image class="title-img" src="../../../static/images/test.jpg"></image>
			<scroll-view class="scroll" scroll-x="true"><Commondity size="250" wrap="no-wrap"></Commondity></scroll-view>
		</view>
	</view>
</template>

<script setup>
import Commondity from '@/components/common/Commondity.vue';
</script>

<style lang="less" scoped>
.shop {
	.shop-item {
		.title-img {
			width: 100%;
		}
		.scroll {
			white-space: nowrap;
			overflow-x: auto;
			.scroll-item {
				display: inline-block;
			}
		}
	}
}
</style>
