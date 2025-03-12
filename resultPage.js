window.onload = function () {
   const userName = localStorage.getItem("userNameSelected");
   const timer = localStorage.getItem("Timer");
   const score = localStorage.getItem("Score");
   const LngthOfQuestion = localStorage.getItem("LngthOfQuestion");

   function showResult() {
       document.getElementById("result").innerHTML = `
           <div id="resultSection">
               <div id="result">
                   <h1>Quiz Result</h1>
               </div>
               <br><br>
               <p><strong>${userName}</strong>, your result is:</p>
               <br>
               <p>Total time taken: ${timer} seconds</p>
               <br>
               <p>Total questions: ${LngthOfQuestion}</p>
               <br>
               <p>Total score: ${LngthOfQuestion * 10}. You got: ${score}</p>
               <div id="selection">
                   <button id="startAgainBtn">Start Again</button>
                   <button id="goHomeBtn">Go To Home</button>
               </div>
           </div>`;

       // Ensure the functions are available for the button click events
       document.getElementById("startAgainBtn").onclick = restartQuiz;
       document.getElementById("goHomeBtn").onclick = goHome;
   }

   function restartQuiz() {
       window.location.href = "quizpage.html";  // Restart the quiz page
   }

   function goHome() {
       window.location.href = "index.html";  // Go to the home page
   }

   showResult();  // Call the function to display the results
};
