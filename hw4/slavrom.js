// 1

let range = {
  from: 1,
  to: 10
}

range[Symbol.iterator] = function() {
  return {
    i: 1,
    next() {
      if (this.i <= 10) {
        return { value: this.i++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

for (let num of range) {
  console.log(num)
}

// or

range[Symbol.iterator] = function* () {
  let index = 1;
  while (index <= 10) {
    yield index++;
  }
}

for (let num of range) {
  console.log(num)
}

// 2

oddNum = (num) => {
  num = [...num];
  let odd = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2) {
      odd.push(num[i]);
    }
  }
  return console.log(odd);
}

oddNum(range)

// 3 

evenNum = (num) => {
  num = [...num];
  return console.log(num.filter(function(val) {return val % 2 === 0}));
}

evenNum(range);

// 4

function argumentsLogger () {
  let arr = [...arguments];
  let res = '';
  arr.forEach((element, index) => {
    res += `argument ${index}: ${element}; `;
  });
  return res;
}

console.log(argumentsLogger(3, 6, 55, "some string"));

// 5

promise = () => {
  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': '7443f138b0msh5af429f3ea3490cp188a52jsn925470e1f5b8',
      'accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => console.log(res.value))
  .catch(err => {
    console.log(err);
  })
}

promise();

// 6

const a = {
  apples: 2,
  grapefruits: 4,
  pineapple: 1
}

let proxy = new Proxy(a, {
  get (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 'There is no such fruit';
    }
  }
});

console.log(proxy.apples)