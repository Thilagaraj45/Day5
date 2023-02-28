//1. Print odd numbers in an array:

//Anonymous function:

var arr = [1,2,3,4,5,6,7,8,9];
(function(arr){
    var oddNumbers = arr.filter(function(num){
        return num % 2 !== 0;
    });
    console.log(oddNumbers);
})(arr);

//IIFE:

var arr = [1,2,3,4,5,6,7,8,9];
(function(arr){
    var oddNumbers = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddNumbers.push(arr[i]);
        }
    }
    console.log(oddNumbers);
})(arr);


//2. Convert all the strings to title caps in a string array:

//Anonymous function:

var arr = ['this', 'is', 'a', 'string', 'array'];
(function(arr){
    var titleCasedStrings = arr.map(function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCasedStrings);
})(arr);

//IIFE:

var arr = ['this', 'is', 'a', 'string', 'array'];
(function(arr){
    var titleCasedStrings = [];
    for(var i = 0; i < arr.length; i++){
        titleCasedStrings.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    console.log(titleCasedStrings);
})(arr);
 


//3. Sum of all numbers in an array:

//Anonymous function:

var arr = [1,2,3,4,5,6,7,8,9];
(function(arr){
    var sum = arr.reduce(function(acc, num){
        return acc + num;
    }, 0);
    console.log(sum);
})(arr);


//IIFE:

var arr = [1,2,3,4,5,6,7,8,9];
(function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
})(arr);



//4. Return all the prime numbers in an array:

//Anonymous function:

var arr = [1,2,3,4,5,6,7,8,9];
(function(arr){
    var isPrime = function(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num !== 1;
    };
    
    var primeNumbers = arr.filter(function(num){
        return isPrime(num);
    });
    console.log(primeNumbers);
}


//IIFE:

  var arr = [1,2,3,4,5,6,7,8,9];
(function(arr){
    var primeNumbers = [];
    for(var i = 0; i < arr.length; i++){
        var isPrime = true;
        for(var j = 2; j < arr[i]; j++){
            if(arr[i] % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime && arr[i] !== 1) primeNumbers.push(arr[i]);
    }
    console.log(primeNumbers);
})(arr);



//5. Return all the palindromes in an array:

//Anonymous function:

var arr = ['level', 'hello', 'world', 'pop', 'civic'];
(function(arr){
    var isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    
    var palindromes = arr.filter(function(str){
        return isPalindrome(str);
    });
    console.log(palindromes);
})(arr);


//IIFE:

var arr = ['level', 'hello', 'world', 'pop', 'civic'];
(function(arr){
    var palindromes = [];
    for(var i = 0; i < arr.length; i++){
        var isPalindrome = true;
        var str = arr[i];
        for(var j = 0; j < str.length / 2; j++){
            if(str[j] !== str[str.length - j - 1]){
                isPalindrome = false;
                break;
            }
        }
        if(isPalindrome) palindromes.push(str);
    }
    console.log(palindromes);
})(arr);


//6. Return median of two sorted arrays of the same size:

//Anonymous function:

var arr1 = [1,3,5,7];
var arr2 = [2,4,6,8];
(function(arr1, arr2){
    var mergedArray = arr1.concat(arr2).sort(function(a,b){
        return a-b;
    });
    var median;
    if(mergedArray.length % 2 === 0){
        median = (mergedArray[mergedArray.length/2 - 1] + mergedArray[mergedArray.length/2]) / 2;
    } else {
        median = mergedArray[Math.floor(mergedArray.length/2)];
    }
    console.log(median);
})(arr1, arr2);


//IIFE:

var arr1 = [1,3,5,7];
var arr2 = [2,4,6,8];
(function(arr1, arr2){
    var median;
    var i = 0;
    var j = 0;
    var m = arr1.length;
    var n = arr2.length;
    var mergedArray = [];
    while(i < m && j < n){
        if(arr1[i] <= arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while(i < m){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j < n){
        mergedArray.push(arr2[j]);
        j++;
    }
    if(mergedArray.length % 2 === 0){
        median = (mergedArray[mergedArray.length/2 - 1] + mergedArray[mergedArray.length/2]) / 2;
    } else {
        median = mergedArray[Math.floor(mergedArray.length/2)];
    }
    console.log(median);
})(arr1, arr2);



//7.Remove duplicates from an array:

//Anonymous function:

var arr = [1,2,2,3,4,4,5];
(function(arr){
    var uniqueArray = arr.filter(function(item, index){
        return arr.indexOf(item) === index;
    });
    console.log(uniqueArray);
})(arr);


//IIFE:

var arr = [1,2,2,3,4,4,5];
(function(arr){
    var uniqueArray = [];
    for(var i = 0; i < arr.length; i++){
        if(uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }
    console.log(uniqueArray);
})(arr);


//8. Rotate an array by k times:

//Anonymous function:

var arr = [1,2,3,4,5];
var k = 2;
(function(arr, k){
    for(var i = 0; i < k; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
})(arr, k);


//IIFE:

var arr = [1,2,3,4,5];
var k = 2;
(function(arr, k){
    k = k % arr.length;
    for(var i = 0; i < k; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
})(arr, k);


// 1. Print odd numbers in an array: using arrow function

const printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));
printOddNumbers([1,2,3,4,5])

// 2. Convert all the strings to title caps in a string array: using arrow function

const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(convertToTitleCaps(['raj', 'rohit', 'sachin']));

// 3. Sum of all numbers in an array: using arrow function

const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([1,1,2,3,4,5,6]));

// 4. Return all the prime numbers in an array: using arrow function

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }
  
  const getPrimeNumbers = arr => arr.filter(num => isPrime(num));
  const numbers = [1,2,3,4,5,6,7,8];
  console.log(getPrimeNumbers(numbers));

// 5. Return all the palindromes in an array: using arrow function

const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => arr.filter(str => isPalindrome(str));
const arr = ['rohit', 'nan', 'sachin', 'mam']
console.log(getPalindromes(arr))
