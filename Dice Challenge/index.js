function diceThrow(){
    var randomNumber= []
    for(var i=0;i<2;i++){
        randomNumber[i]= Math.floor(Math.random()*6)+1
        // console.log(a)
        displayDice(randomNumber[i],i)
    }
    if (randomNumber[0]>randomNumber[1]){
        document.querySelector("h1").textContent = "Player 1 wins"
    }
    else if(randomNumber[0]<randomNumber[1]){
        document.querySelector("h1").textContent = "Player 2 wins"
    }
    else{
        document.querySelector("h1").textContent = "Draw. Reload Again"
    }
    
}
function displayDice(diceNumber,loop){
    var imageSelector
    imageSelector= document.querySelectorAll("img")
    imageSelector[loop].setAttribute("src","images/dice"+diceNumber+".png")
    // console.log(b)
}