<template>
	<view class="index">
		<!-- 微信小程序头部 -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav nav">
			<view class="icon-left iconfont icon-sousuo"></view>
			<text>百年奥莱</text>
			<view class="icon-right iconfont icon-pinglun-"></view>
		</view>
		<!-- #endif -->
		<!-- app头部 -->
		<!-- #ifdef APP -->
		<view class="app-nav nav">
			<view class="icon-left iconfont icon-sousuo"></view>
			<text>百年奥莱</text>
			<view class="icon-right iconfont icon-pinglun-"></view>
		</view>
		<!-- #endif -->
		<navBar :current.sync="pageIndex" :navBarList="navBarList" :currentId="currentId"></navBar>
			<swiper @change="changePage" :current="pageIndex" :style="`height:${containerHeight}px`">
				<swiper-item class="item" v-for="(item, index) in navBarList" :key="index">
					<view class="container">
						<recommend v-show="pageIndex === 0"></recommend>
						<sport v-show="pageIndex === 1"></sport>
					</view>
				</swiper-item>
			</swiper>
		
		<!-- <unicloud-db v-slot:default=""></unicloud-db> -->
		<!-- <recommend :list="list"></recommend>
		<sport :list="list"></sport> -->
	</view>
</template>

<script setup>
import { ref, reactive, watch, provide,nextTick } from 'vue';
import { onInit, onReady } from '@dcloudio/uni-app';
import recommend from '@/components/index/recommend.vue';
import sport from '@/components/index/sport.vue';
import navBar from '@/components/index/navBar.vue';
import { getData } from '@/Api/shopApi.js';

const navBarList = reactive(['推荐', '运动户外', '服饰内衣', '鞋靴箱包', '美妆个护', '家居数码', '食品母婴']);
const pageIndex = ref(0);
const currentId = ref('v0');
const containerHeight = ref(0);
const shopData = ref({});

onInit(() => {
	// request();
});
onReady(() => {
	uni.$on('index', index => {
		pageIndex.value = index;
		currentId.value = `v${index}`;
	});
	Data();
	// getContainer();
});
watch([shopData,pageIndex], nval => {
	nextTick(getContainer);
});
provide('list', shopData);
const Data = async () => {
	const db = uniCloud.database();
	let res = await db.collection('Aolai').get();
	shopData.value = res.result.data[0].data;
};
const request = () => {
	getData().then(res => {
		shopData.value = res.data;
	});
};
const getContainer = () => {
	//获取显示内容高度
	let container = uni.createSelectorQuery().select('.container');
	container
		.boundingClientRect(data => {
			containerHeight.value = data.height;
		})
		.exec();
};
const changePage = e => {
	pageIndex.value = e.detail.current;
};
</script>

<style lang="less" scoped>
.index {
	.nav {
		position: sticky;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0.75);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		top: 0;
		padding-bottom: 20rpx;
		backdrop-filter: blur(40rpx) saturate(180%);
		.icon-left {
			margin-left: 10px;
			font-size: 40rpx;
		}
		.icon-right {
			margin-right: 10px;
			font-size: 40rpx;
		}
	}
	.wx-nav {
		height: 230rpx;
	}
	.app-nav {
		height: 140rpx;
	}
}
</style>
