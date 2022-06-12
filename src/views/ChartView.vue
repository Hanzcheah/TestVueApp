<script lang="ts">
import { GChart } from "vue-google-charts";
import axios from "axios";

export default {
  data() {
    return {
      chartData: [["Date", "Value"]],
      chartOptions: null,
      chartLoading: null,
    };
  },
  methods: {
    async fetchData() {
      axios
        .get(
          "https://api.worldbank.org/v2/countries/AU/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json"
        )
        .then((response) => {
          response.data[1].forEach((obj) => {
            this.chartData.push([obj.date, obj.value]);
          });
          this.chartLoading = "success";
        });
    },
  },
  mounted() {
    this.fetchData();
  },
  components: {
    GChart,
  },
};
</script>

<template>
  <div v-if="chartLoading">
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
  <div v-else>Loading...</div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
