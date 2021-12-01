   // Case one
let triangleOne = (10 * 13) / 2;
console.log(triangleOne);

let triangleTwo = (16.5 * 20.3) / 2;
console.log(triangleTwo);

if (triangleOne > triangleTwo) {
   console.log(`Triangle One has a bigger area than Triangle Two, Triangle One has a area of ${triangleOne}cm2.`);
} else if (triangleTwo > triangleOne) {
   console.log(`Triangle Two has a bigger area than Triangle One, Triangle Two has a area of ${triangleTwo}cm2.`);
} else if (triangleOne === triangleTwo) {
   console.log(`Triangle One and Triangle Two have the same area. Triangle One has a area of ${triangleOne}cm2. 
Triangle Two also has a area of ${triangleTwo}cm2.`);
} else {
   console.log(`Error`)
}

/* Triangle 1 has a area of 65cm2
   Triangle 2 has a area of 167.475cm2 
   
   Triangle Two has the biggest area*/



   // Case two
let triangleThree = (16.5 * 20.3) / 2;
console.log(triangleThree);

let triangleFour = (20.3 * 16.5) / 2;
console.log(triangleFour);

if (triangleThree > triangleFour) {
   console.log(`Triangle Three has a bigger area than Triangle Four, Triangle Three has a area of ${triangleThree}cm2.`);
} else if (triangleFour > triangleThree) {
   console.log(`Triangle Four has a bigger area than Triangle Three, Triangle Four has a area of ${triangleFour}cm2.`);
} else if (triangleThree === triangleFour) {
   console.log(`Triangle Three and Triangle Four have the same area. Triangle Three has a area of ${triangleThree}cm2. 
Traingle Four also has a area of ${triangleFour}cm2.`);
} else {
   console.log(`Error`);
}

/* Triangle 3 has a area of 167,475cm2
   Triangle 4 has a area of 167,475cm2 
   
   Both triangles have the same area. */


   
   // Case three
let triangleFive = (7.8 * 5.6) / 2;
console.log(triangleFive);

let triangleSix = (9.3 * 12.4) / 2;
console.log(triangleSix)

if (triangleFive > triangleSix) {
   console.log(`Triangle Five has a bigger area than Triangle Six, Triangle Five has a area of ${triangleFive}cm2.`);
} else if (triangleSix > triangleFive) {
   console.log(`Triangle Six has a bigger area than Triangle Five, Triangle Six has a area of ${triangleSix}cm2.`);
} else if (triangleFive === triangleSix) {
   console.log(`Triangle Five and Triangle Six has the same area. Triangle Five has a area of ${triangleFive}cm2. 
Triangle Six also has a area of ${triangleSix}cm2.`)
}

/* Triangle 5 has a area of 21,84cm2
   Triangle 6 has a area of 57,66cm2 
   
   Triangle six has the biggest area*/


   
   /* ANSWER TO THE QUESTION IN THE ASSIGNMENT
   
   JavaScript need the parentheses because it's vauled higher, therefore 
   it will be prioritized. In this specific math problem JavaScript will first 
   calculate the parenthesis and then devied the number by two*/

   
   
   
   