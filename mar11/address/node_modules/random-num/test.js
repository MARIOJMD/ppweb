import test from 'ava';
import randomNum from './';

test('Generate a random number from 1 to 100', t => {
  const testNumber = randomNum(1,100);
  console.log(testNumber);
  if (testNumber >= 1 && testNumber <= 100) {
    t.pass(['Nooooice']);
  } else {
    t.fail();
  }
});