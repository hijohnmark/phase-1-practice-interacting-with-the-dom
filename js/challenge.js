

// variables for the counter element and the innerText of that element parsed into a number
const counterElement = document.getElementById("counter")
let counter = parseInt(counterElement.innerText, 10)

// button variables
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const heartButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")
const buttons = document.getElementsByClassName("not-pause")

// global variables for setting the seconds interval
const addSeconds = () => {
    counter += 1
    counterElement.innerText = counter
}

let intervalID

const startCounter = () => {
    intervalID = setInterval(addSeconds, 1000)
}

// Button event listener callbacks

const handlePlus = () => {
    counter += 1
    counterElement.innerText = counter
}

const handleMinus = () => {
    counter -= 1
    counterElement.innerText = counter
}

// let numberOfLikes = 0

// const handleLike = () => {
    
//     const previousCounter = counter
  
//     let likesPerSecond = () => {
//         if (previousCounter !== counter){
//         numberOfLikes = 0
//         }
//         else numberOfLikes++
//         return numberOfLikes}
  
//     let ul = document.createElement("ul")
//     const list = document.getElementById("list")
  
//     list.append(ul)
//     ul.innerText = `You liked ${counter} a total of ` + likesPerSecond() + ` times!`
//   }


let likesPerSecond = 1

const handleLike = () => {
//Grab list element:
const list = document.getElementById("list")

// Check if there is an existing ul child node under the list node AND whether the counter dataset variable matches the global currentCounter variable.
const existingUl = list.querySelector("ul")

if (existingUl && parseInt(existingUl.dataset.counter, 10) === counter) {
// If both of these conditions are met, likesPerSecond increases in value by 1.
        likesPerSecond++
    }

// if there is an existing ul but its dataset counter doesn't match the current counter, create a new ul element with the current value of the counter and reset value of likesPerSecond to 0.
    else if (existingUl && parseInt(existingUl.dataset.counter, 10) !== counter){
        likesPerSecond = 1
        // likesPerSecond++
        const ul = document.createElement("ul")
        ul.dataset.counter = counter
        list.append(ul)
        ul.innerText = `You liked ${counter} a total of ${likesPerSecond++} times!`
    }

//else if there is no existing ul, create a new ul
    else {
        const ul = document.createElement("ul")
        ul.dataset.counter = counter
        list.append(ul)
        ul.innerText = `You liked ${counter} a total of ${likesPerSecond} times!`
    }
}


// let likesPerSecond = 0;
// let previousCounter = counter;

// const handleLike = () => {
//     const list = document.getElementById("list");

//     // Check if the counter has changed since the last like
//     if (previousCounter !== counter) {
//         // If it has changed, create a new <ul> element
//         const ul = document.createElement("ul");
//         ul.dataset.counter = counter;
//         list.appendChild(ul);
//         ul.innerText = `You liked ${counter} a total of ${likesPerSecond} times!`;
        
//         // Reset likesPerSecond for the new second
//         likesPerSecond = 0;
        
//         // Update previousCounter
//         previousCounter = counter;
//     }
    
//     // Increment likesPerSecond for each like within the same second
//     likesPerSecond++;
// };
        

const handlePause = () => {
//remove "pause" class and change innterText to "resume"
    if (pauseButton.classList.contains("pause")) {
        pauseButton.classList.remove("pause")
        pauseButton.innerText = "resume"
 
//clear seconds interval
        clearInterval(intervalID)
    
//change button back to "pause" class and innerText to "pause"    
    } else {
        pauseButton.classList.add("pause")
        pauseButton.innerText = "pause"

//resume seconds interval
        startCounter()
        }

//enable and disable all non-pause buttons
    for(let button of buttons) {
        if (pauseButton.classList.contains("pause")){
            button.disabled = false
        }
        else button.disabled = true
        }
}


// Event listeners for buttons 
plusButton.addEventListener("click", handlePlus)

minusButton.addEventListener("click", handleMinus)

heartButton.addEventListener("click", handleLike)   

pauseButton.addEventListener("click", handlePause)

// Calling function to start counter when page loads
startCounter()