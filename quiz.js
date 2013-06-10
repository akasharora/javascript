function RandomNumber() {
    var variable = Math.floor((Math.random() * 20)+1);
    return variable;
}

function RandomOperator() {
    var operators = ['+', '-', '/', '*'];
    var op = Math.floor((Math.random() * 4));
    return operators[op];
}

var variable1 = [];
var variable2 = [];
var operator = [];
var JSONObject = [];


for(var i = 0; i < 20; i++) {
    variable1[i] = RandomNumber();
    variable2[i] = RandomNumber();
    operator[i] = RandomOperator();

    JSONObject[i] = {
        "var1":variable1[i],
        "var2":variable2[i],
        "op":operator[i],
        "uo":0,
        "ao":0
    };
    if (JSONObject[i].op == "+") {
        JSONObject[i].ao = JSONObject[i].var1 + JSONObject[i].var2;
    } else if(JSONObject[i].op == "-") {
        JSONObject[i].ao = JSONObject[i].var1 - JSONObject[i].var2;
    } else if(JSONObject[i].op == "/") {
        JSONObject[i].ao = (JSONObject[i].var1 / JSONObject[i].var2).toFixed(2);
    } else if (JSONObject[i].op == "*") {
        JSONObject[i].ao = JSONObject[i].var1 * JSONObject[i].var2;
    }
}

function Question() {
    var res = document.getElementById("result");
    res.style.visibility = "visible";
    res.innerHTML = "";
    start1 = document.getElementById("start");
    start1.style.visibility = "hidden";
    next = document.getElementById("next");
    next.style.visibility="visible";
    var x1 = [], x2 = [], x3 = []; 
    x1 = variable1;
    x2 = variable2;
    x3 = operator;
    Display(x1,x2,x3)
}
var j=0;

function Display(num1,num2,operation) {
    var msg1 = document.getElementById("question");
    msg1.innerHTML = num1[j] + operation[j] + num2[j];
    var msg = document.getElementById("message");
    msg.innerHTML="Question No" + (j+1);
    j = j+1;
    if( j >= 21) {
        var result = document.getElementById("result");
        var next = document.getElementById("next");
        var start = document.getElementById("start");
        result.style.visibility = "hidden";
        next.style.visibility = "hidden";
        start.style.visibility = "hidden";
        msg.innerHTML = ""
        DisplayAnswer();
        return false
    }
}

function DisplayAns() {
    var id1 = document.getElementById("div1");
    id1.style.visibility = "hidden";
}

var k = 0;
var score = 0;
var uresult = [];

function NextAndEvaluate() {
    uresult = document.getElementById("result").value;
    JSONObject[k].uo = uresult[k];
    if(JSONObject[k].ao == uresult) {
        sc = sc+1;
    }
    k = k+1;
    score1 = document.getElementById("score");
    score1.innerHTML = "Your Score : " + score;
    Question();
}


function DisplayAnswer() {
    document.write("Test Finished: Your Results")
    document.write("<br>" + "your score is " + score)
    for(var p = 0; p < 20; p++) {
        document.write( "<br>" + (p+1) + "." + "Actual Output= " + JSONObject[p].ao +  "     Your Output =  " + JSONObject[p].uo);
    }
    
}
