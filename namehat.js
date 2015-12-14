
var nameArr = [];
    var obj = {};

//takes user input text and adds it to an array -is supposed to reset the value in the input bar but isn't working
function addName() {
    var input = document.getElementById("addName").value;
    nameArr.push(input);
    // console.log(nameArr);
    document.getElementById("addName").value = '';
}

//takes a user input and adds it to an array
//the array gets appended to a list in the html on submit
function listAdd(array) {
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
}

//takes an array of names and shuffles the order
//returns same array shuffled
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    // console.log(array);
}

//takes the shuffled array and assigns the first index to the following and so on...
//assigns the last person the first
//returns a statement saying who buys for who
function assign(array) {
    for(var i = 0; i < array.length; i++){
        if(i === array.length - 1){
            obj[array[i]]= array[0];
        } else {
            obj[array[i]]= array[i + 1];
        }
    }
    return obj;
    }

function result(obj) {
    console.log(obj);
    var res = "";
      for(var key in obj){
        res = key + " buys for " + obj[key];
    var resultList = document.createElement("li");
    var item = document.createTextNode(res);
    resultList.appendChild(item);
    document.getElementById("results").appendChild(resultList);
}
}
//takes an array of names and splits them into chunks of 2
//returns an array of new 2 person arrays
//if the array has an odd number someone doesn't get paired
// function pair(array) {
//     // shuffle(nameArr);
//     newArr = [];
//     tempArr = [];
//     chunk = 2;
//     for (var i=0; i <array.length; i++){
//         for(var j = array.length; i < j; i+=chunk){
//                 tempArr = array.slice(i, i+chunk);
//                 newArr.push(tempArr);
//         }
//     } 
//     console.log(newArr);
//     return newArr;
// }




    //a possible way to solve this would be to start at array.length - 1 to get the last index
    //then match that with the 0th index
    //then add one to the 0th and subtract 1 from the last index
