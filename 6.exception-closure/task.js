 //Задача 1//
 function parseCount (number) {

   if (isNaN(number)) {         //если написать (number === NaN), почему это не одно и тоже//
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
    getPerimeter(){
        let Perimeter = this.a + this.b + this.c;
      return Perimeter;
    } 
    getArea(){
        let halfPerimeter = (this.a + this.b + this.c) / 2;
        return Number(Math.sqrt(halfPerimeter*(halfPerimeter-this.a)*
        (halfPerimeter-this.b)*(halfPerimeter-this.c))).toFixed(3);
    }
}

function getTriangle(aLength, bLength, cLength) {
    try {
        return new Triangle(aLength, bLength, cLength);
    } catch (error) {
        return new Object ({
        getPerimeter() {
            return 'Ошибка! Треугольник не существует';
        },
        getArea() {
            return 'Ошибка! Треугольник не существует';
        }   
     })
   }
}
    