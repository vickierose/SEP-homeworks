// 1

copieString = (str, n) => {
    if (n > 0) {
        let arr = [];
        const copyStr = str.slice();
        for (let i = 0; i < n; i++) {
            arr.push(copyStr);
        }
        return arr.join('');
    } else {
        return 'Only positive numbers !';
    }
}

console.log(copieString('go', 5));

// 2

isThereIf = (str) => {
    let arr = str.split('');
    const i = 'i';
    const f = 'f';
    if (arr[0] === i && arr[1] === f) {
        return true
    } else {
        return false
    }
}

console.log(isThereIf('if is there'));
console.log(isThereIf('there is no if'));

// or

isThereIf2 = (str) => {
    const f = str.slice(0, 2)
    return f.includes('if');
}

console.log(isThereIf2('if is there'));

// 3

lastDigit = (int1, int2) => {
    if (int1 > 0 && int2 > 0) {
        const num1 = int1.toString().split('');
        const num2 = int2.toString().split('');
        if (num1.pop() === num2.pop()) {
            return true;
        } else {
            return false;
        }  
    } else {
        return 'Only positive numbers !';
    }
}

console.log(lastDigit(12, 5432));
console.log(lastDigit(123, 5432));

// 4

checkNumber = (n) => {
    const strN = n.toString();
    if (strN.length === 4) {
        const res = {
            sum: addNumbers(n),
            same: sameNumbers(n),
            firstLastSame: sameHalf(n)
        };

        addNumbers = (n) => {
            const num = n.toString().split('');
            let result = [];
            num.forEach(function(i){
                result.push(+i)
            })
            return result.reduce((sum,current) => sum + current);
        }

        sameNumbers = (n) => {
            const num = n.toString().split('').sort();
            for (let i = 0; i < num.length; i++) {
                if (num[i] == num[i + 1]) {
                    return `There is a double digit: ${num[i]}`;
                }
            }
            return 'There is no double digit';
        }

        sameHalf = (n) => {
            let number = n.toString().split('');
            let firstHalf = +number[0] + +number[1];
            let secondHalf = +number[2] + +number[3];
            if (firstHalf == secondHalf) {
                return 'Same halves !';
            }else {
                return 'Different halves !';
            }
        }

        return res;
    }else {
        return 'You can use only four-digit number !'
    }
 
}

console.log(checkNumber(5436));
console.log(checkNumber(5456));
console.log(checkNumber(54565));

// or

class Number {
    constructor(number) {
        this.number = number;
    }

    checkFourDiggitNumber = () => {
        const strN = this.number.toString();
        if (strN.length === 4) {
            const res = {
                sum: this.addNumbers(this.number),
                same: this.sameNumbers(this.number),
                firstLastSame: this.sameHalf(this.number)
            };
            return res
        }
    }

    addNumbers = () => {
        const num = this.number.toString().split('');
        let result = [];
        num.forEach(function(i){
            result.push(+i)
        })
        return result.reduce((sum,current) => sum + current);
    }

    sameNumbers = () => {
        const num = this.number.toString().split('').sort();
        for (let i = 0; i < num.length; i++) {
            if (num[i] == num[i + 1]) {
                return `There is a double digit: ${num[i]}`;
            }
        }
        return 'There is no double digit';
    }

    sameHalf = () => {
        const number = this.number.toString().split('');
        let firstHalf = +number[0] + +number[1];
        let secondHalf = +number[2] + +number[3];
        if (firstHalf == secondHalf) {
            return 'Same halves !';
        }else {
            return 'Different halves !';
        }
    }
}

let aNumber = new Number(1234);

console.log(checkFourDiggitNumber(aNumber));

// 5

const statement1 = [1, 2, 3] + {}; // 1,2,3[object Object]

const statement2 = 1 + '3' - 2; // 11

const statement3 = 1 + ('3' - 2); // 2

let a = 2; // 4
let b = a++; // 2
let c = ++a; // 4

// 6

checkDataType = (i) => {
    return Object.prototype.toString.call(i).toLowerCase();
}

const nn = new Promise((res, rej) => {
    setTimeout(() => res("done"), 1000);
})

console.log(checkDataType(nn))

// or

checkDataType2 = (i) => {
    if(i != null && typeof i.then === 'function') {
        return 'promise';
    }else {
        return 'not a promise'
    }
}

console.log(checkDataType2(nn))

