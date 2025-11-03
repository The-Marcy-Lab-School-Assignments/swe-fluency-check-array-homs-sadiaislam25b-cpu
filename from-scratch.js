// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1 
const printEveryWord = (words) => {
  words.forEach((word) => {
    console.log(word);
  });

}; // I think there might be a () or {} problem but i didnt have time to fix it

// Problem 2
const getStringLengths = (words) => {
  return words.map((word) => word.leanth);

};
const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];
console.log(getStringLengths)

// Problem 3
const sortWordsZtoA = (words) => {
  words.sort((a, b) => {
    if (a < b)) return 1;
  if (a > b)) return -1;
  return 0;
}
    
};

/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  return numbers.filter((num) => num % 2 === 0)

};

// Problem 5 // I used .reduce , 
const getLargestNumber = (numbers) => {
  return numbers.reduce((largest, current) => { return current > largest })

};

/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6 // .foreach
const printUserNamesAndScores = (users) => {

};


// Problem 7 //.map
const getUserNames = (users) => {

  return users.map((user) => user.name)
};


// Problem 8 .filter
const getActiveUsersUnder30 = (users) => {
  return users.filter((user) => user. & user.age < 30)

};


// Problem 9 .reduce
const getTotalScore = (users) => {
  return users.reduce((total, user) => total + user.score, 0)
};

// Problem 10 .sort
const sortUsersByScoreDescending = (users) => {
  users.sort((a, b) => b.score - a.score)

};
