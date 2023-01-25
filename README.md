# typescript-student-challenges

A collection of short challenges to get used to coding with TypeScript.

Each challenge is designed to help you solve some common real-life problems. By the end of the challenges, you will have a collection of functions that can be used in your own projects.

## Getting started

The easiest place to try out this code is in the online TypeScript playground. Be aware that _your code will not save here_. Once you have completed a challenge, copy and save the code somewhere on your machine for future reference.

You will need to use your online research skills to find solutions to these problems. Think carefully about how you will word your searches to get the best results returned to you.

### 1. `minValue()` and `maxValue()`

Write two functions: `minValue` and `maxValue`. Both functions should take an array of numbers as an argument and return the lowest and highest numbers respectively. E.g.

```javascript
const numbers = [34, 12, 4, 9, 1265, 2];

console.log(minValue(numbers)); // -> 2
console.log(maxValue(numbers)); // -> 1265
```

### 2. `sumArrayValues()`

Write a function called `sumArrayValues` that takes an array of numbers as an argument. It should return the sum of all the numbers in the array, regardless of how many numbers it contains.

```javascript
console.log(sumArrayValues([1, 1, 1])); // -> 3
console.log(sumArrayValues([1, 2, 3])); // -> 6
console.log(sumArrayValues([1, 2, 3, 4, 5])); // -> 15
console.log(sumArrayValues([])); // -> 0
```

### 3. `titleCase()`

The `titleCase()` function should take a string as an argument, and return a new string where every word starts with a capital letter.

```javascript
console.log(titleCase("I'm a little teapot")); // "I'm A Little Teapot"
console.log(titleCase("SHORT AND STOUT")); // "Short And Stout"
console.log(titleCase("hERe's My hAnDlE")); // "Here's My Handle"
console.log(titleCase("here's my spout")); // "Here's My Spout"
```

### 4. `truncateString()`

`truncateString()` should take an object as an argument that contains two attributes: `text` which is a string, and `maxChars` which is an optional number value. `maxChars` should be set to a default value of 10.

It should return a string. If the `text` passed into the function has more characters than the `maxChars` value, any characters beyond this value should be replaced with an ellipsis ('...'). E.g.

```javascript
console.log(truncateString({ text: "Hello!" })); // -> "Hello!"
console.log(truncateString({ text: "Hello World!" })); // -> "Hello Worl..."
console.log(truncateString({ text: "Hello World!", maxChars: 20 })); // "Hello World!"
console.log(
  truncateString({ text: "Hello World! How are we today?", maxChars: 20 })
); // "Hello World! How are..."
```

### 5. `slugify()`

The `slugify()` function should take a string and return a URL friendly, 'slugified' version of it that is in lower case and has any spaces between words replaced with dashes:

```javascript
console.log(slugify("Hello World")); // -> "hello-world"
console.log(slugify("HELLO WORLD HOW ARE YOU")); // -> "hello-world-how-are-you"
```

#### 🚀 EXTRA CREDIT 1

Remove any white space from the start and end of the string:

```javascript
console.log(slugify("    HELLO WORLD HOW ARE YOU  ")); // -> "hello-world-how-are-you"
```

#### 🚀🚀 EXTRA CREDIT 2

Remove any non-alphanumeric characters (i.e. characters that are not letters or numbers) from the slugified string:

```javascript
console.log(slugifySecondCredit("  What's TypeScript all about?    ")); // -> "whats-typescript-all-about"
```

## Good luck! 🤓
