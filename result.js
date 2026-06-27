let name = localStorage.getItem("candidate") || "Guest";

let score = parseInt(localStorage.getItem("score")) || 0;

let total = parseInt(localStorage.getItem("total")) || 0;

document.getElementById("candidate").textContent =
"👤 " + name;

document.getElementById("score").textContent =
"Score : " + score + " / " + total;

let percent = 0;

if (total > 0) {
    percent = Math.round((score / total) * 100);
}

document.getElementById("percentage").textContent =
"Percentage : " + percent + "%";
