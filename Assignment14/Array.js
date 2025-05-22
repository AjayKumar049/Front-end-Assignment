// Initialize the array with three programming languages
let programming_language = ["Python", "Javascript", "Java"];

// Print the entire array
console.log(programming_language);  
// Output: ["Python", "Javascript", "Java"]

// Print the item at index 2 (third item)
console.log(programming_language[2]);  
// Output: "Java"

// Add a new item at index 3
programming_language[3] = 'Spring boot';
console.log(programming_language);  
// Output: ["Python", "Javascript", "Java", "Spring boot"]

// Print the length of the array
console.log(programming_language.length);  
// Output: 4

// Add an item at the beginning of the array
programming_language.unshift("C++");
console.log(programming_language);  
// Output: ["C++", "Python", "Javascript", "Java", "Spring boot"]

// Add an item at the end of the array
programming_language.push("ReactJS");
console.log(programming_language);  
// Output: ["C++", "Python", "Javascript", "Java", "Spring boot", "ReactJS"]

// Remove 1 items starting from index 2
programming_language.splice(2, 1);
console.log(programming_language);  
// Output: ["C++", "Python", "Java" "Spring boot", "ReactJS"]
// "Javascript" was removed
