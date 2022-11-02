<template>
	<router-view></router-view>

		<ul class="grid grid-cols-11 gap-[3px] my-4 mx-2">
			<template v-for="pokemon in ArrayPoke" :key="ArrayPoke.index" >
				<li v-if="pokemon.index > 470" class=" bg-red-400 text-red-800 max-w-[150px] hover:text-[#5c2222] ">
					<!--  -->
					<router-link class="text-white p-2" :to="`/detalles/${pokemon.index}`">  {{ pokemon.name }}  #{{pokemon.index}} </router-link>
				</li>
			</template>
		</ul>
		<!-- sacar su index es importante. ese numero lo vamos a pasar a un fetch para que agarre los links de cada pokemon -->
</template>

<script setup>
import { reactive, toRefs} from 'vue'


const state = reactive({
	ArrayPoke: []
		})
		// se pone porque si
const {ArrayPoke} = toRefs(state)


		 fetch('https://pokeapi.co/api/v2/pokemon?limit=800')
			.then((res) => res.json())
			.then((data) => {
				//
				// entra adentro de los resultados
				data.results.map((item, index) => {
					const linkDentro = {
						...item,
						index:index+1
					}
					state.ArrayPoke.push(linkDentro)
					// console.log(ArrayPoke);
				})
			})
			.then(() => {
				console.log(ArrayPoke.sprites)
			})



// console.log(ArrayPoke);
</script>



<style lang="scss" scoped>

</style>
