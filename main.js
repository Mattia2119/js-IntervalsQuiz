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
    
        generaNumeri();
    
        generaRows();
    
    }

    //Funzioni
    
    //La funzione genera 4 numeri casuali compresi tra 0 e 7
    //che saranno le nostre opzioni che l'utente potrà
    //scegliere come risposta
    function generaNumeri() {
        let i = 0
    
        while(i < 4) {
            let num = Math.floor(Math.random()*7);
            if(!numeri_casuali.includes(num)) {
                numeri_casuali.push(num);
                i++;
            } 
        }
    }
    
    function generaRows() {
        for (let i = 0; i < cols.length; i++) {
            cols[i].classList.remove('none');
            for(let i = 0; i < cols.length; i++) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[0][numeri_casuali[i]]}</h1></a>`;
            } 
        }
    }

    function generaDomande(key) {
        start_panel.classList.add('none');
        question_panel.classList.remove('none');
        
        let i = 0;
        
        while(i < 20) {
            let rand = Math.floor(Math.random()*6 + 2);
            interval.push(rand + 'a Maggiore');
            console.log(interval);
            i++
        }

        if (key == 1) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][0]}?</h3>`;
        } else if (key == 2) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][1]}?</h3>`;
        } else if (key == 3) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][2]}?</h3>`;
        } else if (key == 4) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][3]}?</h3>`;
        } else if (key == 5) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][4]}?</h3>`;
        } else if (key == 6) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][5]}?</h3>`;
        } else if (key == 7) {
            question_panel.innerHTML = `<h3>Qual'è la ${interval[0]} di ${keys[0][6]}?</h3>`;
        }       

    }

    