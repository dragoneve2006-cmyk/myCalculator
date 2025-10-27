//Array <HTMLButtonElement>
let allBtn = document.querySelectorAll("button");

//Add new variable
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");

let result = document.getElementById("result");

let memory = document.getElementById("memory");


//Getting the input from the button and printing it
//in the console to get a feedback
allBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (event) => {
        console.log(event.target.attributes);
        console.log(val1);
        
        let a = parseFloat(val1.value);
        let b = parseFloat(val2.value);
        
        if(isNaN(a) || isNaN(b)){
            result.innerText = "Error: inserire numeri validi";
            return;
        }

        let operation = event.target.attributes["operation"].value;
        let res = performOperation(a, b, operation);
        result.innerText = "Result " + res;

        if(res instanceof Error){
            result.innerText = "Error " + res.message;
        }else{
            result.innerText = "Result " + res;
            
            let myLog = new MyLog(a, b, operation);
            //creating list for log of the inner memory
            let btnLoad = document.createElement("button");
            btnLoad.innerText = "LOAD";
            btnLoad.addEventListener("click", myLog.fnLoad);
            btnLoad.className += "btnLoad";

            let logLine = document.createElement("li");
            logLine.innerText = `Eseguito ${myLog.val1} ${myLog.operation} ${myLog.val2}`;
            logLine.append(btnLoad);

            memory.appendChild(logLine);
        }
        console.log(result); 
    });
});

//DOCUMENTAZIONE PER FUNZIONE
/**
 * Esegue l'operazione tra a e b
 * @param {*} a {number}
 * @param {*} b {number}
 * @param {*} operation {string} L'operazione da eseguire : + - * / 
 * @returns {number | Error}
 */
function performOperation(a, b, operation){
    switch(operation){
        case "+":
            return add(a, b);
        case "-":
            return sub(a, b);
        case "*":
            return mult(a, b);
        case "/":
            return div(a ,b);
        default:
            return Error("⚠️ Operation Not Valid ⚠️");
    }
}


//FUNZIONI
function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}


//AGGIUNTA MEMORIA INTERNA
function MyLog(a, b, operation){
    this.val1 = a;
    this.val2 = b;
    this.operation = operation;

    this.fnLoad = () => {
        console.log("LOAD", this.val1, this.val2);
        val1.value = this.val1;
        val2.value = this.val2;
    }
} 


