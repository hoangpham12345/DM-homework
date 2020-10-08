var e = 0;      //use for easter egg.

function easterEgg(){
    switch(e){
        case 1: document.getElementById("result").innerHTML = "Wrong input format, please enter a positive enter."; break;
        case 2: document.getElementById("result").innerHTML = "Wrong input again, please enter a positive enter"; break;
        case 3: document.getElementById("result").innerHTML = "You have input wrong format 3 times, please enter a positive enter"; break;
        case 4: document.getElementById("result").innerHTML = "Follow the instruction: ENTER A POSTIVE NUMBER, please"; break;
        default:
            window.alert("I have nothing to tell you now");
            window.alert("You will be redirected into homepage in 1s");
            setTimeout(function(){ window.location="index.html";}, 1000);
     }
}

function input(){
    var input = parseInt(document.getElementById("input").value);
    if(isNaN(input) || input <= 0){
        return -1;
    } else{
    return input;
    }
}

function non_recursiveAlg(n){
    return parseInt((Math.pow(1 + Math.sqrt(5), n) - Math.pow(1 - Math.sqrt(5), n))/(Math.sqrt(5)*Math.pow(2, n)));
}

function non_recursiveFibonacci(){
    document.getElementById("result").innerHTML = "";
    var n = input();
    if (n<1){
        e++;
        easterEgg();
    }else{
        e = 0;
        var time1 = Date.now();
        var i, result = "";
        for (i= 1; i <= n; i++){
            result += non_recursiveAlg(i) + "<br>";           
        };
        var time2 = Date.now();
        document.getElementById('result').innerHTML = result + "It took " + (time2 - time1) + " ms to do the calculation.";
    }
}

function recursiveAlg(n){
    if(n==1 || n==2){
        return 1;
    }
    return recursiveAlg(n-1) + recursiveAlg(n-2);
}

function recursiveFibonacci(){
    document.getElementById("result").innerHTML = "";
    var n = input();
    if (n<1){
        e++;
        easterEgg();
    }else{
        e = 0;
        var time1 = Date.now();
        var i, result = "";
        for (i= 1; i <= n; i++){
            result += recursiveAlg(i) + "<br>";  
        };
        var time2 = Date.now();
        document.getElementById('result').innerHTML = result + "It took " + (time2 - time1) + " ms to do the calculation.";
    }
}

function compare2Alg(){
    document.getElementById("result").innerHTML = "";
    var n = input();
    if (n<1){
        e++;
        easterEgg();
    }else{
        e = 0;
        var p = document.createElement("p");        //a line
        p.innerHTML = "(Assume we only compare the time it took for computer to finish calculate the n(th) Fibonacci number.)";
        document.getElementById("result").appendChild(p);
        p = document.createElement("p");
        p.innerHTML = "With n = " + n + ", we have:";
        document.getElementById("result").appendChild(p);
        
        var time1 = Date.now();
        var result = non_recursiveAlg(n);
        var time2 = Date.now();

        var time3 = Date.now();
        var result = recursiveAlg(n);
        var time4 = Date.now();

        var table = document.createElement("table");
        table.id = "result-table";
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "Non-recursive";
        cell2.innerHTML = "Recursive";
        row = table.insertRow();
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = (time2 - time1) + "ms";
        cell2.innerHTML = (time4 - time3) + "ms";
        document.getElementById("result").appendChild(table);
        
       // document.getElementById('result').innerHTML = "The " + n + "<br>" + "with  " + result + "It took " + (time2 - time1) + " ms to do the calculation.";
    }
}

window.onload = function(){
    document.getElementById("recursive-button").addEventListener("click", recursiveFibonacci);
    document.getElementById("non-recursive-button").addEventListener("click", non_recursiveFibonacci);
    document.getElementById("compare-button").addEventListener("click", compare2Alg);
}