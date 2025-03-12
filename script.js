let  quizOpValue;
let userNameSelected;
// Store userName when the button is clicked
document.getElementById("submitBtn").addEventListener("click", () => {
  userNameSelected = document.getElementById("userName").value; // Use .value for input elements
  // When the user selects a quiz option, capture it
  document.getElementById("selectionBoxes").addEventListener("click", (e) => {
    quizOpValue = e.target.textContent;
    // Redirect to quiz page
    localStorage.setItem('userNameSelected',userNameSelected);
    localStorage.setItem('quizOpValue',quizOpValue);
    window.location.href = "quizpage.html";
  });
});
