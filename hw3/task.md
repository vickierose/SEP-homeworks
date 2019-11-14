# Homework 3

:warning: **NOTE** :warning: If you create more than one file, please create a **folder** with your name and perform your work inside of it in order not to produce a mess with files.

1. write a constructor function `PersonFunc` which accepts the person data like in file `people.data.js` and implements next methods:  
  - getFullName() => returns string in format "[FirstName] [LastName]", e.g. 'Viktoriia Chernyshuk';
  - getAge() => returns age of person in format "[number] years", e.g. "25 years";
  - getFullAddress() => returns address string in format "[country], [city], [street], [house]/[apartment]". Field `apartment` is optional. E.g. "Ukraine, Lviv, Doroshenka street, 5/8" and "Ukraine, Lviv, Muchna street, 7".

  Please implement error handling in case if some fields are not available.

2. write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and implements additional method:  
  - getProfessionalNameAndRank() => returns string in format "[FirstName] [LastName], [job title], job experience [job experience duration] years", e.g. "Viktoriia Chernyshuk, Front-end developer, job experience 2.5 years".

  Please implement error handling in case if some fields are not available.

3. write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function. Don't forget to implement error handling in case if some fields are not available here as well.

4. write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`. Don't forget to implement error handling in case if some fields are not available here as well.

5. create a few instances of each class and call the methods to check whether they work correctly. You can use objects from `people.data.js` for check.
