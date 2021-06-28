#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const min = (aa, bb) => {
  if (aa < bb) {
    return aa;
  }
  return bb;
};
const nod = (a, b) => {
  let nd = 0;
  for (let i = min(a, b); i > 0; i -= 1) {
    if ((a % i) === 0 && (b % i) === 0) {
      nd = i;
      break;
    }
  }
  return nd;
};

const even = (a, b) => {
  if ((a - b) !== 0) {
    return (false);
  }
  return (true);
};

for (let i = 1; i < 4; i += 1) {
  const a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log(`Question: ${a} ${b}`);
  const rez = nod(a, b);
  const otv = readlineSync.question('Your answer:');
  if ((even(rez, otv)) === false) {
    console.log(`'${otv}' is wrong answer ;(. Correct answer was '${rez}'.\nLet's try again, ${name}!`);
    break;
  }
  console.log('Correct!');
  if (i > 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
