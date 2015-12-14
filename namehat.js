
    var nameArr = [];

    function addName() {
        var input = document.getElementById("addName").value;
        nameArr.push(input);
        console.log(nameArr);
        input = '';
    };

    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
     while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
};

    function nameList(array) {
        var shufList = shuffle(nameArr);
        console.log(nameArr);
    }

    function pair(array) {
        shuffle(nameArr);
        for(var i = 0; i < array.length; i++){
            console.log(array[i], array[i+1]);
            // return array[i] + array[i+1];
        }
    }

    //a possible way to solve this would be to start at array.length - 1 to get the last index
    //then match that with the 0th index
    //then add one to the 0th and subtract 1 from the last index

        //    var li = document.createElement('li');
        // li.innerHTML = "<input type='checkbox'>" +
        //            "<label>" + input + "</label>" + 
        //            "<button class='delete'>Delete</button>";
        // list.appendChild(li);
