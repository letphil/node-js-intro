# Node.js Terminal Exercises

## Exercise 1: Hello World

Write a Node.js program that outputs "Hello, World!" to the console.

## Exercise 2: Command Line Arguments

Create a program that accepts command line arguments and prints them to the console.
Example: `node args.js hello world` should print out the arguments "hello" and "world".

```js
// args.js
const args = process.argv.slice(2);
console.log(args);
```

## Exercise 3: Basic Calculator

Write a program that takes three command line arguments: two numbers and an operation (+, -, \*, /), then performs the calculation and prints the result.

## Exercise 4: Number Guessing Game

Create a simple number guessing game where the program picks a random number between 1 and 100, and the user tries to guess it.

## Exercise 5: Palindrome Checker

Write a program that checks if a string provided as a command line argument is a palindrome (reads the same backward as forward).

## Exercise 6: File Reader

Create a program that reads the contents of a text file provided as a command line argument and prints them to the console.

## Exercise 7: Word Counter

Write a program that reads a text file and counts the number of words in it.

## Exercise 8: FizzBuzz

Implement the classic FizzBuzz program: print numbers from 1 to n (provided as command line argument), but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".

## Exercise 9: CSV Parser

Create a program that reads a CSV file and prints each row as a JavaScript object.

## Exercise 10: Directory Lister

Write a program that lists all files in a directory provided as a command line argument.

## Exercise 11: Prime Number Checker

Create a program that checks if a number provided as a command line argument is prime.

## Exercise 12: String Reverser

Create a program that reverses a string provided as a command line argument.

## Exercise 13: Temperature Converter

Write a program that converts temperatures between Celsius and Fahrenheit. The user should provide the temperature and the unit to convert from.

## Exercise 14: Simple HTTP Server

Create a basic HTTP server that responds with "Hello, World!" for all requests.

## Exercise 15: URL Parser

Write a program that takes a URL as a command line argument and prints its different components (protocol, hostname, path, etc.).

## Exercise 16: JSON Manipulator

Create a program that reads a JSON file, modifies some values, and writes it back to a new file.

## Exercise 17: Email Validator

Write a program that validates whether a string provided as a command line argument is a valid email address.

## Exercise 18: Array Sorter

Create a program that sorts an array of numbers or strings provided as command line arguments.

## Exercise 19: Simple Task List

Write a program that allows users to add, view, and complete tasks in a simple task list stored in a text file.

Each exercise can be solved using core Node.js modules and basic JavaScript knowledge, making them suitable for novice programmers while still providing a good challenge.
