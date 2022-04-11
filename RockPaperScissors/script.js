// goal make clicked option bigger

// get variables to manipulate
// once user clicks on Option, check which one they clicked,
// make default option regular size
// when they confirm the option, return the clicked option

// when user confirms choice return random choice for computer

let rock = document.getElementById('rock-option')
let paper = document.getElementById('paper-option')
let scissors = document.getElementById('scissors-option')

let user_choice

const computer_options = ['rock', 'paper', 'scissors']

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);


//get returned computers choice
//compare computer return to user choice


function display_outcome(player, comp){
    let user_div = document.getElementById("user_outcome")
    let comp_div = document.getElementById("comp_outcome")
    
    if(player === "rock"){
        user_div.src = "Images/rock.png"
    }else if(player === "scissors"){
        user_div.src = "Images/scissors.png"
    }else if(player === "paper"){
        user_div.src = "Images/paper.png"
    }

    if(comp === "rock"){
        comp_div.src = "Images/rock.png"
    }else if(comp === "paper"){
        comp_div.src = "Images/paper.png"
    }else if(comp === "scissors"){
        comp_div.src = "Images/scissors.png"
    }
}

function outcome(){
    let computer = computerChoice()
    display_outcome(user_choice, computer)
    if(computer === user_choice){
        console.log("Tie")
    }else if(computer === "rock" && user_choice === "scissors"){
        console.log("computer wins")

    }else if(computer === "rock" && user_choice === "paper"){
        console.log("User wins")

    }else if(computer === "paper" && user_choice === "rock"){
        console.log("computer wins")

    }else if(computer === "paper" && user_choice === "scissors"){
        console.log("user wins")

    }else if(computer === "scissors" && user_choice === "paper"){
        console.log("Computer wins")

    }else if(computer === "scissors" && user_choice === "rock"){
        console.log("User wins")
    }
    console.log(computer)
}

function computerChoice(){
    let random = Math.floor((Math.random() * 3))
    return computer_options[random]
}

function rockClicked(){
    console.log('rock clicked')
    rock.style.width = "100%"
    paper.style.width = "50%";
    scissors.style.width = "50%"
    computerChoice()
    return user_choice = "rock"
}

function paperClicked(){
    console.log('paper clicked')
    rock.style.width = "50%"
    paper.style.width = "100%";
    scissors.style.width = "50%"
    return user_choice = "paper"
}

function scissorsClicked(){
    console.log('scissors clicked')
    rock.style.width = "50%"
    paper.style.width = "50%";
    scissors.style.width = "100%"
    return user_choice = "scissors"
}