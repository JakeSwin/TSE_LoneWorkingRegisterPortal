<script>
export default {
  mounted() {
    try {
      fetch('/api/sensor-data')
      .then(res => {
        res.json()
        .then(json => {
          var times = []
          var timeData = []
          json.forEach(item => {
            times.push(item.timeSent)
            var totalTenMinFootFall = 0
            for(let x in item.timeRecieved) {
              totalTenMinFootFall += item.timeRecieved[x]
            }
            timeData.push(totalTenMinFootFall)
          })

          var data = [
            {
              x: times,
              y: timeData,
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
        })
      })
    } catch {
      
    }
  },
}
</script>

<template>
    <div id="footfall-histogram">
        
    </div>  
</template>

<style scoped>

</style>