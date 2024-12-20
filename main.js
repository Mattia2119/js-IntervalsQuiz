// VARIABILI
const keys = [
    ['1°','C','D','E','F','G','A','B'], 
    ['2°','D','E','F#','G','A','B','C#'],
    ['3°','E','F#','G#','A','B','C#','D#'],
    ['4°','F','G','A','Bb','C','D','E'],
    ['5°','G','A','B','C','D','E','F#'],
    ['6°','A','B','C#','D','E','F#','G#'],
    ['7°','B','C#','D#','E','F#','G#','A#'],
];

const campo = document.getElementById('row');
const start = document.getElementById('start_btn');
const cols = document.querySelectorAll("div.col");
const start_panel = document.getElementById('select_cnt');
const question_panel = document.getElementById('question_panel');
const question_number = document.getElementById('question_number');
const next = document.getElementById('next');
const popup = document.getElementById('alert');
const reset = document.getElementById('reset');
const errors = document.getElementById('errors');
let numeri_casuali = [];
let interval = [];
let correctAnswerPosition;
let correctAnswer;
let correctAnswerPosition_inDom;
let key;
let currentKey;
let questionNumber = 1;
let right_answers_total = 0;

// LOGICA APPLICATIVA
document.getElementById('start_btn').addEventListener("click", play);

function play() {
    question_number.innerHTML = `${questionNumber}/20`;
    let key = parseInt(document.getElementById("choose_key").value);
    generaDomande(key);
    generaRows(correctAnswerPosition, key);
    currentKey = key;

    cols.forEach((col) => {
        col.addEventListener('touchstart', mostraSelezioni); // Supporto per dispositivi mobili
        col.addEventListener('click', mostraSelezioni); // Supporto per desktop
    });
}

// FUNZIONI
function generaDomande(key) {
    start_panel.classList.add('none');
    question_panel.classList.remove('none');
    
    interval = [];
    let rand = Math.floor(Math.random() * 6 + 2);
    interval.push(rand === 4 || rand === 5 ? `${rand}a Giusta` : `${rand}a Maggiore`);
    
    question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][key]}?</h3>`;
    correctAnswer = keys[key - 1][parseInt(interval[0])];
    correctAnswerPosition = keys[key - 1].indexOf(correctAnswer);
}

function generaRows(correctAnswerPosition, key) {
    numeri_casuali = [];
    while (numeri_casuali.length < 4) {
        let num = Math.floor(Math.random() * 7 + 1);
        if (!numeri_casuali.includes(num)) {
            numeri_casuali.push(num);
        }
    }
    if (!numeri_casuali.includes(correctAnswerPosition)) {
        numeri_casuali[Math.floor(Math.random() * 4)] = correctAnswerPosition;
    }

    cols.forEach((col, i) => {
        col.classList.remove('none');
        col.innerHTML = `<a href="#"><h1>${keys[key - 1][numeri_casuali[i]]}</h1></a>`;
    });
}

function mostraSelezioni() {
    correctAnswerPosition_inDom = numeri_casuali.indexOf(correctAnswerPosition);

    if (this.textContent.trim() === correctAnswer) {  // Uso di textContent per una compatibilità migliore
        this.classList.add('right');
        right_answers_total++;
    } else {
        this.classList.add('wrong');
        cols[correctAnswerPosition_inDom].classList.add('right');
    }

    cols.forEach((col) => {
        col.removeEventListener('click', mostraSelezioni);
        col.removeEventListener('touchstart', mostraSelezioni);
        if (!col.classList.contains('right')) {
            col.classList.add('wrong');
        }
    });

    setTimeout(() => {
        if (questionNumber < 20) {
            nextDomanda();
        } else {
            terminaGioco();
        }
    }, 1000);
}

function nextDomanda() {
    questionNumber++;
    question_number.innerHTML = `${questionNumber}/20`;
    
    cols.forEach((col) => {
        col.innerHTML = '';
        col.classList.remove('right', 'wrong', 'none');
        col.classList.add('reset'); // Applica la classe per resettare lo stile
    });

    setTimeout(() => { // Timeout per garantire un reset visivo fluido
        cols.forEach((col) => {
            col.classList.remove('reset'); // Rimuove la classe reset dopo il refresh
        });

        key = currentKey;
        question_panel.innerHTML = '';
        numeri_casuali = [];
        interval = [];
        correctAnswer = '';
        correctAnswerPosition = 0;

        generaDomande(key);
        generaRows(correctAnswerPosition, key);

        cols.forEach((col) => {
            col.addEventListener('touchstart', mostraSelezioni);
            col.addEventListener('click', mostraSelezioni);
        });
    }, 200); // Tempo sufficiente per il reset visivo
}

function terminaGioco() {
    setTimeout(() => {
        question_panel.classList.add('none');
        cols.forEach((col) => col.classList.add('none'));
        question_number.classList.add('none');
        popup.classList.remove('none');
        errors.classList.remove('none');
        errors.innerHTML = `Hai indovinato ${right_answers_total} risposte su 20`;
        reset.addEventListener('click', () => {
            location.reload();
        });
    }, 1000);
}
