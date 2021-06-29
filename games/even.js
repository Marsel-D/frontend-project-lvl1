import readlineSync from 'readline-sync';

const even = (name) => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const b = (a) => {
    if ((a % 2) > 0) {
      return ('no');
    }
    return ('yes');
  };
  const evenn = (otv, a) => {
    if (b(a) !== otv) {
      return false;
    }
    return true;
  };
  for (let i = 1; i < 4; i += 1) {
    const a = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    console.log(`Question: ${a}`);
    const otv = readlineSync.question('Your answer: ');
    if (evenn(otv, a) === false) {
      console.log(`'${otv}' is wrong answer ;(. Correct answer was '${b(a)}' .\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i > 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default even;
