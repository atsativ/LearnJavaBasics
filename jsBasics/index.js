console.log("1. Hello from javascript")

// Addding numbers
var sum = 10 + 9
sum += 300.908 % 10
// console.log(sum)

// Adding strings
let s = " !!! ";
console.log("2. Welcome -" + sum +s)

// how to use double quotes
var myStr = "\n I am a \"double quoted\" string inside double quotes"
var name = "ADA"
console.log("3. name[1]" + myStr[myStr.length-1]);      

// Arrays can be nested -- accessed thru multi-D arrays 
// Arrays do not have to be of a particular datatype
myArr = [["White", 250], ["Blue",80], ["Red",65], "black"] 
console.log("4. "+myArr[1][1] + " : " + myArr[3]) 

// Unlike strings arrays can be modifies
myArr[0][1]= 25;
console.log("5. "+myArr)


//Pushing Elements into an Array 
myArr.push(["Orange", 99])
console.log("6. Pushed Nested Array element : "+myArr)

myArr.push("temp")
console.log("7. Pushed Element into array : "+myArr)

// Popped Elements
var store = myArr.pop()
console.log("8. Popped Element from array is : "+store +" |\n New Array : "+myArr)

// Manipuulatting arrays with Shift key word
var store = myArr.shift()
console.log("9. Popped Element from array using .shift : "+store +" |\n New Array : "+myArr)

// Manipulating Array with unshift
// Basically adds array element to the beginning
myArr.unshift("New Element")
console.log("10. Array using .unshift : "+myArr)


// !!!!!!!!!!!!!! NOTE THAT IT IS NOT THE BEST PRACTICE TO USE VAR 
// ALWAYS TRY USNING LET AND CONST 

