function RandomNum() {
    var var1=Math.floor((Math.random() * 20)+1);
    return var1;
}

function RandomOperator() {
    var operator=['+', '-', '/', '*'];
    var op = Math.floor((Math.random() * 4));
    return operator[op];
}

var v1 = [];
var v2 = [];
var oper = [];
var JSONObject = [];


for(var i = 0; i < 20; i++) {
    v1[i] = RandomNum();
    v2[i] = RandomNum();
    oper[i] = RandomOperator();

    JSONObject[i] = {
        "var1":v1[i],
        "var2":v2[i],
        "op":oper[i],
        "uo":0,
        "ao":0
    };
    if (JSONObject[i].op == "+") {
        JSONObject[i].ao = JSONObject[i].var1+JSONObject[i].var2;
    } else if(JSONObject[i].op == "-") {
        JSONObject[i].ao = JSONObject[i].var1-JSONObject[i].var2;
    } else if(JSONObject[i].op == "/") {
        JSONObject[i].ao = JSONObject[i].var1/JSONObject[i].var2;
    } else if (JSONObject[i].op == "*") {
        JSONObject[i].ao = JSONObject[i].var1 * JSONObject[i].var2;
    }
}

function Question() {
    res1 = document.getElementById("result");
    res1.style.visibility = "visible";
    res1.innerHTML = "";
    start1 = document.getElementById("start");
    start1.style.visibility = "hidden";
    next = document.getElementById("next");
    next.style.visibility="visible";
    var x1 = [], x2 = [], x3 = []; 
    x1 = v1;
    x2 = v2;
    x3 = oper;
    Display(x1,x2,x3)
}
var j=0;

function Display(num1,num2,operator) {
    var msg1 = document.getElementById("question");
    msg1.innerHTML = num1[j] + operator[j] + num2[j];
    var msg = document.getElementById("message");
    msg.innerHTML="Question No" + (j+1);
    j = j+1;
    if( j >= 21) {
        var id1 = document.getElementById("result");
        var id2 = document.getElementById("next");
        var id3 = document.getElementById("start");
        id1.style.visibility = "hidden";
        id2.style.visibility = "hidden";
        id3.style.visibility = "hidden";
        msg.innerHTML = "Test Finished:Your Results"
        DisplayAnswer();
        
    }
}

function DisplayAns() {
    var id1 = document.getElementById("result");
    var id2 = document.getElementById("next");
    var id3 = document.getElementById("start");
    var msg1 = document.getElementById("message")
    id1.style.visibility = "hidden";
    id2.style.visibility = "hidden";
    id3.style.visibility = "hidden";
}

var k=0;
var sc=0;
var uresult = [];

function Next() {
    uresult = document.getElementById("result").value;
    JSONObject[k].uo = uresult[k];
    if(JSONObject[k].ao == uresult) {
        sc=sc+1;
    }
    k=k+1;
    score=document.getElementById("score");
    score.innerHTML="Your Score : "+ sc;
    Question();
}


function DisplayAnswer() {
    for(var p = 0; p < 20; p++) {
        document.write( "<br>" + (p+1) + "." + "Actual Output= " + JSONObject[p].ao + "   Your Output = " + JSONObject[p].uo);
    }
    return false;
}

