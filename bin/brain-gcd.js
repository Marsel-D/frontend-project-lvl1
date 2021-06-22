#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
console.log('Find the greatest common divisor of given numbers.')

  const min = (a,b)=>{
   if (a < b){
    return a;
    }
   return b; 
   };
  const nod = (a,b)=>{
   for (let i = min(a,b);i>0;i=i-1){
    if ((a % i) === 0 & (b % i) === 0){
      return i;
       break;
    }
   };
  }; 
  
  const even =(a,b)=>{
   if ((a-b) !== 0){
     return (false);
    }
   else {
     return (true);
    }
  };
 
  for (let i=1; i < 4 ;i=i+1){
  const a =  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const b =  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log('Question: ' + a +' '+ b);
   const rez = nod(a,b);
   //console.log(rez);
   const otv = readlineSync.question('Your answer:');
    if((even(rez,otv)) === false){
     console.log("'"+otv+"'" + " is wrong answer ;(. Correct answer was "+"'"+rez+"'" + ".\nLet's try again, "+ name);
     break;
     };
  console.log("Correct!");
  if (i > 2){
  console.log("Congratulations, " + name +"!");
  }
 };



