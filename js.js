let MINstart = parseInt(prompt('Введите минимальное знание числа для игры', '0'));
let MAXstart = parseInt(prompt('Введите максимальное знание числа для игры' , '0'));
if ((isNaN(MINstart))||(isNaN(MAXstart)))
    {MINstart=0; MAXstart=100;}
(MINstart<=-1000) ? MINstart=-999: console.log('Min is good') ;
(MAXstart>=1000) ? MAXstart=999 : console.log('Max is good');
let MIN=MINstart;
let MAX=MAXstart;
alert(`Загадайте любое целое число от ${MIN} до ${MAX}, а я его угадаю`);
let answerNumber  = Math.floor(Math.random()*MAXstart);
let order = 1;
let gameRun= true;

figures=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
words=['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одинадцать','двенадцать','тренадцать','четырнадцать','пятнадцать','шеснадцать','семнадцать','восемнадцать','девятнадцать','двадцать'];




const orderField= document.querySelector('#orderField');
const answerField= document.querySelector('#answerField');

orderField.innerText = order;
answerField.innerText= `Вы загадали число ${answerNumber}?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    answerNumber=((MINstart + MAXstart) / 2);
    answerField.innerText= `Вы загадали число ${Math.floor(Math.random()*MAXstart)}?`;
    order=1;
    orderField.innerText=order;
    MIN = MINstart;
    MAX= MAXstart;
    gameRun=true;
    phraseRando=0;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (MIN === MAX){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\nಠ╭╮ಠ` :
                `Я сдаюсь..\n◉_◉`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            MIN = answerNumber  + 1;
            answerNumber  = Math.floor((MIN + MAX) / 2);
            order++;
            orderField.innerText = order;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (MAX === MIN){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Кажется мои числа не подходят...\n(ง ͠° ͟ل͜ ͡°)ง` :
                `Я сдаюсь..\n ¯\(°_o)/¯`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            MAX = answerNumber  -1;
            answerNumber  = Math.round((MIN + MAX) / 2);
            order++;
            orderField.innerText = order;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        var phraseRando=Math.round(Math.random() * 3);
        const answerPhras = (phraseRando == 3)?
        'Это было легко!\n (づ｡◕‿‿◕｡)づ' : (phraseRando ==2) ? `Давай сыграем еще раз!\n ｡◕‿‿◕｡`: 'Слишком просто для меня!\u{1F60A}';
        answerField.innerText = answerPhras;
        gameRun = false;
    }

})

function numbertostr (answerNumber) {
    var arrnumbers = new Array ();
    arrnumbers[1]=new Array('', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать');
    arrnumbers[2] = new Array('', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто');
    arrnumbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот');
}
function transform (){
    transfermed=[];
    for (i in answerNumber){
    transfermed.push(figures[words.index(i)]);
    alert(transfermed[i].name);
    }
    
}

// # Нахождение surcode
// nums = []
// for i in surname:
//     if i == ' ': continue
//     nums.append(Codes[Letters.index(i)])
// txt_surcode.delete(0, END)
// for i in nums:
//     txt_surcode.insert(END, f'{i} ')