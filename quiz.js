function check(){
    var c=0;
    var q1=document.Quiz.Question1.value;
    var q2=document.Quiz.Question2.value;
    var q3=document.Quiz.Question3.value;
    var q4=document.Quiz.Question4.value;
    var q5=document.Quiz.Question5.value;
    var q6=document.Quiz.Question6.value;
    var q7=document.Quiz.Question7.value;
    var q8=document.Quiz.Question8.value;
    var q9=document.Quiz.Question9.value;
    var quiz=document.getElementById("Quiz");
    var result=document.getElementById('result');
    
    if (q1=="A") {c++}
    if (q2=="A") {c++}
    if (q3=="C") {c++}
    if (q4=="C") {c++}
    if (q5=="A") {c++}
    if (q6=="C") {c++}
    if (q6=="C") {c++}
    if (q7=="B") {c++}
    if (q8=="A") {c++}
    if (q9=="A") {c++} 
    quiz.style.display="none";
    result.textContent=`${c}`;
    
}