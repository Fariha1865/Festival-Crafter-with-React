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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined

<i>In this code snippet, variable is declared with the name greeting. But, while assigning the value, greetign is used which was not defined. So, ReferenceError: greetign is not defined error will be given if greetign variable is tried to be printed in the console as it was not defined.</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>Here, no console.log() is used to print the result. So the actual result will be empty. But if console.log() was used, output will be "12" as among the two variables passsed while calling the function,, one is number and another is string.
In this case, JavaScript will try to execute type correction when + operator is used.
So, in this code, JavaScript will convert the number 1 to string type and then concat
the two strings to produce the string "12."</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here, Info object is created with it's favoriteFood property initialized
 with the first element of the food array. Later when the favoriteFood property
 value is again re-assigned, it doesn't directly effect or have any impact on the
 Food array. so the food array remains unchanged, only value of the info object > favoriteFood
 property will be changed after the re-assignment</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  B: `Hi there, undefined`

<i>In the code snippet, the sayHi function expects a name parameter to be provided when it's called. But, when calling sayHi() function, no value is passed. So, the name parameter remains undefined. Hence, when the name variable is tried to be printed in console, it'll show undefined. That's why the value will be `Hi there, undefined`</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Here, while iteration, if num value is truthy, count is increased to one. In first iteration, count is 0 and num is 0. As 0 is falsy value, the condition fails and count is not increased. In second iteration, count is 0 and num is 1 which is truthy. So, condition is true and count is increased by 1.In third iteration, count is 1 and num is 2 which is truthy. So, condition is true and count is increased by 1. In fourth iteration, count is 2 and num is 3 which is truthy. So, condition is true again and count is increased by 1. So, after the fourth iteration, the final value of count is 3. </i>

</p>
</details>
