const box1 = document.getElementById("box-1")
const box2 = document.getElementById("box-2")
const box3 = document.getElementById("box-3")
const box4 = document.getElementById("box-4")
const box5 = document.getElementById("box-5")
const box6 = document.getElementById("box-6")
const box7 = document.getElementById("box-7")
const box8 = document.getElementById("box-8")
const box9 = document.getElementById("box-9")

const restartBtn = document.getElementById("restart-btn")
const newGameBtnCpu = document.getElementById("new-game-btn-vs-cpu")
const newGameBtnPlayer = document.getElementById("new-game-btn-vs-user")
const vsCpu = document.getElementById("new-game-btn-vs-cpu")
const vsPlayer2 = document.getElementById("new-game-btn-vs-user")

const playersTurn = document.getElementById("players-turn")
const displayNav = document.getElementById("display-nav")
const winnerDisplay = document.getElementById("winner-display") 
const userSelectPage = document.getElementById("user-selection-page")

const selectUser = document.getElementById("user-selection")
const displayPlayerOneScore = document.getElementById("player-one-score")
const displayPlayerTwoScore = document.getElementById("player-two-score")
const container = document.getElementById("container")
const playerOnePlaying = document.getElementById("player-one-playing")
const playerTwoPlaying = document.getElementById("player-two-playing")

const xChosen = document.getElementById("user-choose-x")
const oChosen = document.getElementById("user-choose-y")

let isPlayer1 = true
let isPlayer2 = false
let isCpu = false
let isPlayerWin = false

let player1mark = ""
let player2mark = ""
let computerMark = ""

let one = ""
let two = ""
let three = ""
let four = ""
let five = ""
let six = ""
let seven = ""
let eight = ""
let nine = ""

let playerOneScore = 0
let playerTwoScore = 0

let computerArray = [1,2,3,4,5,6,7,8,9]


xChosen.addEventListener("click",function(){
    pickMark(xChosen)
    player1mark = "fa-xmark"
    player2mark = "fa-o"
    computerMark = "fa-o"

    playersTurn.innerHTML = `
    <i class="fa-solid ${player1mark}"></i>
    <p>TURN</p>
    `
})

oChosen.addEventListener("click",function(){
    pickMark(oChosen)
    player1mark = "fa-o"
    player2mark = "fa-xmark"
    computerMark = "fa-xmark"
    playersTurn.innerHTML = `
    <i class="fa-solid ${player1mark}"></i>
    <p>TURN</p>
    `
})


vsCpu.addEventListener("click",function(){
    playerOnePlaying.textContent = "(PLAYER 1)"
    playerTwoPlaying.textContent = `(CPU)`
    firstPageDisabled()
    isCpu = true
})

vsPlayer2.addEventListener("click",function(){
    playerOnePlaying.innerHTML = `(PLAYER 1)`
    playerTwoPlaying.innerHTML = `(PLAYER 2)`
    firstPageDisabled()
    isCpu = false
})


box1.addEventListener("click",function(){
    
    selectBox(box1) 

    if(isPlayer1)
    {
        one = "x"
    }else if(isPlayer2)
    {
        one = "o"
    }

    determineWinner()
    
    if(isCpu){
        
        playerOneVsCpu(1)
        computerChoose()  
    }
})

box2.addEventListener("click",function(){

    selectBox(box2)

    if(isPlayer1)
    {
       two = "x"
    }else if(isPlayer2)
    {
        two = "o"
    }  

    determineWinner()

    if(isCpu){
        playerOneVsCpu(2)
        computerChoose()
    }
})

box3.addEventListener("click",function(){

    selectBox(box3)

    if(isPlayer1)
    {
        three = "x"
    }else if(isPlayer2)
    {
        three = "o"
    }

    determineWinner()
    
    if(isCpu){
        playerOneVsCpu(3)
        computerChoose()
    }

})

box4.addEventListener("click",function(){

    selectBox(box4)

    if(isPlayer1)
    {
        four = "x"
    }else if(isPlayer2)
    {
        four = "o"
    }
    
    determineWinner()

    if(isCpu){
        playerOneVsCpu(4)
        computerChoose()
    }
})


box5.addEventListener("click",function(){

    selectBox(box5)

    if(isPlayer1)
    {
        five = "x"
    }else if(isPlayer2)
    {
        five = "o"
    }  

    determineWinner()

    if(isCpu){    
        playerOneVsCpu(5)
        computerChoose()
    }
})

box6.addEventListener("click",function(){

    selectBox(box6)

    if(isPlayer1)
    {
        six = "x"
    }else if(isPlayer2)
    {
        six = "o"
    }  

    determineWinner()

    if(isCpu){    
        playerOneVsCpu(6)
        computerChoose()
    }
})


box7.addEventListener("click",function(){

    selectBox(box7)

    if(isPlayer1)
    {
       seven = "x"
    }else if(isPlayer2)
    {
       seven = "o"
    }  

    determineWinner()

    if(isCpu){  
        playerOneVsCpu(7)
        computerChoose()
    }
})

box8.addEventListener("click",function(){

    selectBox(box8)

    if(isPlayer1)
    {
       eight = "x"
    }else if(isPlayer2)
    {
       eight = "o"
    }
    
    determineWinner()

    if(isCpu){ 
        playerOneVsCpu(8)
        computerChoose()
    }
})

box9.addEventListener("click",function(){

    selectBox(box9)

    if(isPlayer1)
    {
      nine = "x"
    }else if(isPlayer2)
    {
      nine = "o"
    }  

    determineWinner()

    if(isCpu){  
        playerOneVsCpu(9)
        computerChoose()
    }
})

restartBtn.addEventListener("click",restartAll)

document.getElementById("next-level-btn").addEventListener("click",restartAll)

document.getElementById("quit-btn").addEventListener("click",function(){
    
    displayNav.style.display = "none"
    winnerDisplay.style.display = "none" 
    userSelectPage.style.display = "block"
    restartAll()
    playerOneScore = 0
    playerTwoScore = 0

    displayPlayerOneScore.textContent = playerOneScore
    displayPlayerTwoScore.textContent = playerTwoScore

    newGameBtnCpu.setAttribute("disabled","disabled")
    newGameBtnPlayer.setAttribute("disabled","disabled")

    restartUserSelect(xChosen)
    restartUserSelect(oChosen)

    selectUser.classList.remove("disabled")

    
})

function pickMark(mark){
    mark.classList.add("user-choice")
    selectUser.classList.add("disabled")
    newGameBtnCpu.removeAttribute("disabled")
    newGameBtnPlayer.removeAttribute("disabled")
}

function firstPageDisabled(){
    userSelectPage.style.display = "none"
    displayNav.style.display ="block"   
}

function selectBox(boxChoose){

    if(isPlayer1){

        boxChoose.innerHTML = `<i class="fa-solid ${player1mark}"></i>`
        
        playersTurn.innerHTML = `
        <i class="fa-solid ${player2mark}"></i>
        <p>TURN</p>`

    }
    
    if(isPlayer2){

        boxChoose.innerHTML = `<i class="fa-solid ${player2mark}"></i>`

        playersTurn.innerHTML = `
        <i class="fa-solid ${player1mark}"></i>
        <p>TURN</p>`
    }

    boxChoose.classList.add("disabled")

}

function determineWinner(){

    let player2orCpu = ""

    if((one === "x" & two === "x" & three === "x") 
    || (four === "x" & five === "x" & six === "x") 
    || (seven === "x" & eight === "x" & nine === "x") 
    || (one === "x" & four === "x" & seven === "x") 
    || (five === "x" & two === "x" & eight === "x") 
    || ( three === "x" & six === "x" & nine === "x") 
    || ( one === "x" & five === "x" & nine === "x") 
    || ( three === "x" & five === "x" & seven === "x") )
    {
        
        playerOneScore++
        playersTurn.textContent = "Player 1 win"
        container.classList.add("disabled")
        displayPlayerOneScore.textContent = playerOneScore
        isPlayerWin = true

        
       
        setTimeout(function(){

            winnerDisplay.style.display = "block"

        },1000)

    }

    if((one === "o" & two === "o" & three === "o") 
    || (four === "o" & five === "o" & six === "o") 
    || (seven === "o" & eight === "o" & nine === "o") 
    || (one === "o" & four === "o" & seven === "o") 
    || (five === "o" & two === "o" & eight === "o") 
    || ( three === "o" & six === "o" & nine === "o") 
    || ( one === "o" & five === "o" & nine === "o") 
    || ( three === "o" & five === "o" & seven === "o") )
    {
        if(!isCpu)
        {
            playersTurn.textContent = "Player 2 win"  
            
        }else if(isCpu)
        {
            playersTurn.textContent = "CPU win"

        }

        container.classList.add("disabled")
        playerTwoScore++
        displayPlayerTwoScore.textContent = playerTwoScore
        
        
        setTimeout(function(){

            winnerDisplay.style.display = "block"

        },1000)

    }

    if(!isCpu)
    {
        isPlayer1 = !isPlayer1
        isPlayer2 = !isPlayer2
        player2orCpu = "PLAYER 2"
    }else{
        player2orCpu = "CPU"
    }

    document.getElementById("who-take-round").textContent = `PLAYER 1: ${playerOneScore}     --    ${player2orCpu}: ${playerTwoScore}`
    
}

function playerOneVsCpu(num){
    const index = computerArray.indexOf(num);
    if (index > -1) { 
        computerArray.splice(index, 1) 
    }   
}

function computerChoose(){
    
    let indexPosition = randomNumber()
    let computerX = computerArray[indexPosition]
    computerArray.splice(indexPosition,1)

  
    if(computerX === 1)
    {
        computerPlaying(box1)
        one = "o"

    }else if(computerX === 2){

        computerPlaying(box2)
        two = "o"
        
    }else if(computerX === 3){

        computerPlaying(box3)
        three = "o"
    
    }else if(computerX === 4){
    
        computerPlaying(box4)
        four = "o"
        
    }else if(computerX === 5){
        
        computerPlaying(box5)
        five = "o"
        
    }else if(computerX === 6){
        
        computerPlaying(box6)
        six = "o"
        
    }else if(computerX === 7){
        
        computerPlaying(box7)
        seven = "o"
        
    }else if(computerX === 8){
        
        computerPlaying(box8)
        eight = "o"
        
    }else if(computerX === 9){
        
        computerPlaying(box9)
        nine = "o"
    }

    if(!isPlayerWin)
    {
        determineWinner()
    }

}

const randomNumber = () => Math.floor(Math.random() * computerArray.length)


function computerPlaying(boxChoose){

    boxChoose.innerHTML = `<i class="fa-solid ${computerMark}"></i>`
    playersTurn.innerHTML = `
    <i class="fa-solid ${player1mark}"></i>
    <p>TURN</p>`
    boxChoose.classList.add("disabled")
}

function restartAll(){
    
    restartBox(box1)
    restartBox(box2)
    restartBox(box3)
    restartBox(box4)
    restartBox(box5)
    restartBox(box6)
    restartBox(box7)
    restartBox(box8)
    restartBox(box9)
    
    isPlayer1 = true
    isPlayer2 = false
    
    one = ""
    two = ""
    three = ""
    four = ""
    five = ""
    six = ""
    seven = ""
    eight = ""
    nine = ""
    
    isPlayerWin = false
    
    computerArray = [1,2,3,4,5,6,7,8,9]
    
    
    playersTurn.innerHTML = `
    <i class="fa-solid ${player1mark}"></i>
    <p>TURN</p>`
       
    container.classList.remove("disabled")
    winnerDisplay.style.display = "none"
       
}

function restartUserSelect(userBox){
    userBox.classList.remove("user-choice")
}

function restartBox(boxChoose){
    boxChoose.textContent = ""
    boxChoose.classList.remove("disabled")
}
    