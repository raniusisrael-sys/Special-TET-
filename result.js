let name = localStorage.getItem("candidate");

let score = Number(localStorage.getItem("score"));

let total = Number(localStorage.getItem("total"));

document.getElementById("candidate").innerHTML =
"👤 " + name;

document.getElementById("score").innerHTML =
"Score : " + score + " / " + total;

let percent = Math.round((score / total) * 100);

document.getElementById("percentage").innerHTML =
"Percentage : " + percent + "%";
