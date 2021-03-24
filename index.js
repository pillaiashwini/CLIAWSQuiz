const readlineSync = require("readline-sync");
const chalk = require("chalk");

const red = chalk.bold.bgRedBright;
const green = chalk.bgGreen.black;
const blue = chalk.bgBlue;
const magenta = chalk.bold.red;

userName = readlineSync.question("Hi!! Whats your name?  ")
console.log("\nWelcome",userName,"to AWS Quiz !!!\n")
console.log("**************************************")
console.log("**************************************\n")

const questions = [
  {
    question:magenta("Question.1 Name the architecture in which a user can own some private servers as well as they can distribute some of the workloads on the public cloud?\n\n a.Virtual Private Network\n b.Private Cloud\n c.Virtual Private Cloud\n d.Hybrid Cloud\n\n") + green("Answer: "),
    answer:"d"
  },
  {
    question:magenta("\nQuestion.2 Which service performs the function that when an instance is unhealthy it is terminated and replaced with a new one?\n\n a. Fault Tolerance\n b. Sticky Sessions\n c. Connection Draining\n d. Monitoring\n\n") + green( "Answer: "),
    answer:"a"
  },
  {
    question:magenta("\nQuestion.3 Amazon S3 is which type of storage service?\n\n a. Block \n b. Object\n c. Simple\n d. Secure\n\n") + green("Answer: "),
    answer:"b"
  },
  {
    question: magenta("\nQuestion.4 What type of server is used to speed the delivery of content using a variety of techniques for caching content closer to users?\n\n a. Edge server\n b. Origin Server\n c. Base server\n d. Remote server\n\n") + green(" Answer: ") ,
    answer:"a"
  },
  {
    question: magenta("\nQuestion.5 Which of the following is a system for creating block-level storage devices that can be used for Amazon Machine Instances in EC2?\n\n a. CloudWatch\n b. AWS Import/Export\n c. Amazon Elastic Block Store \n d. CloudTrail\n\n")  + green("Answer: "),
    answer:"c"
  },
  {
    question: magenta("\nQuestion.6 Which of the following feature is used for scaling of EC2 sites?\n\n a. Auto Replica\n b. Auto Scaling\n c. Auto Ruling\n d. Auto Add \n\n") + green("Answer: ") ,
    answer:"b"
  },
  {
    question:magenta("\nQuestion.7 Which of the following instance class is best used for applications that are processor- or compute-intensive?\n\n a. Standard Instances\n b. High Memory\n c. Instances\n d. High CPU Instances\n\n") + green("Answer: "),
    answer:"d"
  },
  {
    question:magenta("\nQuestion.8  Which of the following can be considered as a distributed caching system?\n\n a. CND\n b. CDN\n c. CND\n d. DCN\n\n") + green("Answer: ") ,
    answer:"b"
  },
  {
    question: magenta("\nQuestion.9 Which one of the following is not an application service on AWS?\n\n a. Simple Storage Service\n b. Simple Workflow\n c. Cloud Front\n d. Cloud Search \n\n")+ green ("Answer: " ),
    answer:"a"
  },
  {
    question:magenta("Question:10 What does EBS stand for?\n\n a. Elastic Build Service\n b. Elastic Blob Service\n c. Elastic Block Service\n d. Elastic Brick Service\n\n") + green("Answer: ")   ,
    answer:"c"
  }
]
let highScores = [];
highScores = [{
  name: "Name",
  score: "Score"
}
//   {
//   name: "Ashwini",
//   score: 10
// },
// {
//   name:"Akash",
//   score: 10
];

let score = 0;

function play(question, answer){
  userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log(green("\nThat's CORRECT answer :)"))
    score += 1;
  }
  else {
    console.log(red("\nThat's WRONG answer :("))
  }
  console.log(blue("\nYour Score: ", score));
  console.log("\n----------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------")
}

for(let i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

highScores.push({name:userName, score:score});

console.log(blue("Your Final Score: ", score))

// console.log(blue("\n\n\nScores:\n\n"))

// for(let i=0;i<highScores.length;i++) {
//   console.log(highScores[i].name + "       " + highScores[i].score)
// }