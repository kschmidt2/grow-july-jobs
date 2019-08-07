// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].className += " strong";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1VrbE0O3ErwXRkCcwzxdQZkxwAT7oSaPSplkvqneCzNk'
        },
        plotOptions: {
            series: {
                groupPadding: 0.1,
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 80000,
            tickAmount: 6
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 0,
                  spacingLeft: 0
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        reserveSpace: false,
                        x: 40,
                        y:-15,
                        align: 'left'
                    }
                },
                yAxis: {
                    min: -10000,
                    max: 70000,
                    tickAmount: 9
                },
                plotOptions: {
                    series: {
                        groupPadding: 0.2
                    }
                }
              }
            }]
        }
    });
});