//importazione funzione da un altro file
// esempio: import {} from "sorgente"
import {performOperation} from "./core/math/performOperation.js";
import { MyLog } from "./core/log/log.js";

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



