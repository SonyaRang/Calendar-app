var saveButton = document.querySelector(".save-btn").addEventListener("click", function(){
    console.log("test");

    //save input text 
    localStorage.setItem("ToDo,");
    
    //retreave storage
    document.getElementById("result").innerHTML = localStorage.getItem("ToDo");
    
    //input retreaved loal storage back to line
    })
    
    var colorTime = document.querySelectorAll (".description");
    var colorTimeArray = Array.from (colorTime);
    console.log (colorTimeArray);

    //write a function to loop through color time array
    console.log (moment().format())

    //write an if statement 
    //each if statement should determine wether to add class to the todo element