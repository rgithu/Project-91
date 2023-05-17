player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Anwer turn : "+player2_name;

function send(){
    Getword = document.getElementById("word").value;
    word =Getword.toLowerCase();
    console.log(word);
    number1 = word.charAt(1);
    console.log(number1);
    lengthdivide2= Math.floor(word.length/2);
    number2 = word.charAt(lengthdivide2);
    console.log(number2);
    lengthsubtract1 = word.length-1;
    number3 = word.charAt(lengthsubtract1);
    console.log(number3);
    removenumber1 = word.replace(number1,"_");
    console.log(removenumber1);
    removenumber2 = removenumber1.replace(number2,"_");
    console.log(remove2);
    removenumber3 = removenumber2.replace(number3,"_");
    console.log(removenumber3);
    question = "<h4 id='word_display'>Q."+removenumber3+"</h4>";
    ibox="<br>Answer : <input type='text' id='input_check_box'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+ibox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""; 
}

