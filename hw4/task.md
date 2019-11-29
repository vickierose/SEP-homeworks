# Hometask 4

1. Turn given object into iterable so it was possible to loop through it via for...of construction.  
  Given object:  
  ```javascript
  let range = {
    from: 1,
    to: 10
  }
  ``` 
  Expected result:  
  ```javascript
    for (let num of range) {
      console.log(num) // logs out 1, then 2, then rest till 10
    }
  ```

2. Loop through iterable object created in task 1 and create an array which contains only odd numbers. Expected result:  
  ```javascript
    [1, 3, 5, 7, 9]
  ```

3. Create array which contains only even numbers from iterable created in task 1 with some other method than in task 2. Expected result:  
  ```javascript
    [2, 4, 6, 8, 10]
  ```

4. Write a function which accepts **any** number of arguments and returns a string in format `"argument [index]: [argument]; argument [index]: [argument];"`, e.g.`"argument 0: 1; argument 1: 4; argument 2: 79;"`. More vivid description:  
  ```javascript
    function argumentsLogger() {
      // your code
    }

    console.log(argumentsLogger(3, 6, 55, "some string")) // logs out "argument 0: 3; argument 1: 6; argument 2: 55; argument 3: some string;"
    console.log(argumentsLogger([1, 2], "xyz", 365)) // logs out "argument 0: 1,2; argument 1: xyz; argument 2: 365;"
    console.log(argumentsLogger()) // logs out ""
  ```

5. Few steps task:  
  a) go to https://rapidapi.com/ and log in via github, facebook or with some other way;  
  b) go to https://rapidapi.com/matchilling/api/chuck-norris You need `/jokes/random endpoint`. On the right side there's a section called **Code Snippet** The value of language dropdown should be **(Node.js) Unirest** (default one I guess):  
  ![Api panel that you need](chuckApi.png)  
  c) write a function which sends a Promise-based request to the given api and console.logs value of the response. You will need to add headers that you see in **Code Snippet** section to your request. Read the doc about `fetch` method. Oh, and don't forget to add `.catch` at the end of then chain.

6. Given object:  
  ```javascript
  const a = {
    apples: 2,
    grapefruits: 4,
    pineapple: 1
  }
  ```  
  Write a Proxy for this object which returns a string _"I have no such fruits"_ if there's no some property and the value of property if it's available:  
   ```javascript
    a.apples // 2
    a.oranges // "I have no such fruits"
  ``` 
