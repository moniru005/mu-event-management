<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>`ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: B

<i>he problem in this code is in the variable name, here declared a variable called greeting, but then you assigned an empty object to a variable called greetign. The code will declare a variable greeting, assign an empty object to it, and then log the empty object to the console.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>`"12"`</b></summary>
<p>

#### Answer: C

<i>Tt converts the number 1 to a string and then performs string concatenation because the + operator is used for both addition and string concatenation in JavaScript. So, "1" and "2" are concatenated together, resulting in the string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>`['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: A

<i>The food array still contains the same elements it had initially, and changing the value of info.favoriteFood doesn't affect the food array itself.





</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>`Hi there, undefined`</b></summary>
<p>

#### Answer: B

<i>Need to provide a value for the name parameter when calling the sayHi function, like this: console.log(sayHi("John")); // This will output "Hi there, John"
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b> 3 </b></summary>
<p>

#### Answer: C

<i>nums.forEach((num) => { ... });: Iterates over each element of the nums array using the forEach method, and for each element, it executes the provided callback function. So, the code counts the number of truthy values (values not equal to 0) in the nums array, which are 1, 2, and 3, resulting in a count of 3.</i>

</p>
</details>
