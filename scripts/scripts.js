let informationArray = []

// 1) Find the element
const bodyRef = document.body;
// 2) Define a function 
function clickHandler(event){ 
    if (event.target.tagName === "BUTTON") {
        console.log(event.target)
        //which button was clicked on?
        if (event.target.textContent === "Submit") {
            console.log('Hello World')
            //store value from the inputs 
            // 1) Define 3 variables. 
            let fNameInput = document.querySelector("#firstname")
            let lNameInput = document.querySelector("#lastname")
            let programInput = document.querySelector("#progname")
            console.log(fNameInput.value)
            
            // 2) Make a new object. 
            let newNote = {
                firstName: fNameInput.value,
                lastName: lNameInput.value,
                progName: programInput.value
            };

            // 3) Push the information from the object to the new array. 
            console.log(newNote); 
            informationArray.push(newNote); 
            console.log(informationArray); 

            //Now we need to clear the string when we are done with the insertion. 
            fNameInput.value = "";
            lNameInput.value = "";
            programInput.value = ""; 
            
            addStudentToList(newNote); 

        } else if (event.target.textContent === "Change Background Color") {
            console.log('Goodbye World')
            document.body.classList.toggle("darkTheme");
        }
        }
    }
// 3) addEventListener
bodyRef.addEventListener("click", clickHandler); 

//Now we are going to add students to the lists that are shown on our website. 
function addStudentToList(newNote) {
    //newNote will have whatever is passed to this function when it's passed. 
    let citList = document.querySelector(".CIT");
    let cstList = document.querySelector(".CST");
    let newLi = document.createElement("li"); 
    newLi.textContent = `${newNote.firstName} ${newNote.lastName}`; 
    //{firstName:, lastName:, progName:}
    //if newStudent.progName === CIT --> add a new li to the <ul> that is CIT
    //vice versa for if a progName === CST. 
    if (newNote.progName === "CIT") {
        citList.appendChild(newLi);
    } else if (newNote.progName === "CST") {
        cstList.appendChild(newLi);
    }
}