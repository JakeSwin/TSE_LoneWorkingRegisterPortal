<script>
export default {
  mounted() {
    var colorscaleValue = [
        [0, "#EBEBEB"],
        [1, "#33E9C8"]
    ];
    var data = [
      {
        z: [
          [0, 1, 1, 0, 0, 0, 1],
          [1, 0, 1, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 0, 1],
          [0, 0, 1, 0, 0, 0, 0]
        ],
        x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        y: [1, 2, 3, 4],
        xgap: 5,
        ygap: 5,
        type: "heatmap",
        colorscale: colorscaleValue,
        showscale: false
      }
    ];
    var config = {
        staticPlot: true
    };
    var layout = {
        showLegend: false,
        width: 350,
        height: 320,
        margin: {
            t: 0,
            b: 60,
            l: 30,
            r: 30
        }
    };
    Plotly.newPlot("sign-in-heatmap", data, layout, config);
  },
}
</script>

<template>
  <div id="sign-in-heatmap">
        
  </div>  
</template>

<style>

</style>