/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES6), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum(){
        return this.a + this.b; 
    }

    subtraction() {
        return this.a - this.b;
    }

    multiplication() {
        return this.a * this.b;
    }

    division() {
        return this.a / this.b;
    }
}

const counting1 = new Calculator(20, 10);
console.log("Sum:", counting1.sum());
console.log("Subtraction:", counting1.subtraction());
console.log("Multiplication:", counting1.multiplication());
console.log("Division:", counting1.division());