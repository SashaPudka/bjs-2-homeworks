 //Задача 1//
 function parseCount (number) {

   if (isNaN(number)) {   
    throw new Error('Невалидное значение');
 }
 return Number.parseFloat(number);
}

function validateCount(number){
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

//Задача 2//
class Triangle {
    constructor(a, b, c) {
        if (a+b<c || a+c<b || b+c<a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
       this.a = a;
       this.b = b;
       this.c = c;
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let halfPerimeter = this.perimeter / 2;
        return Number((Math.sqrt(halfPerimeter*(halfPerimeter-this.a)*
        (halfPerimeter-this.b)*(halfPerimeter-this.c))).toFixed(3));
    }
}

function getTriangle(aLength, bLength, cLength) {
    try {
        return new Triangle(aLength, bLength, cLength);
    } catch (error) {
        return new Object ({
        get perimeter() {
            return 'Ошибка! Треугольник не существует';
        },
        get area() {
            return 'Ошибка! Треугольник не существует';
        }   
     })
   }
}
    