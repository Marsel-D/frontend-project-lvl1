#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
console.log('What number is missing in the progression?')
const massiv =(a,b,c)=>{
 const arr = [a];
 let f = a ;
    for (let i = 0; i < c; i= i+1){
      f = f + b;
      arr.push(f)
    };
 return arr;
 console.log(arr)
};  
 
const viborka =(massiv,d)=> {
  const arr = [];
  for (let i = 0; i < massiv.length;i=i+1){
   if (i === d){
     arr.push('..');
    continue;
   };
   arr.push(massiv[i]);
  }
   return(arr) 
};
  
const even =(a,b)=>{
  if ((a-b) !== 0){
    return (false);
    }
   else {return (true);
    }
};
 
for (let i=1; i < 4 ;i=i+1){
  const a =  Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const b =  Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const c = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
  const d = Math.floor(Math.random() * (c - 1 + 1)) + 1;
  const rez = massiv(a,b,c);
  const vi = viborka(rez,d).join(' ');
  const ch =rez[d];
  console.log('Question: ' + vi);
  const otv = readlineSync.question('Your answer:');
  if((even(ch ,otv)) === false){
     console.log("'"+otv+"'" + " is wrong answer ;(. Correct  answer was "+"'"+ch+"'" + ".\nLet's try again, "+ name+"!");
     break;
   };
  console.log("Correct!");
  if (i > 2){
  console.log("Congratulations, " + name +"!");
  }
};



