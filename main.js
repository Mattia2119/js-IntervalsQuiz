//Variabili

const keys = [
        ['C','D','E','F','G','A','B'], 
        ['D','E','F#','G','A','B','C#'],
        ['E','F#','G#','A','B','C#','D#'],
        ['F','G','A','Bb','C','D','E'],
        ['G','A','B','C','D','E','F#'],
        ['A','B','C#','D','E','F#','G#'],
        ['B','C#','D#','E','F#','G#','A#'],
   ];
    
    const campo = document.getElementById('row');
    const start = document.getElementById('start_btn');
    const numeri_casuali = [];
    const cols = document.querySelectorAll("div.col");
    const start_panel = document.getElementById('select_cnt');
    const question_panel = document.getElementById('question_panel');
    let interval = [];
    
    //Logica Applicativa
    document.getElementById('start_btn').addEventListener("click",play);
    
    function play() {
    
        this.removeEventListener("click",play);
        
        let key = document.getElementById("choose_key").value;

        generaDomande(key);
    
        generaRows();
    
    }

    //Funzioni
    
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
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][0]}?</h3>`;
            let correctAnswer = keys[0][parseInt(interval[0]) - 1];
            console.log(correctAnswer); // <---
        } else if (key == 2) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][1]}?</h3>`;
            let correctAnswer = keys[1][parseInt(interval[0]) - 1];
            //console.log(correctAnswer);
        } else if (key == 3) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][2]}?</h3>`;
            let correctAnswer = keys[2][parseInt(interval[0]) - 1];
            //console.log(correctAnswer);
        } else if (key == 4) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][3]}?</h3>`;
            let correctAnswer = keys[3][parseInt(interval[0]) - 1];
            //console.log(correctAnswer);
        } else if (key == 5) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][4]}?</h3>`;
            let correctAnswer = keys[4][parseInt(interval[0]) - 1];
            //console.log(correctAnswer);
        } else if (key == 6) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][5]}?</h3>`;
            let correctAnswer = keys[5][parseInt(interval[0]) - 1];
            //console.log(correctAnswer);
        } else if (key == 7) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][6]}?</h3>`;
            let correctAnswer = keys[6][parseInt(interval[0]) - 1];
            //console.log(correctAnswer);
        }       

    }
  
    //La funzione genera 4 numeri casuali compresi tra 0 e 7
    //che farò combaciare (nella funzione generaRows) 
    //con la posizione nell'array keys della chiave selezionata dall'utente.
    //scorre la lunghezza dell'array restituito dagli elementi cols nell'HTML,
    //li rende visibili rimuovendo la classe none, e inietta l'html (a/h1) nel dom.
    function generaRows() {
        let i = 0
    
        while(i < 4) {
            let num = Math.floor(Math.random()*7);
            if(!numeri_casuali.includes(num)) {
                numeri_casuali.push(num);
                i++;
            } 
        }
        console.log(numeri_casuali);

        for (let i = 0; i < cols.length; i++) {
            cols[i].classList.remove('none');
            cols[i].innerHTML = `<a href="#"><h1>${keys[0][numeri_casuali[i]]}</h1></a>`;
        }
    }

    