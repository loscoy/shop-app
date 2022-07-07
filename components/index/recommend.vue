<template>
	<view class="recommend">
		<index-swiper></index-swiper>
		<recommend></recommend>
		<card></card>
		<Commondity size='375'></Commondity>
	</view>
</template>

<script setup>
	import indexSwiper from '@/components/index/recommend/indexSwiper.vue';
	import recommend from '@/components/index/recommend/recommend.vue';
	import Card from '@/components/common/Card.vue';
	import Commondity from '@/components/common/Commondity.vue';
</script>

<style lang="less" scoped>

</style>
