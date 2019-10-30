# Hometask 1

1. Write a Javascript program to create a new string which is n copies of a given string where n is a non-negative integer.  
  Sample Output:
  ```
    a
    aa
    aaa
    aaaa
    aaaaa
  ```

2. Write a Javascript program to check if a string starts with "if".  
  Sample Output:
  ```
    true
    false
  ```

3.  Write a Javascript program to check two non-negative integer values and return true if they have the same last digit

4. Write a programm which from inputed 4-digit number (e.g. 5154):

  - finds a sum of digits in the number (5141 is 5+1+4+1 = 11).
  - checks whether the number contains the same number twice (digit 1 appears 2 times)
  - checks whether the sum of first to digits equals the sum of second two digits (5141 → 5+1 = 6 and 4+1 = 5 → sums of first and second pair of digits are not equal)

  function may return an object with all results.

5. what would be the result of next statements:

  - [1, 2, 3] + {}
  - 1 + "3" - 2
  - 1 + ("3" - 2)
  - What would `a, b and c` equal?  
    ```javascript
      let a = 2;
      let b = a++;
      let c = ++a;
    ```

6. get type of `nn` in a lower case format:

  ```javascript
    const nn = new Promise((res, rej) => {
      setTimeout(() => res("done"), 1000);
    })
  ```
