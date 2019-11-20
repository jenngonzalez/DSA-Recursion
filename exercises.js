// #1. Count Sheep:

const countSheep = function(num) {
    if (num === 0) {
      return console.log('All sheep jumped over the fence')
    }
    console.log(`${num} sheep jumped over the fence`)
    return countSheep(num - 1)
  }
  
  countSheep(5)
  
  // #2. Power Calculator:
  
  const powerCalculator = function(base, exp, result=1) {
    if (exp < 0) {
      return console.log("Exponent should be >= 0")
    }
    return exp === 0 ? result : powerCalculator(base, exp - 1, result * base)
  } 

  powerCalculator(4, 3)


// RECURSIVE POWERS
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n === 0) {
        return 1;
    }
    // recursive case: n is negative
    if(n < 0) {
        var y = power(x, -n);
        return 1/y;
    }
    // recursive case: n is odd
    if(isOdd(n)) {
        return power(x, n=(n-1))*x;
    }
    // recursive case: n is even
    if(isEven(n)) {
        var y = power(x, n/2);
        return y*y;
    }
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
Program.assertEqual(power(3, 1), 3);
displayPower(3, 2);
Program.assertEqual(power(3, 2), 9);
displayPower(3, -1);
Program.assertEqual(power(3, -1), 1/3);
Program.assertEqual(power(4, -2), 1/16);
Program.assertEqual(power(2, 3), 8);

///////////////
  
  
  // #3. Reverse String: 
  
  const reverseStr = function(str, newString='') {
    return str.length === 0
        ? newString
        : reverseStr(str.slice(0, -1), newString.concat(str.charAt(str.length -1)))
  }
  
  reverseStr('Hello')
  
  // #4. Triangular Number:
  
  const triNum = function(num) {
    return num === 0 ? 0 : num + triNum(num - 1)
  }
  
  triNum(10)
  
  // #5. String Splitter:
  
  // #6. Fibonacci Sequence:
  
  
  // #7. Factorial: 
  
  const factorial = function(n) {
      // base case: 
      if (n === 0) {
          return 1;
      }
      // recursive case:
      return n*(factorial(n-1));
  }; 
  
  println("The value of 0! is " + factorial(0) + ".");
  println("The value of 5! is " + factorial(5) + ".");
  
  Program.assertEqual(factorial(0), 1);
  Program.assertEqual(factorial(5), 120);
  Program.assertEqual(factorial(4), 24);
  Program.assertEqual(factorial(3), 6);
  
  // #8. Maze - find one exit:
  
  // #9. Maze - find ALL exits:
  
  // #10. Anagrams:
  
  // #11. Organization Chart:
  
  // #12. Binary Representation:
  
  
  
  
  // Other - Khan Academy:
  
  // * Check if palindrome: 
  
  // Returns the first character of the string str
  var firstCharacter = function(str) {
      return str.slice(0, 1);
  };
  
  // Returns the last character of a string str
  var lastCharacter = function(str) {
      return str.slice(-1);
  };
  
  // Returns the string that results from removing the first
  //  and last characters from str
  var middleCharacters = function(str) {
      return str.slice(1, -1);
  };
  
  var isPalindrome = function(str) {
      // base case #1
      if (str.length <= 1) {
          return true;
      }
      // base case #2
      if (firstCharacter(str) !== lastCharacter(str)) {
          return false;
      }
      // recursive case
      return isPalindrome(middleCharacters(str));
  };
  
  var checkPalindrome = function(str) {
      println("Is this word a palindrome? " + str);
      println(isPalindrome(str));
  };
  
  checkPalindrome("a");
  Program.assertEqual(isPalindrome("a"), true);
  checkPalindrome("motor");
  Program.assertEqual(isPalindrome("motor"), false);
  checkPalindrome("rotor");
  Program.assertEqual(isPalindrome("rotor"), true);
  checkPalindrome("racecar");
  Program.assertEqual(isPalindrome("racecar"), true);
  checkPalindrome("123454321");
  Program.assertEqual(isPalindrome("123454321"), true);