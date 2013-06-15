function randomNumber() {
    var variable = Math.floor((Math.random() * 20) + 1);
    return variable;
}

function randomOperator() {
    var operators = ['+', '-', '/', '*'];
    var index = Math.floor((Math.random() * 4));
    return operators[index];
}

var operand1 = [];
var operand2 = [];
var operator = [];
var JSONObject = [];


for (var i = 0; i < 20; i++) {
    operand1[i] = randomNumber();
    operand2[i] = randomNumber();
    operator[i] = randomOperator();

    JSONObject[i] = {
        "number1":operand1[i],
        "number2":operand2[i],
        "operation":operator[i],
        "user_op":0,
        "actual_op":0
    };
    if (JSONObject[i].operation == "+") {
        JSONObject[i].actual_op = JSONObject[i].number1 + JSONObject[i].number2;
    } else if (JSONObject[i].operation == "-") {
        JSONObject[i].actual_op = JSONObject[i].number1 - JSONObject[i].number2;
    } else if (JSONObject[i].operation == "/") {
        JSONObject[i].actual_op = (JSONObject[i].number1 / JSONObject[i].number2).toFixed(2);
    } else {
        JSONObject[i].actual_op = JSONObject[i].number1 * JSONObject[i].number2;
    }
}

function question() {
    var result = document.getElementById("result");
    result.style.visibility = "visible";
    result.value = "";
    start_test = document.getElementById("start");
    start_test.style.visibility = "hidden";
    next = document.getElementById("next");
    next.style.visibility = "visible";
    display(operand1,operand2,operator)
}
var j = 0;

function display(number1,number2,operation) {
    var question = document.getElementById("question");
    question.innerHTML = number1[j] + operation[j] + number2[j];
    var message = document.getElementById("message");
    message.innerHTML="Question No" + (j + 1);
    j = j + 1;
    if ( j >= 21) {
        var result = document.getElementById("result");
        var next = document.getElementById("next");
        var start_test = document.getElementById("start");
        result.style.visibility = "hidden";
        next.style.visibility = "hidden";
        start_test.style.visibility = "hidden";
        message.innerHTML = ""
        displayAnswer();
        return false
    }
}

function displayAns() {
    var matter = document.getElementById("display");
    matter.style.visibility = "hidden";
}

var k = 0;
var score = 0;
var user_result = [];

function nextAndEvaluate() {
    
    user_result[k] = document.getElementById("result").value;
    JSONObject[k].user_op = user_result[k];
    if (JSONObject[k].actual_op == user_result[k]) {
        score = score + 1;
    }
    k = k + 1;
    var score_msg = document.getElementById("score");
    score_msg.innerHTML = "Your Score : " + score;
    question();
}


function displayAnswer() {
    document.write("Test Finished: Your Results")
    document.write("<br>" + "your score is " + score)
    for (var p = 0; p < 20; p++) {
        document.write( "<br/>" + (p + 1) +  "." + "Actual Output = " + JSONObject[p].actual_op + " " + " Your Output =  " + JSONObject [p].user_op);
    }
    return false;
    
}
