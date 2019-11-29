// task1
let range = {
    from: 1,
    to: 10
};

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

//task2
let arr = Array.from(range)
let newArr = arr.filter(x => x % 2 !== 0);
console.log(newArr);


//task3
function evenNumber(num) {
    num = [...num];
    return num.filter(function (val) { return val % 2 === 0 });
}

console.warn(evenNumber(range));

//task4
function argumentsLogger() {
    let array = [...arguments];
    let result = '';
    arr.forEach((el, ind) => {
        result += 'argument' + ind + ':' + el;
    });
    return result;
}

console.warn(argumentsLogger(3, 6, 55, 'some string'));

//task5 
function myFetch() {
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
        headers: {
            "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "x-rapidapi-key": "fb462bd358msh99328e5b3d1197ap1d0fb9jsn9c6ce160e3b3",
            "accept": "application/json"
        }
    })
        .then(result => result.json())
        .then(data => console.warn(data.value))
        .catch(error => console.warn(error))
}
myFetch()

//task6
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

console.warn(aProxy.apples);
console.warn(aProxy.oranges)