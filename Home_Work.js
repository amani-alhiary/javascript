/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

// console.log("------Solution#1----------")
// [ 1,7 , 9 , 45 ]
// ["Str" ,"alex","moh"]
// ['the','fox' ,'over', 'lazy', 'dog' ]




/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// console.log("------Solution#2----------")

// tomato index 0
// banana index 1






/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// console.log("------Solution#3----------")

// let favoriteFood=["Mansaf", "Shawerma", "Burger","Kubbeh","Dawali"]
// let favoritSport=["basketball","footbal","tennis"]
// let favoriteMovie=["when a stranger calls","Fast & Furious","blue streak","big mama"]


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// console.log("------Solution#2----------")

// console.log("solution 4")
// function firstOfArray(array){
//     console.log(array[0])
// }
// let array=[1,4,5]
// firstOfArray(array)





/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// console.log("------Solution#5----------")

// console.log("solution 5")
// function firstOfArray(array2){
//     console.log(array2[array2.length-1])
// }
// let array2=["t","u","g","x"]
// firstOfArray(array2)


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// console.log("------Solution#6----------")

// var array3 = [0,5,7,9]
// array3.shift()
// array3.shift()
// array3.shift()
// array3.unshift(1,3,4,6,8)
// array3.push(10)
// console.log(array3)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// console.log("------Solution#7----------")

//  var array2=[]
//  array2.push(5,9,-7,3,5)
//  console.log(array2)



/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// console.log("------Solution#8----------")

// numbers = [5,1,2,3,10];
// numbersCopy = [];

// function doubleValues(numbers){
// for (i = 0; i < numbers.length; i++) {
//   numbersCopy[i] = numbers[i]*2;
// }}
// doubleValues(numbers)
// console.log(numbersCopy)


/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

// console.log("------Solution#9----------")

// numbers = [5,1,2,3,10];
// numbersCopy = [];

// function onlyEvenValues(numbers){
//     for (i = 0; i < numbers.length; i++) {
//      if (numbers[i]%2 ==0){
//         numbersCopy[i]=numbers[i]
//      }
//      else{
//         numbers.splice(i, 1);
//         i--
//      }
// } 
// }
// onlyEvenValues(numbers)
// console.log(numbersCopy)


/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
// console.log("------Solution#10----------")
// words = ['colt','matt', 'tim', 'udemy'];
// wordsCopy = [];

// words.forEach(function(words) {
//     wordsCopy.push(words.charAt(0)+words.charAt(words.length - 1))
// } ) 

// console.log(wordsCopy)







/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


// console.log("------Solution#11----------")


// array = ["t","u","g","x"];

// function middleOfArray(array){
//     let x=array.length/2
//     if (x%2==0){
//         console.log(array[x-1]+" & "+ array[x])
//     }
//     else if (x%2==1){
//         console.log(array[x-1])
//     }
// }
// middleOfArray(array)




/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
// console.log("------Solution#12----------")
// var animals=['dog','cat', 'ele', 'bird']
// animals.shift()
// animals.push('zebra', 'elephant')
// console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// console.log("------Solution#13----------")

// function indexOfArray(array9){
//     for (i=0;i<array9.length;i++){
//         console.log("indexOfArray(nums,"+i+")"+array9[i])
//     }
// }
// nums=[1,2,3,8,9]
// indexOfArray(nums)

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
// console.log("------Solution#14----------")

// function arrayExceptLast(array10){
//     array10.pop()
//     console.log(array10)
// }
// let array10=[1,2,3,8,9]
// arrayExceptLast(array10)

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// console.log("------Solution#15----------")

// function addToEnd(array11){
//     array11.pop()
//     array11.push(55)
//     console.log(array11)
// }
// let array11=[1,2,3,8,9]
// addToEnd(array11)


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#16----------")

// var summation=0
// var nums= [1,2,3,8,9]

// function sumArray(nums){
//     for(i=0; i<nums.length; i++){
//          summation=summation+nums[i]

//     }
//     console.log(summation)

// }
// sumArray(nums)



// var summation=0
// var nums= [1,2,3,8,9]

// let i=0
// function sumArray(nums){

// while(i<nums.length){
//         summation=summation+nums[i]
//         i++
// }
// }
// sumArray(nums)
// console.log(summation)



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// console.log("------Solution#17----------")
// var nums= [2,3,8,1]
// var x = nums[0]

// function minInArray(nums){
    
//     for (i=0; i<nums.length; i++){
        
//         if (nums[i]<x){
//             x=nums[i]
//         }

//     }
// }
// minInArray(nums)
// console.log(x)



// var nums= [2,3,8,1]
// var x = nums[0]
// let i=0
// function minInArray(nums){
// while(i<nums.length){
//     if (nums[i]<x){
//         x=nums[i]
//     }
//     i++
// }}
// minInArray(nums)
// console.log(x)




/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#18----------")

// var nums= [1,2,3,8,9]
// function removeFromArray(nums,index){
//     nums.splice(index,1)
// }

// removeFromArray(nums,2)
// console.log(nums)





/*16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#19----------")

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// odds=[]
// function oddArray(arr){
//     for (i=0; i<arr.length; i++){
    //  if (arr[i]%2==1){
    //     odds[i]=arr[i]
    //  }
    //  else{
    //     arr.splice(i, 1);
    //     i--
    //  }
//     }
// }
// oddArray(arr)
// console.log(odds)


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// odds=[]
// let i=0
// function oddArray(arr){
//     while(i<arr.length){
//         if (arr[i]%2==1){
//             odds[i]=arr[i]
//             i++
//          }
//          else{
//             arr.splice(i, 1);
//             i--
//          }
     
//     }
// }
// oddArray(arr)
// console.log(odds)






/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#20----------")

// var summation=0
// var nums= [1,2,3,8,9]

// function sumArray(nums){
//     for(i=0; i<nums.length; i++){
//          summation=summation+nums[i]

//     }
//     console.log(summation/i)

// }
// sumArray(nums)


// var summation=0
// var nums= [1,2,3,8,9]
// let i=0
// function aveArray(nums){
// while(i<nums.length){
//     summation=summation+nums[i]
//     i++
// }
// console.log(summation/i)

// }
// aveArray(nums)



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#21----------")
// var strings= ["alexander","mercer","madrasa","rashed2","emad","hala"]
// var shortestOne=strings[0]

// function shorterInArray(strings){
//     for(i=0;i<strings.length; i++){
//        if (strings[i].length<shortestOne.length){
//         shortestOne=strings[i]
//        }
//        else if (strings[i].length=shortestOne.length){
//         shortestOne=shortestOne
//        }
//     }
// }
// shorterInArray(strings)
// console.log(shortestOne)



// var strings= ["alexander","mercer","madrasa","rashed2","emad","hala"]
// var shortestOne=strings[0]
// let i=0
// function shorterInArray(strings){
//   while(i<strings.length){
//     if (strings[i].length<shortestOne.length){
//         shortestOne=strings[i]
//         i++
//        }
//        else if (strings[i].length=shortestOne.length){
//         shortestOne=shortestOne
//         i++
//        }
//   }

// }
// shorterInArray(strings)
// console.log(shortestOne)

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#22----------")
// var string= "alex mercer madrasa rashed2 emad hala"
// var num=0
// function repeatChar(string,x){
//     for(i=0; i<string.length; i++){
//         if (string[i]===x)(
//             num=num+1
//         )
//     }
// }
// repeatChar(string,'a')
// console.log(num)



// var string= "alex mercer madrasa rashed2 emad hala"
// var num=0
// var i=0
// function repeatChar(string,x){
//     while(i<string.length){
//         if (string[i]===x)(
//             num=num+1
//             i++
//         )
//         }
//     }
//     repeatChar(string,'a')
//     console.log(num)
    



/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#23----------")

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// evenodd=[]
// function evenIndexOddLength(strings){
//     for (i=0; i<strings.length; i++){
//         if (i%2==0 && strings[i].length%2==1){
//             console.log(strings[i])
//         }

//     }
// }
// evenIndexOddLength(strings)


// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// evenodd=[]
// let i=0
// function evenIndexOddLength(strings){
//    while(i<strings.length){
//     if (i%2==0 && strings[i].length%2==1){
//         console.log(strings[i])
// i++
//     }
// }
//    }
//    evenIndexOddLength(strings)

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#24----------")
// var nums= [44, 5, 4, 3, 2, 10]
// power=[]
// function powerElementIndex(nums){
//     for (i=0; i<nums.length; i++){
//         power[i]=Math.pow(nums[i],i)
//     }
// }
// powerElementIndex(nums)
// console.log(power)



// var nums= [44, 5, 4, 3, 2, 10]
// power=[]
// let i=0
// function powerElementIndex(nums){
//     while(i<nums.length){
//         power[i]=Math.pow(nums[i],i)
//         i++
//     }
// }
// powerElementIndex(nums)
// console.log(power)


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("------Solution#25----------")
// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// evens=[]
// function evenNumberEvenIndex(nums){
//     for (i=0; i<nums.length; i++){
//         if (nums[i]%2==0 && i%2==0){
//             evens[i]=nums[i]
//         }
//         else{
//             nums.splice(i, 0);
//             i--
//         }
//     }
// }
// evenNumberEvenIndex(nums)
// console.log(evens)



// var nums= [5,2,2]
// evens=[]
// let i=0
// function evenNumberEvenIndex(nums){
//     while(i<nums.length){
//         if (nums[i]%2==0 && i%2==0){
//             evens[i]=nums[i]
//             i++
//         }
//         else{
//             nums.splice(i, 0);
//             i--
//         }

//     }
// }

// evenNumberEvenIndex(nums)
// console.log(evens)




/*

While Exercises 
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
// console.log("------Solution#26----------")
// function subtract(n){
//     for (i=0; i<=n; i++){
//         console.log(n-i)
//     }
// }
// subtract(5)

// let i=0
// function subtract(n){
//   while(i<=n){
//     console.log(n-i)
// i++

//   }
// }
// subtract(5)

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
// console.log("------Solution#27----------")
// let x =1
// function factorial(n){
//     for (i=0; i<n; i++){
//         x=(n-i)*x
//     }
// }
// factorial(4)
// console.log(x)



// let x =1
// let i=0
// function factorial(n){
//     while(i<n){
//         x=(n-i)*x

//     }}
// factorial(4)
// console.log(x)
    




/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
// console.log("------Solution#28----------")
// function repeatStr(string, num){
//     for (i=0; i<num;i++){
//         console.log(string.repeat(num))
//     }
// }
// repeatStr("to",4)




// let i=0
// function repeatStr(string, num){
//  while(i<num){
//     console.log(string.repeat(num))
//     i++
//  }
// }
// repeatStr("to",4)

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
// console.log("------Solution#29----------")
// let x=0
// function sum2(a,b){
//     for (i=a; i<=b;i++){
//         x=x+(i)
//     }
// }
// sum2(4,5)
// console.log(x)




// let x=0

// function sum2(a,b){
//     let i=a
//     while(i<=b){
//         x=x+(i)

//     }
// }
// sum2(4,5)
// console.log(x)

/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
// console.log("------Solution#30----------")
// function multiOf(a,b,c){
//    console.log(a*(Math.pow(b,c)))
// }
// multiOf(4,10,3)


/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
// console.log("------Solution#31----------")
// let x=1
// function muti2(a,b){
//   for (i=a; i<=b; i++){
//     x=x*i
//   }
// }
// muti2(3,6)
// console.log(x)




/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
// console.log("------Solution#32----------")
    // function numberBetweenUs(a,b){
    //     console.log('"')
    //     // let i=a+1
    //     // let n=b-1
    //     for (i=a; a<b ;i++){
    //         console.log(i+", ")
    //     }
    // }
    // numberBetweenUs(2,8)






/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
// console.log("------Solution#33----------")

// function countDown(n){
//     for (i=0; i<n; i++){
//         console.log((n-i)) 
//     }
//     console.log('done')
// }
// countDown(5)





//For Exercises 

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// console.log("------Solution#34----------")
// numbers = [5,1,2,3,10];
// numbersCopy = [];

// function doubleValues(numbers){
// for (i = 0; i < numbers.length; i++) {
//   numbersCopy[i] = numbers[i]*2;
// }}
// doubleValues(numbers)
// console.log(numbersCopy)


/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
// numbers = [5,1,2,3,10];
// numbersCopy = [];
// console.log("------Solution#35----------")

// function onlyEvenValues(numbers){
//     for (i = 0; i < numbers.length; i++) {
//      if (numbers[i]%2 ==0){
//         numbersCopy[i]=numbers[i]
//      }
//      else{
//         numbers.splice(i, 1);
//         i--
//      }
// } 
// }


/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
// console.log("------Solution#36----------")

// words = ['colt','matt', 'tim', 'udemy'];
// wordsCopy = [];

// words.forEach(function(words) {
//     wordsCopy.push(words.charAt(0)+words.charAt(words.length - 1))
// } ) 

// console.log(wordsCopy)


/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
// console.log("------Solution#37----------")
// let array = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// let string="'title':'instructor'"
// function addKeyAndValue(array,string){
//     for (i=0; i<array.length; i++){
//         Object.assign(array[i], {"'title'":"'instructor'" })
//     }
// }
// addKeyAndValue(array,string)
// console.log(array)
/*



* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/
// let acount=0
// let icount=0
// let ecount=0
// let ocount=0
// let ucount=0

// function getVowels(str) {
  
  
//     for (var i = 0; i <= str.length - 1; i++) {
  
//       if (str.charAt(i) == "a"){
//        acount+=1
//       }
//       if (str.charAt(i) == "e"){
//         ecount+=1
//        }
//        if (str.charAt(i) == "i"){
//         icount+=1
//        }
//        if (str.charAt(i) == "o"){
//         ocount+=1
//        }
//        if (str.charAt(i) == "u"){
//         ucount+=1
//        }
//     }
  
//   }
//   getVowels("elie")
//   console.log("{a:"+acount,"e:"+ecount,"i:"+icount,"o:"+ocount,"u:"+ucount+"}")





