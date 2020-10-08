function input(){
    var input = parseInt(document.getElementById("input").value);
    if(isNaN(input) || input <= 0){
        return -1;
    }else{
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
        document.getElementById("result").innerHTML = "Wrong input format, please enter a positive enter.";
    }else{
        var time1 = Date.now();
        var i, result = "";
        for (i= 1; i < n; i++){
            result += non_recursiveAlg(i) + "<br>";
            
        };
        var time2 = Date.now();
        document.getElementById('result').innerHTML = result + "It takes " + (time2 - time1) + " ms to do the calculation.";
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
        document.getElementById("result").innerHTML = "Wrong input format, please enter a positive enter.";
    }else{
        var time1 = Date.now();
        var i, result = "";
        for (i= 1; i < n; i++){
            result += recursiveAlg(i) + "<br>";
            
        };
        var time2 = Date.now();
        document.getElementById('result').innerHTML = result + "It takes " + (time2 - time1) + " ms to do the calculation.";
    }
}

window.onload = function(){
    document.getElementById("recursive-button").addEventListener("click", recursiveFibonacci);
    document.getElementById("non-recursive-button").addEventListener("click", non_recursiveFibonacci);
}

console.log(parseInt(1.5));