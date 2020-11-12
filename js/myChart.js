var ctx = $('#myChart');
console.log(ctx);

var jsonObject = { "positive": 30, "neutral": 40, "negative": 50, "query": "election"}
loadChart(jsonObject)

function loadChart(jsonObject){
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        // The data for our dataset
        data: {
            labels: [
                'Negative',
                'Neutral',
                'Positive'
            ],
            datasets: [{
                data: [jsonObject.negative, jsonObject.neutral, jsonObject.positive],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ]
            }],
        },
        // Configuration options go here
        options: {
            title: {
                display: true,
                text: (jsonObject.query + " chart").toUpperCase()
            }
        }
    });
}