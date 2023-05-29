console.log("------------Hello from javascript-------------")
/*
Datatypes(7) : undefined, boolean , number, string, null, symbol and object(key-value pairs)

Declare a variable: var(used throught the prog) | let(used only be used in the scope of where it is being declared) | const (constant)
var myName = "Vitasta"
myName = 8
*/
const Name = "Vitasta" //string
const PI = 3.14126 //constant number

let price = 100 // variable number
const isPrimaryNumber = true //Boolean
let result //undefined
const data = null //typeOf is object

console.log("1a. Type of Result : "+typeof(data))


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

// Manipulating arrays with Shift key word
var store = myArr.shift()
console.log("9. Popped Element from array using .shift : "+store +" |\n New Array : "+myArr)

// Manipulating Array with unshift
// Basically adds array element to the beginning
myArr.unshift("New Element")
console.log("10. Array using .unshift : "+myArr)

// Objects & key value pairs
// What is a name-value pair : 

const Person = {
    'firstName' : 'Vitasta',
    'lastName' : 'Kachroo',
    'age' : 23
}

// To access the first name we use a DOT operator
console.log("11. Accessing Name-value Pairs : "+Person.firstName)
// This syntax i sknown as object literal and is one way to store data. 
//  The other way is by using arrays

// An Object is a collection of these name value pairs:
const PersonA = {
    'firstName' : 'Lorelai',
    'lastName' : 'Gilmore',
    'age' : 39,
    'Address' : {
        'houseNo': 30,
        'streetName':{
            'crossRoad' : '12thcross, 2nd Main',
            'street' : 'Katherine Street',
        },
        'area' : 'Stars Hollow',
        'Country':'USA'
    },
    'occupation' : 'Business Owner'
}

console.log("12. Object : "+PersonA.Address.streetName)
console.log(PersonA.Address.streetName)


// NOTE :

// ALWAYS TRY USING CONST UNLESS THE VARIABLE VALUE CHANGES THRU THE COURSE OF THE PROGRAM
// IT IS NOT THE BEST PRACTICE TO USE VAR 
// 
// ALWAYS TRY USNING LET AND CONST 

// why do we use LET and not VAR???
// Variables declared by 
// LET are only available inside the block where they're defined. 
// VAR are available throughout the function in which they're declared


// It is recommended to use =null instead of leaving it on undefined

// Js is a Dynamically Typed Language which means it is not required to specify the Datatype of the variable while declaring

// Datatypes are automatically converted as needed during execution

// NaN stands for Not A Number
