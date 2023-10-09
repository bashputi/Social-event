# Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

# Answer 
- B: ReferenceError: greetign is not defined


- In the question a variable is declared as "greeting" but in console.log "greetign" js is case-sencitive , so a typo occurs . "greeting" should be written in console.log()  or a new variable should be added in the question.



2 Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

# Answer 
- D: 3


- In the question parameters 'a' & 'b' are not explicitly typed, so js will implicit it when calling & convert string "2" into a number 2 .



3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

# Answer 
- A: ['🍕', '🍫', '🥑', '🍔']


- because it concole.log "food" not "info" or "info.favoriteFood" ..so the answer will be the "food" array.


4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

# Answer 
- B: Hi there, undefined


- In the "sayHi" function it expect a parameter called "name" when it called. but "name" is not define , so it "${name}" will return undefined.


5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

# Answer 
- C: 3


- Because "count = 0" , "count += 1" & "nums = [0, 1, 2, 3]" 
 ........so  0+0=0   0+1=1   1+1=2   2+1=3 ........
 So the answer is 3.





