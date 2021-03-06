import readlineSync from 'readline-sync';

const prime = (name) => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const simple = (a) => {
    let result = 0;
    for (let i = a; i >= 0; i -= 1) {
      if (a === 1) {
        return 'no';
      }

      if ((a % i) === 0) {
        result += 1;
      }
    }
    if (result <= 2) {
      return 'yes';
    }
    return 'no';
  };

  const even = (a, b) => {
    if (a !== b) {
      return (false);
    }
    return (true);
  };

  for (let i = 1; i < 4; i += 1) {
    const a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const rez = simple(a);
    console.log(`Question: ${a}`);
    const otv = readlineSync.question('Your answer:');
    if ((even(rez, otv)) === false) {
      console.log(`'${otv}' is wrong answer ;(. Correct  answer was '${rez}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i > 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default prime;
