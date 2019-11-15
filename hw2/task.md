# Hometask 2

1. Write a Javascript program to pick a number of random elements from a given array. Sample Output:  
  ```
    Original array:
    [12, 34, 23, 56]
    2 random elements from the array.
    [34, 12]
    3 random elements from the array.
    [56, 12, 34]
  ```

2. Write a Javascript program to compute the sum of elements in a given array. Sample output:  
  ```
    Original array:
    [12, 34, 23, 56]
    Sum of the values of the above array:
    125
  ```

3. Write a Javascript program to split a delimited string into an array. Sample output:  
  ```
    Original delimited string:
    Red, Green, Blue, White1, 3, 4, 5, 7String to array:
    ["Red", " Green", " Blue", " White"]
    [1, 3, 4, 5, 7]
  ```

4. write a function which returns a factorial of a given number with loop and recursive function. Sample output:  
  ```
    getFactorial(5) => 120
  ```

5. write a function which returns a Fibonacci value for a given number with loop and recursive function. Sample output:  
  ```
    getFibonacci(10) => 55
  ```

6. think and write the results of all console logs (without running code in console please :smiling_imp: ):  
  ```javascript
  let car = "audi";
  let bike = "cannondale";

  function log () {
    let bike = "specialized";
    car = "jeep";
    
    function inner () {
      let plane = "boeing";
      console.log(car);
      console.log(bike);
      console.log(plane);
    }
    console.log(inner);
    return inner; 
  }

  console.log(car);
  console.log(bike);

  var logger = log();
  logger();
  
  console.log(car);
  console.log(bike);
  inner();
  ```