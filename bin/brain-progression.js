#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
const massiv = (a, b, c) => {
  const arr = [a];
  let f = a;
  for (let i = 0; i < c; i += 1) {
    f += b;
    arr.push(f);
  }
  return arr;
};

const viborka = (mass, d) => {
  const arr = [];
  const leng = mass.length;
  for (let i = 0; i < leng; i += 1) {
    if (i === d) {
      arr.push('..');
    } else {
      arr.push(mass[i]);
    }
  }
  return (arr);
};

const even = (a, b) => {
  if ((a - b) !== 0) {
    return (false);
  } return (true);
};

for (let i = 1; i < 4; i += 1) {
  const a = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const b = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const c = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
  const d = Math.floor(Math.random() * (c - 1 + 1)) + 1;
  const rez = massiv(a, b, c);
  const vi = viborka(rez, d).join(' ');
  const ch = rez[d];
  console.log(`Question: ${vi}`);
  const otv = readlineSync.question('Your answer:');
  if ((even(ch, otv)) === false) {
    console.log(`'${otv}' is wrong answer ;(. Correct  answer was '${ch}'.\nLet's try again, ${name}!`);
    break;
  }
  console.log('Correct!');
  if (i > 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
