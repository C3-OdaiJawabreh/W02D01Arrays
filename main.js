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
array3.reverse()


 //practice
 //q#1
 
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
  };

//q#7
const getLength = function (array) {

    let length =0
        while(array[length]!== undefined){
            length = length + 1 
        }
        return length
}

const getFirstVal = function (array) {
    let anArr =[];
    anArr.push(array[0])
    console.log(array)
    return anArr.join(" ")
    
  };
  

    
  
//q#8
const updateOrCreate = function (array, value, index) {
    array[index]=value
    return array
  };


  //q#9
  const sliceArray = function (array, startVal, endVal) {
      console.log(array[startVal])
      array.splice(array[startVal],array[endVal])
      return array
  };




  //q#10
  const randomFruit = function (array) {
   let  a= (array["length"]-1)
   let b = Math.ceil(Math.random()*a)
       return array[b]    
  };
  const fruits = ["Apple", "Banana", "Strawberry", "Mango"];


  //extra practice 
  //q#1
  const isPalindrome = function (string) {
    let b = string.split('')
    let a = b["length"]-1
    if (a%2===0){
        return true
    }
    else {
        return false
    }
  };

  //q#2
  const arrayMiddle = function (array) {
    let a = array["length"]
    if (a%2===0){
      a=(a/2)
      let c = array [a]
      let d = array [a-1]
      return (d+c)/2
    }else{a =(a/2)-0.5
        return array[a]
    }
  };
  //q#3
  const removeElement = function (array, index) {
    array.splice(index,1)
    return array

  };
  //q#4
  const combineArrays = function (arrayOne, arrayTwo) {
let a = arrayOne
let b = arrayTwo
let c = a.concat(b) 
return c
  };
*/
  //q#5

  //solving the extra practice for chek
  //Q#1
  
const isPalindrome = function (string) {
  
// i will try to delete every space in the string bu using replace function
for(let i =0; i<string.length-1 ; i++){
  if (string[i]= " "){
   string = string.replace(' ','')
   }  
}
let x = string.length-1
// i want to creat a function to check if the fisrt valeue = the last and the if the first value +1 =the last value -1 
for (let j=0 ; j<x/2 ; j++){
  if(string[j]!==string[x-j]){
    console.log(string[j])
    console.log[string[x-j]]
    return false
  }
}return true
   
};
//Q#2
const arrayMiddle = function (array) {
  // i need o konw if the sum element of the arrray = odd or even
  let x = array.length
  if(x %2 !=0){
    x = (x-1)/2
 x = array[x]
 return x
  }
  else {
    console.log(x)
    let y = array[x/2]
    let z = array[x/2 - 1]
    return (y+z)/2
  }

};

  
  

  





















































  























