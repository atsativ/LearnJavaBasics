// Global Scope and Functions

var myGlobal = 10

function RandomFunc(){
   oopsGlobal = 5;
}

function NotRandomFunc(){
    var output="";

    if(typeof myGlobal != "undefined"){
        output +="myGlobal: " +myGlobal;
    }

    
    if(typeofoopsGlobal != "undefined"){
        output +="oopsGlobal: " + oopsGlobal;
    }

    console.log(output);

}

RandomFunc()
NotRandomFunc()