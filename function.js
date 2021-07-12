function functionName(parameter1, parameter2) {
    //Do Something
    return parameter1 * parameter2
    
}

alert(functionName(2,3));

function functionWithOutReturn(parameter1, parameter2) {
    alert("This is a function without 'retrun' statement")
    
}

function functionName2(x,y){
    if (y ===undefined){
        y = 0;
    }
}

functionName2(3)

functionWithOutReturn(2,3,4)

x = findMax(1, 123, 500, 115, 44, 88);

function findMax(){
    var i, max = 0;
    for(i =0; i < arguments.length; i++){
        if (arguments[i] >max){
            max = arguments[i]
        }
    }
    return max;
}