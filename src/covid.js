import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Total Covid-19 Cases in the US',
              data:[],
              borderWidth:0.5,
              borderColor:"black",
              backgroundColor:'black',
              fill:false,
            },
            {
              label: 'Recovered Covid-19 Cases in the US',
              data:[],
              borderWidth:0.5,
              borderColor:"blue",
              backgroundColor:'blue',
              fill:false,
            }
          ]
          
        },
        options: {
           
        }
      }),

    methods:{
    
    fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
            this.results=response.data.snapshots
            for(var i=0; i < this.results.length; i++){
                var cases = this.results[i]['cases']
                var recovered = this.results[i]['recovered']
                var date = this.results[i]['timestamp'].slice(0, 10)
                // plot daily data (hourly data too cluttered)
                if (!this.chartdata.labels.includes(date)) {
                    this.chartdata.datasets[0].data.push(cases)
                    this.chartdata.datasets[1].data.push(recovered)
                    this.chartdata.labels.push(date)
                } else {
                    // update data with latest recorded cases
                    var index = this.chartdata.datasets[0].data.length - 1
                    this.chartdata.datasets[0].data.splice(index, index, cases)
                    this.chartdata.datasets[1].data.splice(index, index, recovered)
                }
            }
            this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }
}