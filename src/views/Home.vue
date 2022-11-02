<script setup>
import { computed, reactive, toRefs } from 'vue';

import {} from './SuperiorHome.vue'
	const state = reactive({
		cuenta: 1,
		ArrayVacio: new Set()
	})

	let {cuenta, ArrayVacio} = toRefs(state)

	const HandleAdd = () => {
		ArrayVacio.value.add(cuenta.value)
	}

	const HandleCounter = () => {
		cuenta.value++
	}

	const HandleMenos = () => {
		cuenta.value--
	}

	const HandleReset = () => {
		cuenta.value = 0
	}

	const Handleclick = (message) => {
		alert(message)
	}

	const cambiarPoke = computed(() => {
		if (cuenta.value === 0) {
			return 'nadie'
		}
		if (cuenta.value === 1) {
			return 'pika'
		}
		if (cuenta.value === 2) {
			return 'charmeleon'
		}
	})
// console.log(buscado);

	let pokemon = ["charmander", "zygarde", "alomomola"]
	console.log(pokemon.sort())
</script>

<template>

	<router-link to="/" :class="cambiarPoke" >{{cambiarPoke}}</router-link>
  <div class="mt-[200px]">
    <h4 v-if="cuenta > 0" class="text-blue-700">contador: {{cuenta}} </h4>
		<h4 v-else-if="cuenta <= 0" class="bg-red-200 text-red-900">contador: {{cuenta}} </h4>
		<button @click="HandleCounter" class="mx-4 bg-gray-300">contador</button>
		<button @click="HandleMenos" class="bg-blue-300" >menos</button>
		<button @click="HandleReset" class="bg-green-500">reset</button>
		<button  @click="HandleAdd" class="bg-amber-500 p-2"  > añada un numero no repetido </button>


		<ul>
			<template v-for="ArrayItem in ArrayVacio" :key="ArrayItem">
				<li >
					{{ArrayItem}}
				</li>
			</template>
		</ul>



		<br>
		<button @click="Handleclick('si')" class="p-4 bg-gray-500 mx-1 my-3" >alerta si</button>
		<button @click="Handleclick('no')" class="p-4 bg-gray-500" >alerta no</button>

		<a-button type="primary">Primary Button</a-button>
  <a-button type="danger">Default Button</a-button>



  </div>
</template>



<style lang="scss" scoped>

</style>
