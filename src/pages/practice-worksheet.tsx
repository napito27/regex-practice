import React from "react";

function PracticeWorksheet() {
  const patterns = {
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,8})?$/i,
    phone: /^(\d{3})-?(\d{3})-?(\d{4})?$/,
    letterMatch: /[a-zA-Z]{1,}/gim,
    catMatch: /cat[\w]+/gim,
    dateFormat: /^(\d{4})-(\d{2})-(\d{2})$/gim,
    stringWithDigits: /^(?=.*\d).+$/gim,
  };

  return (
    <>
      <label htmlFor='email'>Email </label>
      <input type='email' name='email' id='email' />
      <p>Email must be a valid address, e.g. me@domain.com</p>

      <label htmlFor='phone'>Phone </label>
      <input type='text' name='phone' id='phone' />
      <p>Telephone number must be 10 digits</p>
    </>
  );
}

export default PracticeWorksheet;

// Exercise 1:
// Write a regular expression to match a valid email address.
// example@example.com
// john.doe1234@gmail.com
// user_name1234@domain.co.uk
// Non-valid emails
// nvalid_email.com
// john.doe@gmail
// @example.com

// Exercise 2:
// Write a regular expression to match a 10-digit phone number (with or without dashes).
// Valid Phone Numbers:
// With dashes: 123-456-7890
// Without dashes: 5551234567
// With dashes: 987-654-3210
// Invalid Phone Numbers:
// 123456789
// 555-123-45678
// 987-6543-210

// Exercise 3:
// Write a regular expression to match a string that contains only letters (upper and lower case).
// Correct Data:
// "Hello"
// "World"
// "RegularExpressions"
// Incorrect Data:
// "123"
// "hello123"
// "Hello123"

// Exercise 4:
// Write a regular expression to match a string that starts with "cat" followed by any word characters.
// Correct Data:
// "catdog"
// "cat123"
// "cathello"
// Incorrect Data:
// "dogcat"
// "catch"
// "cat!@#"

// Exercise 5:
// Write a regular expression to match a date in the format "YYYY-MM-DD".
// Correct Data:
// "2022-01-31"
// "1999-12-25"
// "2023-07-15"
// Incorrect Data:
// "31-01-2022"
// "25/12/1999"
// "07/15/2023"

// Exercise 6:
// Write a regular expression to match a string that contains at least one digit.
// Correct Data:
// Hello123
// 123World
// RegularExpressions2022
// Incorrect Data:
// HelloWorld
// RegularExpressions
// hello

// Exercise 7:
// Write a regular expression to match a string that contains at least one special character (!@#$%^&*).
// Correct Data:
// "Hello!World"
// "123!@#456"
// "Regex%^&*Test"
// Incorrect Data:
// "HelloWorld"
// "123456789"
// "RegexTest"

// Exercise 8:
// Write a regular expression to match a string that contains only alphanumeric characters.
// Correct Data:
// "Hello123World"
// "123456789"
// "RegexTest2022"
// Incorrect Data:
// "Hello!World"
// "123!@#456"
// "Regex%^&*Test"

// Exercise 9:
// Write a regular expression to match a string that contains the word "hello" followed by one or more spaces and then "world".
// Correct Data:
// "hello world"
// "hello world"
// "hello world"
// Incorrect DataCorrect Data:
// "Python"
// "Alaska"
// "Mangoes"
// Incorrect Data:
// "Java"
// "Banana"
// "Oranges"
// "helloworld"
// "world hello"
// "hello 123 world"

// Exercise 10:
// Write a regular expression to match a string that contains a word with exactly six letters.
