<template>
<main class="snap-y snap-mandatory h-screen">
	<div class="mx-[300px] pb-[800px]">
	<swiper
			:spaceBetween="90"
			:centeredSlides="true"
			:autoplay="{
					delay: 2000,
					disableOnInteraction: false,
			}"
			:pagination="{
					clickable: true,
			}"
			:navigation="true"
			:modules="modules"
			class="mySwiper"
	>
			<swiper-slide>
					<img
							className="object-fill w-full h-[380px]"
							src='https://pbs.twimg.com/media/FUHPcLjXEAApM9p?format=jpg&name=small'
							alt="image slide 1"
					/>
			</swiper-slide>
			<swiper-slide>
					<img
							className="object-fill w-full h-[380px]"
							src='https://pbs.twimg.com/media/FS6PT1FWIAMnj2_?format=jpg&name=small'
							alt="image slide 2"
					/>
			</swiper-slide>
			<swiper-slide>
					<img
							className="object-fill w-full h-[380px]"
							src='https://pbs.twimg.com/media/FT3135kWUAAJ2pq?format=jpg&name=small'
							alt="image slide 3"
					/>
			</swiper-slide>
			<swiper-slide>
					<img
							className="object-fill w-full h-[380px]"
							src='https://pbs.twimg.com/media/FYNHLy7XwAEnV1K?format=jpg&name=small'
							alt="image slide 3"
					/>
			</swiper-slide>
	</swiper>
</div>

<div class="">textecito</div>
</main>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
	components: {
			Swiper,
			SwiperSlide,
	},
	setup() {
			return {
					modules: [Autoplay, Pagination, Navigation],
			};
	},
};
</script>
