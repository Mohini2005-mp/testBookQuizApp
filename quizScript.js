const quizOp = localStorage.getItem("quizOpValue");
const quizTopics = [];
quizTopics["JavaScript"] = [
  {
    question: "What does JavaScript primarily do in a webpage?",
    options: [
      "It adds style",
      "It manipulates the content and behavior",
      "It defines the structure of the page",
    ],
    correctAnswer: "It manipulates the content and behavior",
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["String", "Text", "Character"],
    correctAnswer: "String",
  },
  {
    question:
      "What is the correct syntax for declaring a variable in JavaScript?",
    options: ["var x = 10;", "variable x = 10;", "int x = 10;"],
    correctAnswer: "var x = 10;",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "create function myFunction() {}",
      "def myFunction() {}",
    ],
    correctAnswer: "function myFunction() {}",
  },
  {
    question: "Which of the following is used to define a class in JavaScript?",
    options: [
      "class MyClass {}",
      "function MyClass {}",
      "create class MyClass {}",
    ],
    correctAnswer: "class MyClass {}",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "unshift()"],
    correctAnswer: "push()",
  },
  {
    question:
      "Which of these is used for looping through an array in JavaScript?",
    options: ["for loop", "while loop", "forEach() method"],
    correctAnswer: "forEach() method",
  },
  {
    question:
      "Which of the following is not a valid comparison operator in JavaScript?",
    options: ["==", "===", "=!"],
    correctAnswer: "=!",
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "/* This is a comment */",
    ],
    correctAnswer: "// This is a comment",
  },
  {
    question:
      "Which event is triggered when a user clicks on a button in JavaScript?",
    options: ["onClick", "onPress", "onMouseClick"],
    correctAnswer: "onClick",
  },
];
quizTopics["HTML"] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which of the following is the correct syntax to link an external CSS file in HTML?",
    options: [
      "&lt;link src='styles.css'&gt;", 
      "&lt;link href='styles.css'&gt",
      "&lt;stylesheet&gt; styles.css &lt;/stylesheet&gt;",
    ],
    correctAnswer: "&lt;link href='styles.css'&gt",
  },
  {
    question: "Which tag is used to define a table row in HTML?",
    options: ["&lt;td&gt;", "&lt;th&gt;", "&lt;tr&gt;"],
    correctAnswer: "&lt;tr&gt;",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;"],
    correctAnswer: "&lt;br&gt;",
  },
  {
    question: "Which attribute is used to define inline styles in HTML?",
    options: ["style", "class", "id"],
    correctAnswer: "style",
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;"],
    correctAnswer: "&lt;ul&gt;",
  },
  {
    question: "How do you create a hyperlink in HTML?",
    options: [
      "&lt;a href='url'&gt;link&lt;/a&gt;",
      "&lt;link href='url'&gt;link&lt;/link&gt;",
      "&lt;a url='url'&gt;link&lt;/a&gt;",
    ],
    correctAnswer: "<a href='url'>link</a>",
  },
  {
    question:
      "What is the correct HTML element to define a footer for a document?",
    options: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;section&gt;"],
    correctAnswer: "&lt;footer&gt;",
  },
  {
    question: "Which tag is used to define an image in HTML?",
    options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;"],
    correctAnswer: "&lt;img&gt;",
  },
  {
    question: "Which tag is used to define a paragraph in HTML?",
    options: ["&lt;p&gt;", "&lt;para&gt;", "&lt;text&gt;"],
    correctAnswer: "&lt;p&gt;",
  },
];
quizTopics["CSS"] = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "background-color", "bgcolor"],
    correctAnswer: "background-color",
  },
  {
    question: "Which CSS property is used to control the font size?",
    options: ["text-size", "font-size", "font-style"],
    correctAnswer: "font-size",
  },
  {
    question: "How do you select an element with the class 'example' in CSS?",
    options: [".example", "#example", "example"],
    correctAnswer: ".example",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["color", "text-color", "font-color"],
    correctAnswer: "color",
  },
  {
    question: "What is the default value of the 'position' property in CSS?",
    options: ["absolute", "relative", "static"],
    correctAnswer: "static",
  },
  {
    question:
      "Which property is used to change the spacing between words in CSS?",
    options: ["letter-spacing", "word-spacing", "word-break"],
    correctAnswer: "word-spacing",
  },
  {
    question: "How do you make a list appear horizontally in CSS?",
    options: ["list-style: horizontal;", "display: inline;", "display: block;"],
    correctAnswer: "display: inline;",
  },
  {
    question:
      "Which of the following CSS properties is used to set the space between the content and the border of an element?",
    options: ["margin", "padding", "border-spacing"],
    correctAnswer: "padding",
  },
  {
    question: "Which CSS property controls the text alignment?",
    options: ["text-align", "align-text", "align"],
    correctAnswer: "text-align",
  },
];
// Initial question index
let j = 0;
let score = 0;
let timer = 0;
let timerInterval;

document.getElementById("quizHadding").innerHTML = `<h2>${quizOp}</h2>`;
// Function to display the current question and options
function showOpAnsQ() {
  document.getElementById("questionSection").innerText = `
  Question ${j + 1}: ${quizTopics[quizOp][j].question
  }`;
 optionGenerator();
}
// option generator
function optionGenerator() {
// option generator
  op = ""; // Reset the options string before appending new options
  // Loop through each option and add it to the op string
  for (let i = 0; i < (quizTopics[quizOp][j].options.length); i++) {
    op += `<div class="option box">${quizTopics[quizOp][j].options[i]}</div>`;
  // Update the options in the DOM
  document.getElementById("options").innerHTML = op;
}

}
// Function to handle user option selection
function userOption() {
  // Add event listener to the options container
  document.getElementById("options").addEventListener("click", (opt) => {
    if (opt.target.classList.contains("option")) {
      const userAnswer = opt.target.textContent;

      // Check if the selected option is correct
      if (userAnswer === quizTopics[quizOp][j].correctAnswer) {
        score += 10; // Add 10 points for a correct answer
      }

      // Update the score
      document.getElementById("scoreboard").innerText = `Score: ${score}`;
      // Move to the next question after selection
      if (j < (quizTopics[quizOp].length - 1)) {
        j++; // Increment the question index
        
      } else {
        clearInterval(timerInterval); // Stop the timer when quiz ends
        localStorage.setItem("Timer", timer);
        localStorage.setItem("Score", score);
        localStorage.setItem('LngthOfQuestion',quizTopics[quizOp].length);
        window.location.href = "resultPage.html"; // Redirect to result page
      }

      // Show the next question
      showOpAnsQ();
    }
  });
}
// Timer setup
function startTimer() {
  timerInterval = setInterval(() => {
    timer++; // Increment the timer every second
    document.getElementById("Timer").innerText = `${timer}s`;
  }, 1000);
}

showOpAnsQ();  
userOption();
startTimer();

