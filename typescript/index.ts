// LSP principle states if S is subtype of T, then objects of type T can be replaced with objects of type S
// without altering any desirable properties of that program


abstract class Shape {
    abstract calculateArea() :number;
}

class Rectangle extends Shape {
    constructor(public width:number , public height : number){
        super();
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(public side : number){
        super()
    }
    calculateArea(): number {
        return this.side * this.side;
    }
}

function area(shape : Shape){
    return shape.calculateArea();
}

let rectangle : Rectangle = new Rectangle(10,12);
let square : Square = new Square(8);

console.log(area(rectangle))
console.log(area(square))

// real world implementation of LSP
// paymentProcessor
// credit card
// debit card
// paypal payment

abstract class PaymentProcessor {
    abstract processPayment(amount: number):void;
}

class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Credit Card payment`)
    }
}

class DebitCardProcessor extends PaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Debit Card payment`)
    }
}

class PaypalProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log('Paypal payment')
    }
}

// client code
function executePayment(paymentProcessor: PaymentProcessor, amount: number){
    paymentProcessor.processPayment(amount);
}

let Creditcard = new CreditCardProcessor();
let Debitcard = new DebitCardProcessor();

console.log(executePayment(Creditcard, 10));



