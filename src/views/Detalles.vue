<template>
	<h3>fdss</h3>

	<div v-if="pokemon">
	<h1 class="text-red-400 font-black text-center"> {{pokemon.name}} </h1>
	<div class="grid grid-cols-7 grid-rows-8 mb-[60px]">
		<span>vida <a-rate v-model:value="value1" character="█" style="font-size: 26px" /></span>
		<span class="col-start-1">at <a-rate v-model:value="value2" character="█" style="font-size: 26px" /></span>
		<span class="col-start-1">de <a-rate v-model:value="value3" character="█" style="font-size: 26px" /></span>
		<span class="col-start-1">deE <a-rate v-model:value="value4" character="█" style="font-size: 26px" /></span>
		<span class="col-start-1">atE <a-rate v-model:value="value5" character="█" style="font-size: 26px" /></span>
		<span class="col-start-1">vel <a-rate v-model:value="value6" character="█" style="font-size: 26px" /></span>


	</div>

	<div class="absolute top-[100px] left-[250px] rounded-lg shadow-lg flex">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="h-40">
		<Donut :stats="stats" :ArrayValues="ArrayValues" />
		<h2 class="mb-3">estadisticas {{stats}} </h2>
	</div>

		<ul >
			<template v-for="type in types" :key="type" class="mx-auto" >
				<li :class="`${type == 'poison' ? 'bg-violet-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'water' ? 'bg-blue-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'fire' ? 'bg-red-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'flying' ? 'bg-gray-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'bug' ? 'bg-green-300' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'grass' ? 'bg-green-600' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'normal' ? 'bg-gray-700' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'ground' ? 'bg-orange-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'rock' ? 'bg-amber-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'ice' ? 'bg-cyan-300' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'electric' ? 'bg-yellow-400' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'psychic' ? 'bg-rose-400' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'dragon' ? 'bg-blue-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'fighting' ? 'bg-rose-700' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'ghost' ? 'bg-blue-500' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
				<li :class="`${type == 'fairy' ? 'bg-rose-300' : 'hidden'} text-white text-[20px] p-2  rounded-full inline`">
					<button >{{type}}</button>
				</li>
			</template>
		</ul>
	</div >
</template>

<script setup>
import { computed, reactive, toRefs, onMounted, watch} from 'vue';
import { useRoute } from 'vue-router';
import Donut from "../components/Donut.vue";

const state = reactive({
	// 1
	pokemon: null,
	// 2
	stats: computed(() =>
		filterStats()
	),
	types: computed(() =>
		filterType()),
	value1: 2,
	value2: 3,
	value3: 4,
	value4: 4,
	value5: 1,
	value6: 2,
	ArrayValues: computed(() =>
		filterValues6()),
})
// 2
const filterStats = () => {
	// si el state pokemon, no es null, dame sus stats
	if (state.pokemon) {
		// podes entrar a lo que este dentro de un objeto con map
		return state.pokemon.stats.map((unStat) => unStat.base_stat)
	}
}

const filterValues6 = () => {
	if (state.pokemon) {
		return [value1.value, value2.value, value3.value, value4.value, value5.value, value6.value]
	}
}

const filterType = () => {
	if (state.pokemon)
		return state.pokemon.types.map((unType) => unType.type.name)
}
// 1
const route = useRoute()
const {pokemon, stats, types, value1, value2, value3, value4, value5, value6, ArrayValues} = toRefs(state)
// 1
const Actualizador = async() => {

await fetch (`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
.then((res) => res.json())
.then((data) => {
	state.pokemon = data
	// console.log(pokemon);
	// console.log(type);
})
}


	watch(route, () => {
		Actualizador()
	})

	onMounted(() => {
		Actualizador()
	})


</script>

<style lang="scss" scoped>

</style>
