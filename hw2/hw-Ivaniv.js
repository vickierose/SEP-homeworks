//task 2
function sumArrElements() {
    let arr =[12, 34, 23, 56];
    for(let i=0; i<=arr.length; i++) {
        let sum += arr[i];
    }
    return sum;
}

//task 4
function factorial(x) {
 if (x <= 1) return 1;
 return x * factorial(x - 1);
}