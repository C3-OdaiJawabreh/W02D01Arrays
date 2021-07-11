console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
console.log("W02D01")
//pulse check
//q#1
/*
const myFavoriteColor = ["red","Blue","green"]
const negativeNumbers  = [-1,-2 ,-3 ,-4 ,-5]
const food = ["mansaf","Brosted","Makmoura"]
const numbers = [
    [1,3,5],
    [2,4,6]
]
//q#2
const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
orderedPlanets[3]
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
orderedPlanets[0]
const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
animals[(orderedPlanets.length)-1]
//q#3


const orderedPlanets1 = ["Mercury", "Venus", "Earth", "Jupiter"];
orderedPlanets1[orderedPlanets1.length]  ="mars"
const unorderedPlanets1 = ["Mars", "Earth", "Mercury"]
unorderedPlanets1.push("mars")
const animals1 = ["Cat", "Dog", "Dolphin", "Squirrel"];
animals1[0]="Koala"
//q#4
const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles.push("Dinosaur ")
reptiles.shift(0)
const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift("Goldfish")
fish.pop(3)
//q#5
const array = [1, 9, 9, 3];
array.join("");
const array1 = ["John", "Doe", "The Third"];
array1.join(" ")
array3 = [1, 2, 3, 4];
array3.reverse()*/
 //practice
 //q#1
 /*
 const addToArray = function (array, string) {
         array.push(string)
         return array
 };

 //q#2
 const convertToString = function (array) {
    let a= array.join(" ");
    return a
  };
//q#3
const accessElement = function (array, index) {
    let a = array[index]
    return a
  };
  //q#4
  const isInArray = function (array, string) {
     let a = array.indexOf(string)
     if (a > -1){
      return true
     } else { return false}
  };
  //q#5
  const reverseWords = function (string) {
   let a = string.split(" ")
   if (a[0]===string){
       return string
   }
   else {
     let x = a.reverse()
     x = x.join(" ")
     return x
   }
  };
//q#6
const addToLast = function (array, value) {
    let a = array
    let b = value
     a.unshift(b)
     a.sort()
     return a
  };*/

//q#7
const getLength = function (array) {

    let length =0
        while(array[length]!== undefined){
            length = length + 1 
        }
        return length
    
}
    
        
  
























