const button1 = document.getElementById('startBtn1');
// スタートボタンがクリックされたら非表示にするイベントリスナを設定
button1.addEventListener('click', () => {
    button1.style.display = 'none';
});

// 選択肢をシャッフルする
function shuffleOptions(questionId) {
    const optionsContainer = $(`#q${questionId}options`);
    const options = optionsContainer.children();
    options.detach().sort(() => Math.random() - 0.5);
    optionsContainer.append(options);
}

let score1 = 0

// 正誤判定をする
function checkAnswer1(questionId) {
    // 選択肢の中の正解の数
    const numcorrect = $(`#q${questionId}options input.correct`).length

    // 選択した答えの配列
    const answer = $(`#q${questionId}options input:checked`).map(function () {
        return $(this).attr("class");
    }).get();

    // もし，選択した答えに不正解を含まず，かつ選択肢の中の正解の数と選択した数が一致する時⇒正解
    if (!answer.includes('incorrect') && numcorrect === answer.length) {
        $(`.answer${questionId}`).text('回答：正解です');
        score1 = score1 + 1
    } else {
        $(`.answer${questionId}`).text('回答：不正解です');
    }
}

function clearAnswers(questionId) {
    // チェックをクリアする
    $(`#q${questionId}options input:checked`).prop('checked', false);
    // 正誤判定をクリアする
    $(`.answer${questionId}`).text('');
}

$(function () {

    const questionSets = [
        ['1_1_1', '1_1_2'],
        ['1_2_1', '1_2_2'],
        ['1_3_1', '1_3_2'],
        ['1_4_1', '1_4_2'],
        ['1_5_1', '1_5_2'],
    ];

    // スタートボタンを押したときに実行されるやつ
    $('#startBtn1').click(function () {

        // 2問中1問ランダムで出題される，選択肢もシャッフルされる
        for (const set of questionSets) {
            const randomQuestion = set[Math.floor(Math.random() * set.length)];
            $(`#q${randomQuestion}question`).show();
            shuffleOptions(randomQuestion);
        }
        $('#quizContainer1').show();
    });

    $('#checkAnswerBtn1').click(function () {
        // 答え合わせボタンを押したときに正誤判定をするやつを実行する
        for (const val of questionSets.flat()) {
            checkAnswer1(val);
        }

        if (score1 === 5) {
            $('#omedeto1').show();
        } else {
            $('#zannen1').show();
        }

        // 解説を表示する
        $('#quizContainer1 .each_explanation').show();
        $('#quizContainer1 .explanation').show();

        // 答え合わせボタンを再度押せないようにする
        checkAnswerBtn1.disabled = true;

        // もう一度挑戦するボタンが出る
        $('#retryBtn1').show();

        // scoreを0に戻す
        score1 = 0
    });

    // 「もう一度挑戦する」をクリックしたら
    $('#retryBtn1').click(function () {

        // 答え合わせボタンを表示させる
        checkAnswerBtn1.disabled = false;

        // 最初の問題に戻る
        location.replace("quiz.html#quiz1");

        // 「もう一度挑戦する」を消す
        $('#retryBtn1').hide();

        // 解説を消す
        $('#quizContainer1 .each_explanation').hide();
        $('#quizContainer1 .explanation').hide();

        // 画像を消す
        $('#omedeto1').hide();
        $('#zannen1').hide();

        for (const val of questionSets.flat()) {
            // 選択肢クリアを実行する
            clearAnswers(val);
            // クイズを消す
            $(`#q${val}question`).hide();
        }

        // 2問中1問ランダムで出題される，選択肢もシャッフルされる
        for (const set of questionSets) {
            const randomQuestion = set[Math.floor(Math.random() * set.length)];
            $(`#q${randomQuestion}question`).show();
            shuffleOptions(randomQuestion);
        }
        $('#quizContainer1').show();

        // scoreを0に戻す
        score1 = 0
    });
});

const button2 = document.getElementById('startBtn2');
// スタートボタンがクリックされたら非表示にするイベントリスナを設定
button2.addEventListener('click', () => {
    button2.style.display = 'none';
});

let score2 = 0

// 正誤判定をする
function checkAnswer2(questionId) {
    // 選択肢の中の正解の数
    const numcorrect = $(`#q${questionId}options input.correct`).length

    // 選択した答えの配列
    const answer = $(`#q${questionId}options input:checked`).map(function () {
        return $(this).attr("class");
    }).get();

    // もし，選択した答えに不正解を含まず，かつ選択肢の中の正解の数と選択した数が一致する時⇒正解
    if (!answer.includes('incorrect') && numcorrect === answer.length) {
        $(`.answer${questionId}`).text('回答：正解です');
        score2 = score2 + 1
    } else {
        $(`.answer${questionId}`).text('回答：不正解です');
    }
}

$(function () {

    const questionSets = [
        ['2_1_1', '2_1_2'],
        ['2_2_1', '2_2_2'],
        ['2_3_1', '2_3_2'],
        ['2_4_1', '2_4_2'],
    ];

    // スタートボタンを押したときに実行されるやつ
    $('#startBtn2').click(function () {

        // 2問中1問ランダムで出題される，選択肢もシャッフルされる
        for (const set of questionSets) {
            const randomQuestion = set[Math.floor(Math.random() * set.length)];
            $(`#q${randomQuestion}question`).show();
            shuffleOptions(randomQuestion);
        }
        $('#quizContainer2').show();
    });

    $('#checkAnswerBtn2').click(function () {
        // 答え合わせボタンを押したときに正誤判定をするやつを実行する
        for (const val of questionSets.flat()) {
            checkAnswer2(val);
        }

        if (score2 === 4) {
            $('#omedeto2').show();
        } else {
            $('#zannen2').show();
        }

        // 解説を表示する
        $('#quizContainer2 .each_explanation').show();
        $('#quizContainer2 .explanation').show();

        // 答え合わせボタンを再度押せないようにする
        checkAnswerBtn2.disabled = true;

        // もう一度挑戦するボタンが出る
        $('#retryBtn2').show();

        // scoreを0に戻す
        score2 = 0
    });

    // 「もう一度挑戦する」をクリックしたら
    $('#retryBtn2').click(function () {

        // 答え合わせボタンを表示させる
        checkAnswerBtn2.disabled = false;

        // 最初の問題に戻る
        location.replace("quiz.html#quiz2");

        // 「もう一度挑戦する」を消す
        $('#retryBtn2').hide();

        // 解説を消す
        $('#quizContainer2 .each_explanation').hide();
        $('#quizContainer2 .explanation').hide();

        // 画像を消す
        $('#omedeto2').hide();
        $('#zannen2').hide();

        for (const val of questionSets.flat()) {
            // 選択肢クリアを実行する
            clearAnswers(val);
            // クイズを消す
            $(`#q${val}question`).hide();
        }

        // 2問中1問ランダムで出題される，選択肢もシャッフルされる
        for (const set of questionSets) {
            const randomQuestion = set[Math.floor(Math.random() * set.length)];
            $(`#q${randomQuestion}question`).show();
            shuffleOptions(randomQuestion);
        }
        $('#quizContainer2').show();

        // scoreを0に戻す
        score2 = 0
    });
});