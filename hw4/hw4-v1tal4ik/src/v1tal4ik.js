// 1. Turn given object into iterable so it was possible to loop through it via for...of construction.
const range = {
  from: 1,
  to: 10,
};

range[Symbol.iterator] = function () {
  let currentValue = this.from;
  const lastValue = this.to;

  return {
    next() {
      if (currentValue <= lastValue) {
        return {
          done: false,
          value: currentValue++,
        };
      }
      return { done: true };
    },
  };
};

for (const value of range) {
  console.log(value);
}


// 2. Loop through iterable object created in task 1 and create an array which contains only odd numbers. Expected result:
const arrOfOddNumbers = [];
for (const value of range) {
  (value % 2 !== 0) ? arrOfOddNumbers.push(value) : null;
}

console.log(arrOfOddNumbers);


// 3. Create array which contains only even numbers from iterable created in task 1 with some other method than in task 2. Expected result:
const arrOfEvenNumbers = Array.from(range, (item) => (item % 2 === 0 ? item : null)).filter((item) => item !== null);

console.log(arrOfEvenNumbers);


// 4. Write a function which accepts **any** number of arguments and returns a string in format `"argument [index]: [argument]; argument [index]: [argument];"`, e.g.`"argument 0: 1; argument 1: 4; argument 2: 79;"`. More vivid description:
function argumentsLogger() {
  const arr = [...arguments];
  let str = '';
  arr.forEach((el, index) => {
    str += `argument ${index}: ${el}, `;
  });
  return str;
}

console.log(argumentsLogger(12, 22, 3, 4, 56));

// 5. Write a function which sends a Promise-based request to the given api and console.logs value of the response. And don't forget to add `.catch` at the end of then chain.
function getData() {
  return fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
    headers: {
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': 'dd782d9f42mshe3e0e4824313a65p1714efjsn29bcb78191c8',
      accept: 'application/json',
    },
  });
}

getData()
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 6. Write a Proxy for this object which returns a string _"I have no such fruits"_ if there's no some property and the value of property if it's available:
let obj = {
  apples: 2,
  grapefruits: 4,
  pineapple: 1,
};

obj = new Proxy(obj, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return 'I have no such fruits';
  },
});


console.log(obj.apples);
console.log(obj.foo);

export {
  range,
  arrOfOddNumbers,
  arrOfEvenNumbers,
  argumentsLogger,
  obj,
};
