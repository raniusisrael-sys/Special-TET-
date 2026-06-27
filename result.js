// ===============================
// Result Page
// ===============================

// Get values from localStorage
let name = localStorage.getItem("candidate") || "Guest";

let score = parseInt(localStorage.getItem("score")) || 0;

let total = parseInt(localStorage.getItem("total")) || 0;

// Show candidate name
document.getElementById("candidate").textContent =
"👤 " + name;

// Show score
document.getElementById("score").textContent =
"✅ Score : " + score + " / " + total;

// Calculate percentage safely
let percent = 0;

if (total > 0) {
    percent = Math.round((score / total) * 100);
}

// Show percentage
document.getElementById("percentage").textContent =
"📊 Percentage : " + percent + "%";
