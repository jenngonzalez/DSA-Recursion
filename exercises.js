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


// #3. Reverse String: 

const reverseStr = function(str, newString='') {
  return str.length === 0 ? newString : reverseStr(str.slice(0, -1), newString.concat(str.charAt(str.length -1)))
}

reverseStr('Hello')

// #4. Triangular Number:

const triNum = function(num) {
  return num === 0 ? 0 : num + triNum(num - 1)
}

triNum(10)


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
