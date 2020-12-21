let MINstart = parseInt(prompt('Введите минимальное знание числа для игры', '0'));
let MAXstart = parseInt(prompt('Введите максимальное знание числа для игры', '0'));
if ((isNaN(MINstart)) || (isNaN(MAXstart))) { MINstart = 0; MAXstart = 100; }
(MINstart <= -1000) ? MINstart = -999 : console.log('Min is good');
(MAXstart >= 1000) ? MAXstart = 999 : console.log('Max is good');
let MIN = MINstart;
let MAX = MAXstart;
alert(`Загадайте любое целое число от ${MIN} до ${MAX}, а я его угадаю`);
let answerNumber = Math.floor(Math.random() * MAXstart);
let order = 1;
let gameRun = true;

const orderField = document.querySelector('#orderField');
const answerField = document.querySelector('#answerField');

orderField.innerText = order;
answerField.innerText = `Вы загадали число ${text(answerNumber)}?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    answerNumber = ((MINstart + MAXstart) / 2);
    answerField.innerText = `Вы загадали число ${Math.floor(Math.random() * MAXstart)}?`;
    order = 1;
    orderField.innerText = order;
    MIN = MINstart;
    MAX = MAXstart;
    gameRun = true;
    phraseRando = 0;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (MIN === MAX) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\nಠ╭╮ಠ` :
                `Я сдаюсь..\n◉_◉`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            MIN = answerNumber + 1;
            answerNumber = Math.floor((MIN + MAX) / 2);
            order++;
            orderField.innerText = order;
            answerField.innerText = `Вы загадали число ${text(answerNumber)}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (MAX === MIN) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Кажется мои числа не подходят...\n(ง ͠° ͟ل͜ ͡°)ง` :
                `Я сдаюсь..\n ¯\(°_o)/¯`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            MAX = answerNumber - 1;
            answerNumber = Math.round((MIN + MAX) / 2);
            order++;
            orderField.innerText = order;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        var phraseRando = Math.round(Math.random() * 3);
        const answerPhras = (phraseRando == 3) ?
            'Это было легко!\n (づ｡◕‿‿◕｡)づ' : (phraseRando == 2) ? `Давай сыграем еще раз!\n ｡◕‿‿◕｡` : 'Слишком просто для меня!\u{1F60A}';
        answerField.innerText = answerPhras;
        gameRun = false;
    }

})

function text(answerNumber) {
    let oneNine = {
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять"
    };
    let tenNineteen = {
        10: "десять",
        11: "одиннадцать",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шестнадцать",
        17: "семнадцать",
        18: "восемнадцать",
        19: "девятнадцать"
    };
    let dozens = {
        2: "двадцать",
        3: "тридцать",
        4: "сорок",
        5: "пятьдесят",
        6: "шестьдесят",
        7: "семьдесят",
        8: "восемьдесят",
        9: "девяносто"
    };
    let hundreds = {
        1: "сто",
        2: "двести",
        3: "триста",
        4: "четыреста",
        5: "пятьсот",
        6: "шестьсот",
        7: "семьсот",
        8: "восемьсот",
        9: "девятьсот"
    }
}
