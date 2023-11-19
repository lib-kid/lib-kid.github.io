var myRadarChart1

document.querySelector('#btn1').addEventListener('click', () => {
    if (myRadarChart1) myRadarChart1.destroy();
    var ctx = document.getElementById("myChart1");
    check1_1 = document.querySelectorAll("input[name=goal]:checked").length;
    check1_2 = document.querySelectorAll("input[name=test]:checked").length;
    check1_3 = document.querySelectorAll("input[name=instruction]:checked").length;
    check1_4 = document.querySelectorAll("input[name=improvement]:checked").length;

    myRadarChart1 = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["学習目標", "評価方法", "教授方略", "教材改善"],
            datasets: [{
                label: '結果',
                data: [check1_1, check1_2, check1_3, check1_4],
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
});

var myRadarChart2

document.querySelector('#btn2').addEventListener('click', () => {
    if (myRadarChart2) myRadarChart2.destroy();
    var ctx = document.getElementById("myChart2");
    check2_1 = document.querySelectorAll("input[name=attention]:checked").length;
    check2_2 = document.querySelectorAll("input[name=relevance]:checked").length;
    check2_3 = document.querySelectorAll("input[name=confidence]:checked").length;
    check2_4 = document.querySelectorAll("input[name=satisfaction]:checked").length;

    myRadarChart2 = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["注意", "関連性", "自信", "満足感"],
            datasets: [{
                label: '結果',
                data: [check2_1, check2_2, check2_3, check2_4],
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
});