'use strict';

const mockData = require('./mockData.js').data;


// -Welcome the user with a message in the console.
console.log("Welcome to ImeetPeople!");
console.table(mockData);

//-Create an empty profile object.
const profile = {
  first_name: "",
  last_name: "",
  age: "",
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: "",
  max_age_interest: ""
};

//-Create and prompt multiple questions that allow you to collect all the data needed to fill the profile object. The properties of the profile object are the same as the data given in mockData.js. The question you prompt should be clear and related to the property. E.g. a question for first_name could be: “What is your first name?”.

const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "What is your gender? (F,M,X)",
  "Which genders are you interested in dating? (F/M/X/B)",
  "Where do you live? (Rural or city)",
  "What is the minimum age of your match?",
  "What is the maximum age of your match?"
];

const answers = [];

// Hint: You can use a while-loop to repeat a question until valid

let i = 0;
while (answers.length < questions.length) {
  const question = questions[i];
  const answer = prompt(question);

  if (answer.length < 1) {
    console.log("That answer is too short.");
    continue;
  }


  if (question.includes("your gender")){
    var val = /F|M|X/i.test(answer)
    if (val !== true) {
      console.log("Invalid answer, try: F/M/X.")
      continue;
  }
}

   if (question.includes("your gender")){
    if (answer.length > 1) {
      console.log("Invalid answer, try: F/M/X.")
      continue;
  }
}

  if (question.includes("interested")){
    var val = /F|M|X|B/i.test(answer)
    if (val !== true) {
      console.log("Invalid answer, try: F/M/X/B.")
      continue;
  }
}

   if (question.includes("interested")){
    if (answer.length > 1) {
      console.log("Invalid answer, try: F/M/X/B.")
      continue;
  }
}

  if (question.includes("age")){
    if (isNaN(answer)) {
      console.log("Invalid answer, please add a number.") 
    continue
    }
}

  //Make sure the minimum interested age and maximum interested age is 18 or higher.

if (question.includes("your age")){
    if (answer < 18) {
      console.log("Invalid answer, you can subscribe only if older than 18.") 
    continue
    }
}

  if (question.includes("minimum")){
    if (answer < 18) {
      console.log("Invalid answer, please add a number bigger than 18.") 
    continue
    }
}

  if (question.includes("maximum")){
    if (answer < 18) {
      console.log("Invalid answer, please add a number bigger than 18.") 
    continue
    }
}

//Make sure the maximum interested age is higher than the minimum interested age.
  if (question.includes("maximum")){
    if (answer < answers[6]) {
      console.log("Invalid answer, please add a number bigger than the minimum age.") 
    continue
    }
}

//Make sure that location can only be “rural” or “city”.
  if (question.includes("Where")){
      var val = /rural|city/i.test(answer)
        if (val !== true) {
          console.log("Invalid answer, try: rural or city.")
      continue;
      }
  }
  

  answers.push(answer);
  i++;

}
//Make sure that all number values are stored as number and not as string.
answers[3] = parseInt(answers[2])
answers[6] = parseInt(answers[6])
answers[7] = parseInt(answers[7])

//Display the questions and answers collected nicely recap

for (let i = 0; i < questions.length; i++) {
  const humanIndex = i + 1;
  const question = questions[i];
  const answer = answers[i];
  console.log(`--------------------------`);
  console.log(`Question ${humanIndex}: ${question}`);
  console.log(`Answer: ${answer}\n`); // The \n adds the empty line
}

console.table(answers)
console.table(profile)

profile.first_name = answers[0];
profile.last_name = answers[1];
profile.age = answers[2];
profile.gender = answers[3];
profile.gender_interest = answers[4];
profile.location = answers[5]
profile.min_age_interest = answers[6];
profile.max_age_interest = answers[7];

console.table({profile});

console.log( `Your name is ${profile.first_name}  ${profile.last_name}, you are ${profile.age} years old. Your gender is ${profile.gender}. You are interested in gender ${profile.gender_interest}. You live in ${profile.location}. You'd like to find someone between ${profile.min_age_interest} and ${profile.max_age_interest} years old.`);

console.log("Ready to find your match?")

//Create a loop that iterates on the mockData array

let matches=[];
for ( let i=0; i < mockData.length; i++)
  { 
    let people=mockData[i];
      if (
      // age
      (people.age >= profile.min_age_interest) 
      && (people.age <= profile.max_age_interest) 
      && (profile.age >= people.min_age_interest) 
      && (profile.age <= people.max_age_interest) 
      // gender
      && ( (people.gender === profile.gender_interest)
        || (people.gender === "F" && profile.gender_interest === "B")
        || (people.gender === "M" && profile.gender_interest === "B") )
      && ( (profile.gender === people.gender_interest)
        || (profile.gender === "F" && people.gender_interest === "B")
        || (profile.gender === "M" && people.gender_interest === "B")
         )
      // location
      && (people.location.toLowerCase() == profile.location.toLowerCase())
   )
       {
      matches.push(people);       
       }
  }


console.log(matches[1])
/* All tasks



Create a loop that iterates on the mockData array


Count the number of matches.


In this loop, compare the data with your profile data and store a person as a match when they meet the following criteria:

- Your age range and their age match
- Their age range and your age match
- Their gender_interest and your gender match. The value B can match with both M and F.
- Your gender_interest and their gender match. The value B can match with both M and F.
- You both have the same location


Show all possible matches to the user by printing it in a nice format.


Show the number of matches.


During development of the matching process it can help to create a filled-in profile object so you don’t have to answer all the questions each time you run the program.


How to open a REPL?
+
Grow!

Replace the data in mockData.js with your new data and test your new code. Make sure you still use:

module.exports = {
                 data: // [ your data set ] */
