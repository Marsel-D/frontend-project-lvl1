#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
console.log('What is the result of the expression?')
const d = (c)=> {
 let oper = [];
  if (c < 4 ) {
   return "*"}
   else if (c < 7){
   return  "+";
   }
   return '-';
  };
  const raschet = (a,b,c)=>{
  if (c < 4 ) {
   return a * b;
   }
   else if (c < 7){
   return a + b;
   }
   return a - b;
   };
  
  const even =(a,b)=>{
  if ((a-b) !== 0){
    return (false);
    }
   else {return (true);
    console.log(10);}
  };
 
  for (let i=1; i < 4 ;i=i+1){
  const a =  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const b =  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const c = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const f = d(c);
  console.log('Question: ' + a + f + b);
   const rez = raschet(a,b,c);
   const otv = readlineSync.question('Your answer:');
    if((even(rez,otv)) === false){
     console.log("'"+otv+"'" + " is wrong answer ;(. Correct answer was "+"'"+rez+"'" + ".\nLet's try again, "+ name+"!");
     break;
     };
  console.log("Correct!");
  if (i > 2){
  console.log("Congratulations, " + name +"!");
  }
 };



