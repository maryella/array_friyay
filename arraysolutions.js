// 1. Write a JavaScript function to check whether an input is an array or not.
function checkArray(item) {
  if (Array.isArray(item)) {
    return "it's an array";
  } else {
    return "this aint no array";
  }
}

//2. Write a JavaScript function to get the first 'n' elements of an array.
function getThisMany(array, number) {
  let new_array = Array.from(array);
  new_array.splice(number);
  return new_array;
}

// 3. Write a simple JavaScript program to join all elements of the following array into a string.
function arrayToString(array) {
  return array.join(" ");
}

// 4. Write a JavaScript program which accept a number as input and insert dashes (-) between each number.
function stringDash(input) {
  let input_string = String(input);
  let new_array = input_string.split("");
  let result = new_array.join("-");
  return result;
}

// 5. Write a JavaScript program to sort the items of an array.
function sortArray(array) {
  let result = array.sort(function(a, b) {
    return a - b;
  });
  return result;
}

//6. Write a JavaScript program to find the most frequent item of an array.
function frequency(array) {
  array.forEach();
}

//7. Write a JavaScript program which accept a string as input and swap the case of each character. For
// example if you input The Quick Brown Fox the output should be tHE qUICK bROWN fOX.
function swapCase(string) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let result = [];

  for (let i = 0; i < string.length; i++) {
    if (upper.includes(string[i])) {
      result.push(string[i].toLowerCase());
    } else if (lower.includes(string[i])) {
      result.push(string[i].toUpperCase());
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
}

//8. Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops
function printEach(array) {
  let result = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      result.push(array[x][y]);
    }
  }
  console.log(result);
}

const arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

//9. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function checkDuplicate(array) {
  let newArray = [];
  array.forEach(function(item) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

//10. There are two arrays with individual values, write a JavaScript program to compute the sum of each
//individual index value from the given arrays.

function addArrays(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array2.length; i++) {
    let sum = array1[i] + array2[i];
    newArray.push(sum);
  }
  return newArray;
}

//11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
//this function does a loose check to see if item is a falsie
function noFalsies(array) {
  let result = array.filter(function(item) {
    if (item) {
      return item;
    }
  });
  return result;
}
const arr11 = [NaN, 0, 15, false, -22, "", undefined, 47, null];

//12. Write a JavaScript function to merge two arrays and removes all duplicates elements.
function merge_arrays(array1, array2) {
  let newarray = [];
  let merged = array1.concat(array2);
  for (let i = 0; i < merged.length; i++) {
    if (!newarray.includes(merged[i])) {
      newarray.push(merged[i]);
    }
  }
  return newarray;
}

const arr12a = [1, 2, 3];
const arr12b = [2, 30, 1];

//Use map for 13 - 15
//13. Make an array of numbers that are doubles of the first array
function doubledArray(array) {
  let doubled = array.map(function(num) {
    return num * 2;
  });
  return doubled;
}

//14. Take an array of numbers and make them strings.
function numToString(array) {
  let strings = array.map(function(num) {
    return num.toString();
  });
  return strings;
}

//15. Capitalize each of an array of names.
function capitalizeNames(array) {
  let caps = array.map(function(name) {
    return name.toUpperCase();
  });
  return caps;
}

//use filter to solve
//16. Find all the strings in a array that are less than 5 letters
function shortStrings(array) {
  let newarray = array.filter(function(item) {
    return item.length < 5;
  });
  return newarray;
}
