#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const d = (c) => {
  if (c < 4) {
    return '*';
  }
  if (c < 7) {
    return '+';
  }
  return '-';
};
const raschet = (a, b, c) => {
  if (c < 4) {
    return a * b;
  }
  if (c < 7) {
    return a + b;
  }
  return a - b;
};
const even = (a, b) => {
  if ((a - b) !== 0) {
    return false;
  } return true;
};
for (let i = 1; i < 4; i += 1) {
  const a = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const b = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const c = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  console.log(`Question: ${a} ${d(c)} ${b}`);
  const rez = raschet(a, b, c);
  const otv = readlineSync.question('Your answer:');
  if ((even(rez, otv)) === false) {
    console.log(`${otv} is wrong answer ;(. Correct answer was ${rez}.\nLet's try again, ${name}!`);
    break;
  }
  console.log('Correct!');
  if (i > 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
