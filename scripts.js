// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    let largest = arr[0];
    arr.forEach(function(el){
      if(el > largest) {
        largest = el;
      }
    });
    return largest;
  },
  
  reversed: function(s){  
    return s.split("").reverse().join("");
  },

  loudSnakeCase: function(s){  
     let split = s.split(" ");
     let upper = [];
     split.forEach(function(el){
       if(el !== ""){
        upper.push((el.substring(0, 1).toUpperCase() + el.slice(1)).replace(/\W+/g, ""));
       }
     });
     return upper.join("_");
  },

  compareArrays: function(arr1, arr2){ 
    return arr1.length === arr2.length && arr1.every((el, index) => el === arr2[index]);
  },

  fizzBuzz: function(num){ 
    let arr = [];
    for(let i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        arr.push("FIZZBUZZ");
    }
      else if(i % 3 === 0){
        arr.push("FIZZ");
    }
     else if(i % 5 === 0){
        arr.push("BUZZ");
    } else {
      arr.push(i);
    }
    } return arr;
  },

  myMap: function(arr, func){
    const newArr = [];
    arr.forEach(el => newArr.push(func(el)));
    return newArr;
    // your code here
  },

  primes: function(num){  
    const arr = [2];
    outer:
    for(let i = 3; i < num; i++) {
      for(let j = 2; j < i; j++) {
        if(i % j === 0){
          continue outer;   
        }
      } arr.push(i);
    }
    return arr;
  },
}

