let result = 0;

//Array <HTMLButtonElement>
let allBtn = document.querySelectorAll("button");

allBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (event) => {
        console.log(event.target);
    });
});


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}


