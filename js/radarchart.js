var ctx = document.getElementById("myChart1");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["学習目標", "評価方法", "教授方略", "教材改善"],
        datasets: [{
            label: '結果',
            data: [0, 1, 2, 4],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            r: {
                pointLabels: {
                    font: {
                        size: 16,
                    },
                },
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 1,
                }
            },
        },
    },
});

var ctx = document.getElementById("myChart2");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["注意", "関連性", "自信", "満足感"],
        datasets: [{
            label: '結果',
            data: [0, 1, 2, 3],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            r: {
                pointLabels: {
                    font: {
                        size: 16,
                    },
                },
                min: 0,
                max: 3,
                ticks: {
                    stepSize: 1,
                }
            },
        },
    },
});