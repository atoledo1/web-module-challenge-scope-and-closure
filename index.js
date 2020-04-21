// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * -While one has a local variable, the other has a global one.   
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * - From the two, counter 1 is the one that uses a closure. 
 * This is indicated by the fact that the variable is inside of the function; it is local. 
 * 
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * - The counter 1 code would be better if what you are trying to do is track "count" across multiple times 
 * while counter2 would make more sense if you are only doing it once and/or also want to use it for other functions. 
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}
const counter1 = counterMaker();

// counter2 code
let count = 0;
function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let points=0;
  return function (){
    points=points+ Math.floor(Math.random()*3);
    return points;
  }
}
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, number){

  const homeS=callback('game1');
  const awayS=callback('game1');
  let homeScore=0;
  let awayScore=0;

  for(let i=0;i<number; i++){
    homeScore=homeS();
    awayScore=awayS();
  }
  
  return {homeS: homeScore, awayS:awayScore};

}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(cb){
  
  const homePoints=cb('1InningHome');
  const awayPoints=cb('1InningAway');
  
  return [awayPoints(),homePoints()];

}

function scoreboard(getScore,innings,number) {
  let answer=[];
  let Home=0;
  let Away=0;
   
  for(let i=0;i<number;i++){
   let score=getScore(innings);
   answer.push(`${i+1}th inning: ${score[0]} - ${score[1]}`);
   Away=Away+score[1];
   Home=Home+score[1];
  }

  answer.push("");
  answer.push(`Final Score: ${Away} - ${Home}`);
 
  for(let i=0;i<answer.length;i++){
    console.log(answer[i]);
  }  
}


