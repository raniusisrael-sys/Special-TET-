// ===============================
// TET Practice App
// ===============================
console.log("Questions:", questions);
let practiceQuestions =
JSON.parse(localStorage.getItem("practiceQuestions")) || [];

let current = 0;
let score = 0;

// Load first question
if (
    document.getElementById("question") &&
    practiceQuestions.length > 0
){
    loadQuestion();
}

// ----------------------------

function loadQuestion(){
  if(practiceQuestions.length==0){

    alert("No questions found!");

    window.location="index.html";

    return;

}

    let q = practiceQuestions[current];

    document.getElementById("progress").innerHTML =
    "Question " + (current+1) +
    " / " + practiceQuestions.length;

    document.getElementById("question").innerHTML =
    q.question;

    let html="";

    q.options.forEach(function(option,index){

        html += `
        <label class="option">
            <input type="radio"
                   name="answer"
                   value="${index}">
            ${option}
        </label>
        `;

    });

    document.getElementById("options").innerHTML=html;

    document.getElementById("result").innerHTML="";

    document.getElementById("nextBtn").style.display="none";
    document.getElementById("checkBtn").style.display="block";
document.getElementById("nextBtn").style.display="none";

}

document
.getElementById("checkBtn")
?.addEventListener("click",checkAnswer);
document
.getElementById("nextBtn")
?.addEventListener("click", nextQuestion);

function checkAnswer(){

    let selected=document.querySelector(
    'input[name="answer"]:checked'
    );

    if(!selected){
        alert("Please select an answer");
        return;
    }

    let q=practiceQuestions[current];
    let ans=parseInt(selected.value);

    let labels=document.querySelectorAll(".option");

    labels.forEach((label,index)=>{

        if(index==q.answer){
            label.style.background="#c8f7c5";
            label.style.border="2px solid green";
        }

        if(index==ans && ans!=q.answer){
            label.style.background="#ffd6d6";
            label.style.border="2px solid red";
        }

        label.querySelector("input").disabled=true;

    });

    if(ans==q.answer){
        score++;

        document.getElementById("result").innerHTML=
        "<h2 style='color:green'>✅ Correct</h2>";
    }
    else{

        document.getElementById("result").innerHTML=
        "<h2 style='color:red'>❌ Wrong</h2>";
    }

    document.getElementById("result").innerHTML+=
    "<hr>"+
    "<b>Correct Answer :</b><br>"+
    q.options[q.answer]+
    "<br><br>"+
    "<b>Explanation :</b><br>"+
    q.explanation;

    document.getElementById("checkBtn").style.display="none";

    document.getElementById("nextBtn").style.display="block";
}

function nextQuestion(){

current++;

if(current>=practiceQuestions.length){

localStorage.setItem("score", score);

localStorage.setItem("total", practiceQuestions.length);

window.location = "result.html";

return;

}

loadQuestion();

}
function startPractice() {

    let name = document.getElementById("name").value.trim();
    let subject = document.getElementById("subject").value;
    let count = parseInt(document.getElementById("count").value);

    if(name==""){
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("candidate", name);

    if(subject=="ALL"){
        practiceQuestions=[...questions];
    }else{
        practiceQuestions=questions.filter(q=>q.subject===subject);
    }

    practiceQuestions.sort(()=>Math.random()-0.5);
    practiceQuestions=practiceQuestions.slice(0,count);

    localStorage.setItem(
        "practiceQuestions",
        JSON.stringify(practiceQuestions)
    );

    window.location="practice.html";
}