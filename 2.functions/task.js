'use strict'

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    if (arr[i]>max) {
      max = arr[i]
    }
      else if (arr[i]<min) {
        min = arr[i]
      }
  }
  avg = Number((sum/arr.length).toFixed(2))

  return {min: min, max: max, avg: avg};
}
 
getArrayParams();

//2 задача//

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
return sum;
}


function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if(arr.length===0) return 0;

    for (let i=0; i<arr.length; i++) {
      if (arr[i]<min) {
        min = arr[i];
      }
        else if (arr[i]>max) {
          max = arr[i];
        }
    }
  return max-min;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if(arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2===0) {
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement-sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity; //максимальный результат//
let num;
let resultat;

  if (arrOfArr.length === 0) return 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    num = arrOfArr[i];
    resultat = func(...num);
    if (resultat>maxWorkerResult) maxWorkerResult = resultat;
  }

    return maxWorkerResult;
}