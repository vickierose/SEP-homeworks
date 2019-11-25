// 1
let range = {
  from: 1,
  to: 10,

  [Symbol.iterator]: function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (let num of range) {
  console.log(num);
}

// 2
let arrayNumbers = Array.from(range)
let oddNumbers = arrayNumbers.filter(x => x % 2 !== 0);
console.log(oddNumbers);

// 3
let evenNumbers = [];
for (let number of arrayNumbers) {
  if (number % 2 == 0) {
    evenNumbers.push(Number(number));
  }
}
console.log(evenNumbers);

// 4
function argumentsLogger(...args) {
  let arrayArgs = [...args];
  let str = '';
  for (let arg in arrayArgs) {
    str += `argument ${arg}: ${arrayArgs[arg]}; `
  }
  if (!str) {
    return `""`;
  }
  return str
}

console.log(argumentsLogger(3, 6, 55, "some string"));
console.log(argumentsLogger([1, 2], "xyz", 365));
console.log(argumentsLogger());

// 5
function fetchAPI() {
  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
    headers: {
      "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      "x-rapidapi-key": "fb462bd358msh99328e5b3d1197ap1d0fb9jsn9c6ce160e3b3",
      "accept": "application/json"
    }
  })
    .then(result => result.json())
    .then(data => console.log(data.value))
    .catch(error => console.log(error))
}
fetchAPI()

// 6
const a = {
  apples: 2,
  grapefruits: 4,
  pineapple: 1
}

const aProxy = new Proxy(a, {
  get: function (obj, prop) {
    if (prop in obj) {
      return obj[prop]
    } else {
      return `I have no such fruits`
    }
  }
})

console.log(aProxy.apples);
console.log(aProxy.oranges)