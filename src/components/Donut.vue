<template>
    <div>
      <button @click="CambioGrafico()" class="bg-red-400 rounded-2xl p-[3px]">mostrar grafico radar</button>
      <button @click="CambioEstadistica()" class="bg-yellow-400 rounded-2xl p-[3px]">stats de {{edit ? 'la api' : 'el edit'}}</button>
        <apexchart v-if="grafico" width="300" type="area" :options="chartOptions" :series="series"></apexchart>
        <apexchart v-else="grafico" width="300" type="radar" :options="chartOptions" :series="series"></apexchart>
        <!-- <apexchart width="300" type="radar" :options="chartOptions" :series="series"></apexchart> -->
   </div>
</template>

<script setup>
import { computed, onMounted, reactive, toRefs } from 'vue';

// se definen los props. este es un array
const props = defineProps({
    stats:Array,
    ArrayValues:Array
})

const chartOptions = {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['vida', 'at', 'de', 'deE', 'atE', 'vel']
          },
        }
        const series = computed(() => { return [{
          name: 'series-1',
          data:  edit ? (props.stats)  : (props.ArrayValues)
  }]})


  const state = reactive({
    grafico: false,
    edit: false,
    arrayVacioo: ['']
  })

  let {grafico, edit} = toRefs(state)

  let CambioGrafico = () => {
    grafico.value = !grafico.value
  }

  let CambioEstadistica = () => {
    edit.value = !edit.value
  }

</script>

<style lang="scss" scoped>

</style>
