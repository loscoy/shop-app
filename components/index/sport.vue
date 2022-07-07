<template>
	<view class="sport">
		<banner></banner>
		<sportIcon text='运动热门'></sportIcon>
		<card title='超级大牌'></card>
		<sportIcon :isFill="true"></sportIcon>
		<card title='热销爆品'></card>
		<Commondity size='250'></Commondity>
		<card title='推荐店铺'></card>
		<Shop ></Shop>
		
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	
	import banner from '@/components/index/sport/banner.vue';
	import sportIcon from '@/components/index/sport/sportIcon.vue';
	import Card from '@/components/common/Card.vue';
	import Commondity from '@/components/common/Commondity.vue';
	import Shop from '@/components/index/sport/shop.vue';

</script>

<style lang="less" scoped>

</style>
