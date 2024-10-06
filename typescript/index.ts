interface Shape {
    area(): number;
    perimeter() : number;
}

class Circle implements Shape {
    constructor(private radius:number){}
    area(): number{
        return Math.PI* this.radius * this.radius
    }
    perimeter(): number {
        return 2*Math.PI*this.radius;
        
    }
}

class Rectangle implements Shape {
    constructor(private width:number, private height:number){}
    area():number{
        return this.width * this.height
    }
    perimeter(): number {
        return 2* (this.width + this.height)
    }
}

// here i will implement abstraction
function calculateArea(shape: Shape):number {
   return shape.area()
}

let circle = new Circle(3);
let rectangle = new Rectangle(4,6);

console.log(calculateArea(circle));
console.log(calculateArea(rectangle));



