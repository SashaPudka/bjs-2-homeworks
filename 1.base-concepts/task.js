"use strict"
//ax2+bx+c=0//
function solveEquation(a, b, c) {
  let arr = [];
  let firstItem;
  let secondItem;
  const d = Math.pow(b,2) - 4*a*c;
  
  if (d<0) {
    arr = [];
    }
    else if (d === 0) {
      firstItem= - b/(2*a);
      arr.push(firstItem)
    }
    else if (d>0) {
      firstItem= ( - b + Math.sqrt(d) )/(2*a);
      secondItem= ( - b - Math.sqrt(d) )/(2*a);
      arr.push(firstItem, secondItem)
    }
  return arr;
}

solveEquation(1, 2, 1);



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100/12;
  let S = amount - contribution; //сумма кредита минус первоначальный взнос)//

  let montlyPayment = S * (percent + (percent / (((1 + percent)**(countMonths)) - 1)));

  let totalPayment = countMonths * montlyPayment; //общая сумма//

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}

calculateTotalMortgage(10, 0, 50000, 12);

