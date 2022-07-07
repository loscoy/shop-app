<template>
	<view class="indexSwiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in list" :key="index">
				<view class="swiper-item"><image class="swiper-images" :src="item.imgUrl"></image></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onReady } from '@dcloudio/uni-app';

const list = ref({});

onReady(()=>{
	getData();
});

const getData = async () =>{
	const db = uniCloud.database();
	const res = await db.collection('Aolai').where('_id=="62c575def17d0200011bd94c"').get();
	list.value = res.result.data[0].swiperList.data;
	console.log(list.value);
};
</script>

<style lang="less" scoped>
.indexSwiper {
	swiper {
		height: 400rpx;
		width: 100%;
		.swiper-images {
			width: 100%;
			height: 400rpx;
		}
	}
}
</style>
