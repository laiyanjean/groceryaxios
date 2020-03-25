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
                label: 'MRT',
                data:[],
                borderWidth:0.5,
                borderColor:"#B6666F",
                backgroundColor:'#B6666F',
                fill:false
            },
            {
                label: 'LRT',
                data:[],
                borderWidth:0.5,
                borderColor:"#619196",
                backgroundColor:'#619196',
                fill:false
            },
            {
                label: 'Bus',
                data:[],
                borderWidth:0.5,
                borderColor:"#5E616B",
                backgroundColor:'#5E616B',
                fill:false
            },
            {
                label: 'Taxi',
                data:[],
                borderWidth:0.5,
                borderColor:"#779ECB",
                backgroundColor:'#779ECB',
                fill:false
            }
          ]
          
        },
        options: {
           
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        
        for(var i=0; i < this.results.length; i++){
            var num = this.results[i]['average_ridership']
            var type = this.results[i]['type_of_public_transport']
            var year = this.results[i]['year']
            console.log(num)
            console.log(type)
            console.log(year)

            if (!this.chartdata.labels.includes(year)) {
                this.chartdata.labels.push(year)
            }

            if (type == "MRT") {
                this.chartdata.datasets[0].data.push(num)
            } else if (type == "LRT") {
                this.chartdata.datasets[1].data.push(num)
            } else if (type == "Bus") {
                this.chartdata.datasets[2].data.push(num)
            } else {
                this.chartdata.datasets[3].data.push(num)
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