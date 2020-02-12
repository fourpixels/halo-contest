const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const symbols = ['2', '=', '1', '+'];
const statement = '1+1=2';

// const symbols = ['0', '='];
// const statement = '0=0';

function findNaturalNumber(alphabet, input) {
  let result = 1; // as we multiply
  
  const map = {};
  alphabet.forEach((s, index) => {
    map[s] = index + 1; // multiplication, non zero-based
  });


  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    result *= primes[i] ** map[char];
  }

  return result;
}

console.log(findNaturalNumber(symbols, statement));