//Variabili

const keys = [
    /*C*/   ['C','D','E','F','G','A','B'], 
    /*D*/   ['D','E','F#','G','A','B','C#'],
    /*E*/   ['E','F#','G#','A','B','C#','D#'],
    /*F*/   ['F','G','A','Bb','C','D','E'],
    /*G*/   ['G','A','B','C','D','E','F#'],
    /*A*/   ['A','B','C#','D','E','F#','G#'],
    /*B*/   ['B','C#','D#','E','F#','G#','A#'],
            ];
    
    const campo = document.getElementById('row');
    const start = document.getElementById('start_btn');
    const numeri_casuali = [];
    const cols = document.querySelectorAll("div.col");
    const start_panel = document.getElementById('select_cnt');
    const question_panel = document.getElementById('question_panel')
    
    //Funzioni principali
    document.getElementById('start_btn').addEventListener("click",play);
    
    function play() {

        generaDomande();
    
        this.removeEventListener("click",play);
        
    
        //Creo la variabile che mi raccolga il valore del button nell Html//
        let key = document.getElementById("choose_key").value;
        console.log(key);
    
        //imposto con delle istruzioni condizionali, l'array di tonalità
        //in relazione alla scelta dell'utente
        if(key == 1) {
            let choosed_key = keys[0];
            console.log(choosed_key);
        } else if (key == 2) {
            let choosed_key = keys[1];
            console.log(choosed_key);
        } else if (key == 3) {
            let choosed_key = keys[2];
            console.log(choosed_key);
        } else if (key == 4) {
            let choosed_key = keys[3];
            console.log(choosed_key);
        } else if (key == 5) {
            let choosed_key = keys[4];
            console.log(choosed_key);
        } else if (key == 6) {
            let choosed_key = keys[5];
            console.log(choosed_key);
        } else if (key == 7) {
            let choosed_key = keys[6];
            console.log(choosed_key);
        }
    
        generaNumeri();
    
        generaRows();
    
    }
    
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
                console.log(num)
            } 
        }
    
        console.log(numeri_casuali);
        
    }
    
    function generaRows() {
        for (let i = 0; i < cols.length; i++) {
            cols[i].classList.remove('none');
            for(let i = 0; i < cols.length; i++) {
                cols[i].innerHTML = `<a href="#"><h1>${keys[0][numeri_casuali[i]]}</h1></a>`;
            } 
        }
    }

    function generaDomande () {
        start_panel.classList.add('none');
        question_panel.classList.remove('none');

    }

    