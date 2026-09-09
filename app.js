let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>
{
    //rock , paper , scissor
    let options =["rock","paper","scissor"];
    
   const randomIndex = Math.floor(Math.random()*3);
   return options[randomIndex];

}
const draw = ()=>
{
    msg.innerText="Game Draw. Play Again.";
    msg.style.backgroundColor ="#081b31";
}
const playGame =(userChoice)=>
{
    // user choice 
    console.log("user choice = ",userChoice);

    //Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
     const showWinner = (userWin) =>
     {
        if(userWin)
        {
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText = `You Win ! Your ${userChoice} beats  ${compChoice}`;
            msg.style.backgroundColor ="green";
        }
        else{
            compScore++;
            compScorePara.innerText=compScore;
            msg.innerText =`You Lose ! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor ="red";
        }

     }
    let userWin = true;
    if(userChoice === compChoice)
    {
        draw();
        return;
    }
    else if(userChoice === "rock")
    {
        // paper , scissor
        userWin=compChoice ==="paper" ?false: true;
    }
    else if(userChoice==="paper")
    {
        //rock, scissor
        userWin=compChoice==="scissor"?false:true;
    }
    else
    {
        // rock, paper
        userWin=compChoice==="rock" ?false:true;
    }

    showWinner(userWin,compChoice,userChoice);

}

choices.forEach((choice) =>
{
    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
