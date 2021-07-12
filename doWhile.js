var age = prompt("your age");
var result = "";

do{
    result += age;
    result += "-";
    age--;
} while(age > 0)
alert(result);