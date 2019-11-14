# Homework 3

:warning: **NOTE** :warning: If you create more than one file, please create a **folder** with your name and perform your work inside of it in order not to produce a mess with files.

1. write a constructor function `PersonFunc` which accepts the person data like in file `people.data.js` and implements next methods:  
  - getFullName() => returns string in format `"[FirstName] [LastName]"`, e.g. _'Viktoriia Chernyshuk'_;
  - getAge() => returns age of person in format `"[number] years"`, e.g. _"25 years"_;
  - getFullAddress() => returns address string in format `"[country], [city], [street], [house]/[apartment]"`. Field `apartment` is optional. E.g. _"Ukraine, Lviv, Doroshenka street, 5/8"_ and _"Ukraine, Lviv, Muchna street, 7"_.

  Please implement error handling in case if some fields are not available.

2. write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and implements additional method:  
  - getProfessionalNameAndRank() => returns string in format `"[FirstName] [LastName], [job title], job experience [job experience duration] years"`, e.g. _"Viktoriia Chernyshuk, Front-end developer, job experience 2.5 years"_.

  Please implement error handling in case if some fields are not available.

3. write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function. Don't forget to implement error handling in case if some fields are not available here as well.

4. write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`. Don't forget to implement error handling in case if some fields are not available here as well.

5. create a few instances of each class and call the methods to check whether they work correctly. You can use objects from `people.data.js` for check.
