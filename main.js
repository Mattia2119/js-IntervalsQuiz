//VARIABILI

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
    const numeri_casuali = [];
    const cols = document.querySelectorAll("div.col");
    const start_panel = document.getElementById('select_cnt');
    const question_panel = document.getElementById('question_panel');
    let interval = [];
    let correctAnswerPosition;
    let correctAnswer;
    let correctAnswerPosition_inDom;
      
    //LOGICA APPLICATIVA

    document.getElementById('start_btn').addEventListener("click",play);
    
    function play() {

        let key = document.getElementById("choose_key").value;
    
        this.removeEventListener("click",play);

        generaDomande(key);
    
        generaRows(correctAnswerPosition,key);

        correctAnswerPosition_inDom = numeri_casuali.indexOf(correctAnswerPosition);

        for(let i = 0; i < cols.length; i++) {
            cols[i].addEventListener('click', mostraSelezioni);
        }

    }

    function mostraSelezioni() {
     if (this.innerText == correctAnswer) {
        for (let i = 0; i < cols.length; i++) {
            cols[i].classList.add('wrong');
            cols[i].removeEventListener('click',mostraSelezioni);
        }
        this.classList.remove('wrong');
        this.classList.add('right');
      } else {
        for (let i = 0; i < cols.length; i++) {
            cols[i].classList.add('wrong');
            cols[i].removeEventListener('click',mostraSelezioni);  
            cols.item(correctAnswerPosition_inDom).classList.remove('wrong');
            cols.item(correctAnswerPosition_inDom).classList.add('right');
        }
      }
    }


    //FUNZIONI
    //La funzione accetta un parametro in ingresso, che corrisponderà alla (key) tonalità scelta dall'utente
    //aggiune la classe none al pannello di selezione della chiave e rende visibile la domanda
    //genera venti numeri casuali compresi tra 1 e 7 e li pusha nell'array (interval) concatenandogli la stringa 'Maggiore'
    //Dopodiché con la struttura di controllo (if/else if) farò in modo di far combaciare la chiave sceltà dall'utente
    //con la domanda casuale relativa a quella specifica tonalità.

    function generaDomande(key) {
        start_panel.classList.add('none');
        question_panel.classList.remove('none');
        
        let i = 0;     
        while(i < 20) {
            let rand = Math.floor(Math.random()*6 + 2);
            if (rand == 4 || rand == 5) {
                interval.push(rand + 'a Giusta');
            } else {
                interval.push(rand + 'a Maggiore');
            }  
            i++
        }
        if (key == 1) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][1]}?</h3>`;
            correctAnswer = keys[0][parseInt(interval[0])];
            correctAnswerPosition = keys[0].indexOf(correctAnswer); 
            console.log(correctAnswer);
        } else if (key == 2) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][2]}?</h3>`;
            correctAnswer = keys[1][parseInt(interval[0])];
            correctAnswerPosition = keys[1].indexOf(correctAnswer); 
            console.log(correctAnswer);
        } else if (key == 3) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][3]}?</h3>`;
            correctAnswer = keys[2][parseInt(interval[0])];
            correctAnswerPosition = keys[2].indexOf(correctAnswer); 
            console.log(correctAnswer);
        } else if (key == 4) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][4]}?</h3>`;
            correctAnswer = keys[3][parseInt(interval[0])];
            correctAnswerPosition = keys[3].indexOf(correctAnswer); 
            console.log(correctAnswer);
        } else if (key == 5) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][5]}?</h3>`;
            correctAnswer = keys[4][parseInt(interval[0])];
            correctAnswerPosition = keys[4].indexOf(correctAnswer); 
            console.log(correctAnswer);
        } else if (key == 6) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][6]}?</h3>`;
            correctAnswer = keys[5][parseInt(interval[0])];
            correctAnswerPosition = keys[5].indexOf(correctAnswer); 
            console.log(correctAnswer);
        } else if (key == 7) {
            question_panel.innerHTML = `<h3>Qual è la ${interval[0]} di ${keys[0][7]}?</h3>`;
            correctAnswer = keys[6][parseInt(interval[0])];
            correctAnswerPosition = keys[6].indexOf(correctAnswer); 
            console.log(correctAnswer);
        }   
    }
  
    //La funzione genera 4 numeri casuali compresi tra 0 e 7
    //che farò combaciare (nella funzione generaRows) 
    //con la posizione nell'array keys della chiave selezionata dall'utente.
    //scorre la lunghezza dell'array restituito dagli elementi cols nell'HTML,
    //li rende visibili rimuovendo la classe none, e inietta l'html (a/h1) nel dom.
    //nel primo campo condizionale verifica che all'interno dell'array di numeri casuali, 
    //sia presente la risposta corretta, se non presente, la inserisce al posto di uno tra i 4 valori generati
    //casualmente dal campo while.

    function generaRows(correctAnswerPosition,key) {
        let i = 0
        while(i < 4) {
            let num = Math.floor(Math.random()*7 + 1);
            if(!numeri_casuali.includes(num)) {
                numeri_casuali.push(num);
                i++;
            } 
        }
        if (!numeri_casuali.includes(correctAnswerPosition)) {
            for (let i = 0; i < 1; i++) {
                let num = Math.floor(Math.random()*3 + 1);
                numeri_casuali.splice(num,1,correctAnswerPosition);
            }
        }
        for (let i = 0; i < cols.length; i++) {
            cols[i].classList.remove('none');
            if (key == 1) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[0][numeri_casuali[i]]}</h1></a>`;
            } else if (key == 2) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[1][numeri_casuali[i]]}</h1></a>`;
            } else if (key == 3) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[2][numeri_casuali[i]]}</h1></a>`;
            } else if (key == 4) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[3][numeri_casuali[i]]}</h1></a>`;
            } else if (key == 5) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[4][numeri_casuali[i]]}</h1></a>`;
            } else if (key == 6) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[5][numeri_casuali[i]]}</h1></a>`;
            } else if (key == 7) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[6][numeri_casuali[i]]}</h1></a>`;
            }   
        }
    }

    