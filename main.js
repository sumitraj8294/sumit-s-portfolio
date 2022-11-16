let secondNumber =5;
let firstNumber =10;
//
function compareNumber(firstNumber, secondNumber){
    if(firstNumber >secondNumber){
        console.log(firstNumber+ " is greater than " + secondNumber);
    }else if (firstNumber<secondNumber){
        console.log(firstNumber+ " is less than " + secondNumber);
    }
    else{
        console.log("both numbers are equal");
        console.log("this is anothervelement");
    }
}
compareNumber(5,10);
compareNumber(10,5);
compareNumber(10,10);

function print(){
    console.log("This is testing")
}
print();
print("my name is sumit");
//function expression


function addNumber(firstNumber,secondNumber){
    return firstNumber+secondNumber;
}
const result= addNumber(2,3);
console.log(result)

const subtract = function(firstNumber,secondNumber){
    return firstNumber- secondNumber;
}
console.log(subtract(5,4))

const person ={
    firstName: "sumit",
    lastName: "raj",
    print: function(){
        console.log("This function is the proprty of object")
    }
};

person.print();

