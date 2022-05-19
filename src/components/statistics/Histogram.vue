<script>
export default {
  props: {
    histogramData: {
      type: Object,
      default: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    }
  },
  mounted() {
    var data = [
      {
        x: ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
        y: this.histogramData,
        xgap: 5,
        ygap: 5,
        type: "bar",
        showscale: false
      }
    ];
    var config = {
        staticPlot: true
    };
    var layout = {
        showLegend: false,
        title: "Total footfall in past hour",
        width: 350,
        height: 320,
        margin: {
            t: 40,
            b: 60,
            l: 30,
            r: 30
        }
    };
    Plotly.newPlot("footfall-histogram", data, layout, config);
  },
}
</script>

<template>
    <div id="footfall-histogram">
        
    </div>  
</template>

<style scoped>

</style>