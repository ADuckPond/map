var ctx = $('#myChart');
var defaults = { "positive": 30, "neutral": 40, "negative": 50, "query": "Sample"};

$('#queryForm').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    jsonObject = { "positive": 50, "neutral": 10, "negative": 20, "query": formData.get("queryValue")};
    loadChart(jsonObject);
});

function loadChart(defaults){
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
                data: [defaults.negative, defaults.neutral, defaults.positive],
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
                text: (defaults.query + " chart").toUpperCase()
            }
        }
    });
}