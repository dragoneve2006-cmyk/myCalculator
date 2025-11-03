//AGGIUNTA MEMORIA INTERNA
export function MyLog(a, b, operation,){
    this.val1 = a;
    this.val2 = b;
    this.operation = operation;
    
    this.fnLoad = () => {
        console.log("LOAD", this.val1, this.operation, this.val2);
        val1.value = this.val1;
        val2.value = this.val2;

    }
} 
