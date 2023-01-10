// ---------------Solution 1 (using while)---------------

function isPalindrome(input){
 // Bonus: remove spaces using input.replace(/\s/g,'');
 input = input.replace(/\s/g,'');
//  counters
  let start = 0;
  let end = input.length -1;
 
  // using the word RACECAR for example, after start gets to the second letter c that is in position 4, end should be at first letter c in position 2 so 4 is not smaller than 2, which means the condition for the while is not true (this is done to stop the while).
  while (start < end) {
    if (input[start] !== input[end]){
      return false;
    }
    start++;
    end--;
  }

  return true;
}

const input = prompt('Inserisci una parola per vedere se e Palidroma');

if (isPalindrome(input) == true) {
  console.log('It is a palindrome');
} else{
  console.log('It is not a palindrome');
}


// ---------------Solution 2 (using Arrays)---------------

// function checkPalindrome(input) {

//   // convert input to an array
//   const MyArray = input.split('');

//   // reverse the array values
//   const reversedMyArray = MyArray.reverse();

//   //joins all the elements of the reversed input into a string
//   const reversedInput = reversedMyArray.join('');

//   // BONUS: remove spaces from input and reverse input to check if phrases are palindrome as well
//   let Newinput = input.split(" ").join("");
//   let NewreversedInput = reversedInput.split(" ").join("");

//   if(Newinput == NewreversedInput) {
//       console.log('It is a palindrome');
//   }
//   else {
//       console.log('It is not a palindrome');
//   }
// }

// //take input
// const input = prompt('Inserisci una parola per vedere se e Palidroma');

// checkPalindrome(input);


