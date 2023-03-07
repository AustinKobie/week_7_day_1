//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    let match = false;
    for (let i=0; i < dog_names.length; i++) {
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
            console.log('Matched dog_name');
            match = true;
        }
    }
    if (!match) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 1, 'even index');
  }
  
  return arr;
}

const modifiedArr = replaceEvens(arr);
console.log(modifiedArr);




//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Code Wars problem #1
multiply = function (a, b) {
    return a * b;
  }


// Code Wars problem #2
// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
function addBinary(a,b) {
    return (a + b).toString(2)
  
  }
