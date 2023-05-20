function send() {
    number1= document.getElementById("no1").value;
    number2= document.getElementById("no2").value;
    actual_answer= parseInt(number1)*parseInt(number2);
}

var question_number= "<h4>"+number1+" x "+number2+"</h4>"
var input_box= "<br>Answer: <input type= 'text' id= 'input_check_box'"
var check_button= "<br><br><button class= 'btn btn-info' onclick= 'check()'>Check</button>"
var row= question_number+input_box+check_button

document.getElementById("output").innerHTML= row;
document.getElementById("no1").value;
document.getElementById("no2").value;

var question_turn= "player1";
var answer_turn= "player2";

var player1_name= document.getElementById("player1").value
var player2_name= document.getElementById("player2").value

function check() {
    get_answer= document.getElementById("answer").value;

    if(get_answer==actual_answer) {
        if(answer_turn=="player1") {
            var update_player1_score= player1_score+1
            document.getElementById("player1_score").innerHTML= update_player1_score
        }

        else {
            var update_player2_score= player2_score+1
            document.getElementById("player2_score").innerHTML= update_player2_score
        }
    }

    if(question_turn=="player1") {
        question_turn= "player2"
        document.getElementById("player_question").innerHTML= "Question Turn- "+player2_name;
    }

    else {
        question_turn= "player1"
        document.getElementById("player_question").innerHTML= "Question Turn- "+player1_name;
    }


    if(answer_turn=="player1") {
        answer_turn= "player2"
        document.getElementById("player_answer").innerHTML= "Answer Turn- "+player2_name;
    }

    else {
        answer_turn= "player1"
        document.getElementById("player_answer").innerHTML= "Answer Turn- "+player1_name;
    }
}