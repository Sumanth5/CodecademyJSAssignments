/* 
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?
Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
1. Create a variable named myAge, and set it equal to your age as a number.
Write a comment that explains this line of code.
2. Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
3. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
4. Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
Set the result equal to a variable called laterYears. We’ll be changing this value later.
5. Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
6. If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?
7. Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
8. Let’s use a string method next.
Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
The toLowerCase method returns a string with all lowercase letters.
9. Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:
My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.
10. Great work! You can convert any human age to dog years. Try changing myAge and see what happens.
*/

var myAge = 8;
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
laterYears = laterYears * 4;
var myAgeInDogYears = earlyYears + laterYears;
var myName = 'Sumanth'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
