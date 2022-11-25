import {React,Component} from "react";
import ReactApexChart from 'react-apexcharts'

class ApexChartBI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: "Xn",
                data: props.data.xm
            },
            {
                name: "X0",
                data: props.data.xl
            }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                title: {
                    text: 'Monkey D Grap',
                    align: 'left'
                },
                legend: {
                    tooltipHoverFormatter: function(val, opts) {
                        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: props.data.xloop,
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },
      };
    }

    render() {
        return (    
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={400} />
            </div>
        );
    }
}

export default ApexChartBI;