/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(X, Y, Z, N){
  return ("You will be a "+ X +" in " +Y +" , and married to " + Z+ " with " +N+ "  kids.")
}
console.log( tellFortune ("software engineer", "Jordan", "Alice", "3"))





/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(Age){
  if(Age<0){
      window.alert("age can't be odd")
  }
  else{
  return("Your doggie is "+ Age*7 +" years old in dog years!")
  }
}
console.log(calculateDogAge(5))




/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply (age,number){
  let cups=(100-age)*number*365
  return("You will need " +cups+" to last you until the ripe old age of 100")
}
console.log(calculateSupply(30,3))










/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
you can't double a text

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
it will not return a double of 7
*/




/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x){
  return 2*x  
}
function double2(x){
  return 2*x  
}
function double3(x){
  return 2*x  
}



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(number){
  return(number**3)
}
console.log(cube(3))



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply (first,second){
  return first*second
}
console.log("multiply= "+multiply(3,4))



/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  if (age>=20){
    console.log("yes you can")
  }
  else{
    let X=20-age;
    console.log("please come back after "+ X + " years to get one")
  }
}
canIGetADrivingLicense(18)


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(x,y){
  let xlength= x.length
  let ylength= y.length
  if (xlength==ylength){
    console.log("true")
  }
  else{
    console.log("false")
  }

  
}
sameLength("name","diana")

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(a,b){
  if (a>b){
     console.log(a)
  }
  else if (a==b){
    console.log("they are equal to each other")
  }
  else{
    console.log(b)
  }

}
largerNubmer(15,20)

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(a,b,c){
  if (a<b){
    if (a<c){
      console.log(a)
    }
    
  }
  if (b<a){
    if (b<c){
      console.log(b)
    }
    
  } 
  if (c<b){
    if (c<a){
      console.log(c)
    }
    
  }
}
smallerNubmer(5,7,2)

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(q,w,e,r,t){
  var arr = [q,w,e,r,t];

console.log(
  arr.reduce((a, b) => a.length <= b.length ? a : b)
)
}
shorterString("air","tr","car","github","by")




/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function test(b){
  if (b%2 == 0){
      return true;
  }
  else{
      return false;
  }
}
console.log(test(5))


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function test(b){
  if (b%2 == 1){
      return true;
  }
  else{
      return false;
  }
}
console.log(test(5))


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(a){
  if (a>=0){
    console.log(a)
  }
  else{
    console.log(-1*a)
  }
}
positive(-2)


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName){
  console.log( firstName+" "+ lastName)
}
fullName("Amani","Al-Hyari")


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(a,b,c,d,e){
  return (a+b+c+d+e)/5
}
console.log(average(5,7,9,3,5))



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  console.log( Math.random())
}
randomNumber()


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomNumber(a,b){
  console.log( Math.random())
}
randomNumber(5,4)


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(mark){
  if (mark>95){
    console.log("A")
  }
  else if(mark>85){
  console.log("B")
}
else if(mark>70){
  console.log("C")
}
else if(mark>50){
  console.log("D")
}
else{
  console.log("F")
}

}
scoreInUniversty(89)


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
for (let i = 0; i < 10; i++) {
//   console.count(i+1);
  console.log(i+1)
}



/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
