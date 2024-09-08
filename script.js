document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", calculateLove);
});

function calculateLove() {
  const name1 = document.getElementById("name1").value.toLowerCase();
  const name2 = document.getElementById("name2").value.toLowerCase();

  if (name1.length == 0 || name2.length == 0) {
    alert("Please enter both names.");
    return;
  }

  // Generate a random score between 1 and 100
  const score = Math.floor(Math.random() * 100) + 1;

  let message;
  if (score < 30) {
    message = "Oh no! Maybe you are better off as friends.";
  } else if (score < 60) {
    message = "There's a potential! Keep working on your relationship.";
  } else if (score < 80) {
    message = "Great match! You have a strong connection.";
  } else {
    message = "Perfect match! You're made for each other!";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Your love score is ${score}%<br>${message};`;
}
