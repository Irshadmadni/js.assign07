document.write('Q1:')
document.write('<br>')

var city= prompt("Enter your City")
if(city==="Karachi"){
    alert("Welcome to the city of lights")
    document.write("Welcome to the city of lights")
}
document.write("<br>")
document.write("<br>")

document.write('Q2:')
document.write('<br>')
var gender= prompt("Enter your gender")
if(gender==="Male"){
    alert("Good Morninng Sir")
    document.write
}
if(gender==="Female"){
    alert("Good Morninng M'am")
    document.write
}
document.write("<br>")
document.write("<br>")

document.write("Q3")
document.write("<br>")

var color= prompt("Enter the signal color")
if(color==="red"){
    alert("you must stop")
    document.write
}
if(color==="yellow"){
    alert("Ready to move")
    document.write
}
if(color==="green"){
    alert("Move now")
    document.write
}
document.write("<br>")
document.write("<br>")

document.write("Q4")
document.write("<br>")
var remaining_Fuel = prompt(" enter the remaining fuel in car ");
if (remaining_Fuel < "0.25" ){
    document.write("Please refill the fuel in your car" )
}
var remFuel = prompt (" enter the remaining fuel in car ")

if (remFuel < "0.25" ){
    document.write("Please refill the fuel in your car")
    alert("Please refill the fuel in your car")
    
}
else{
    alert('you do not need to refill to feel till now')
    document.write('you do not need to refill to feel till now')
}
document.write('<br>')
document.write('<br>')

document.write('Q5')
document.write('<br>')

document.write('a.')
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
document.write('b')
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write('c')
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
document.write('d')

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost is equal");
document.write('The cost is equal')
}
document.write('e')

if (true){
alert("True");
}

if (false){
alert('false')
}
document.write('f')
if("car" < "cat"){
    alert("car is smaller than cat");
    document.write('car is smaller than cat')
    }
    document.write('<br>')
    document.write('<br>')

    document.write('Q6')
    document.write('<br>')

    var subject1 = prompt ('Enter 1st Subject Name') , subject2 = prompt ('Enter 2nd Subject Name') , subject3 = prompt ('Enter 3rd Subject Name')
    var totalMarks = 100 
    var totalObtained1 = prompt ('Enter 1st Subject Obtained Marks')
    var totalObtained2 = prompt ('Enter 2nd Subject Obtained Marks')
    var totalObtained3 = prompt ('Enter 3rd Subject Obtained Marks')
    var total = totalObtained1 + totalObtained2 + totalObtained3
    document.write("<b>Subject</b>", "<b>Total marks</b>    " , "<b>Total Obtained</b>  ", "<b>Percentage</b>")
    document.write('<br>')
    document.write('<b>subject1</b>:', totalMarks ,"  ",totalObtained1 ," ",(totalObtained1/totalMarks) * 100, "%")
    document.write('<br>') 
    document.write('<b>subject2</b>:',totalMarks,"  ", totalObtained2," ", (totalObtained2/totalMarks) * 100,"%")
    document.write('<br>')
    document.write('<b>subject3</b>:', totalMarks ,"  ",totalObtained3,"  ",(totalObtained3/totalMarks) * 100, "%")
    document.write('<br>')
    document.write("<b>Total</b> :",100 * 3 ,"  ", total," ", (total/300)*100,"%")
    document.write('<br>')
    document.write('<br>')

    document.write('Q7')
    document.write('<br>')
    
    var secnum = 6
    var guessNum= +prompt(" enter the secret number ")
    if (guessNum == secnum) {
        alert("Bingo!Correct answer");
    }
    else if (guessNum == secnum+1) {
    document.write(   "Close enough to the correct answer.")
}
document.write('<br>')
document.write('<br>')

document.write('Q8')
document.write('<br>')

var num= prompt('Enter any number')
if(num%3==0 &&num>2 &&num!==""){
    alert('This number is divisible by 3')
    
}
else{alert('This number is not divisible by 3')}
document.write('<br>')
document.write('<br>')

document.write('Q9')
document.write('<br>')
var num=prompt("Enter any number")
if(num/2 && num>=2){
    alert('This is an Even Number')
}
else{alert('This is an Odd Number')}
document.write('<br>')
document.write('<br>')

document.write('Q10')
document.write('<br>')
var temp=prompt('Enter your area Temperature > than "10"' )
if(temp>40){
    alert('It is too hot outside.')
}
if(temp>30 && temp<=40){
    alert('The Weather today is Normal.')
}
if(temp>20 && temp<=30){
    alert('Today’s Weather is cool.')
}
if(temp>30 && temp<=40){
    alert('OMG! Today’s weather is so Cool')
}
else{alert('Please Enter Your Temperature > than "10"')}
document.write('<br>')
document.write('<br>')

document.write('Q11')
document.write('<br>')
var firstNum=prompt('Enter First Number')
var operator=prompt('Enter your operator exm: + - * /')
var secondNum=prompt('Enter second Number')  
if(operator==="+"){
alert(firstNum+secondNum)
}
else if(operator==="+"){
    alert(firstNum+secondNum)
}
else if(operator==="-"){
    alert(firstNum-secondNum)
}
else if(operator==="*"){
    alert(firstNum*secondNum)
}
else if(operator==="/"){
    alert(firstNum/secondNum)
}
else{ alert('Invalid Operation')}