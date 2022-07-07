<template>
	<view class="recommend">
		<view class="recommend-card">
			<view class="top">
				<image class="top-image" :src="list.bigImg"></image>
			</view>
			<view class="bottom" >
				<image class="bottom-image" v-for="item in list.data" :key="item" :src="item.imgUrl"></image>
			</view>
		</view>
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
	const res = await db.collection('Aolai').where('_id=="62c63dc10d08220001d296cf"').get();
	list.value = res.result.data[0].Children;
};
</script>

<style lang="less" scoped>
.recommend{
	padding: 20rpx;
	background-color: skyblue;
	.recommend-card{
		overflow: hidden;
		border-radius: 10px;
		border: 1px solid #ccc;
		box-shadow: 0 0 20px #ccc;
		.top-image{
			width: 100%;
			height: 300rpx;
		}
		.bottom{
			.bottom-image{
				width: 33.33%;
				height:230rpx;
			}
		}
	}
}
</style>
