const cat = document.getElementById("cat");
const cupcake = document.getElementById("cupcake");
const score = document.getElementById("score");
const gameOver = document.getElementById("gameOver");
const road = document.getElementById("road");
const cloud = document.getElementById("cloud");
const endScore = document.getElementById("endScore");

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `score <b>${playerScore}</b>`;
}

document.addEventListener("keydown", function(event){
    jump();
    let catBot = parseInt(window.getComputedStyle(cat).getPropertyValue("bottom"));
    let cakeLeft = parseInt(window.getComputedStyle(cupcake).getPropertyValue("left"));
    if ( cakeLeft < 150 ){
        scoreCounter();
    }  
}
);

function jump (){
    if(cat.classList != "jump"){
        cat.classList.add("jump")
    }
    setTimeout( function(){
        cat.classList.remove("jump")
    }, 300)
}


//start Game
window.addEventListener("keydown", (start) => {
    if (start.code == "Space") {
        gameOver.style.display = "none";
        road.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.style.animation = "cloudAnimate 30s linear infinite";
        cupcake.style.animation = "cupcakeMove 3s linear infinite ";
        cat.style.display = "block";
        cupcake.style.display = "block";
        
    }
});
  
let result = setInterval(() => {
    let catBottom = parseInt(window.getComputedStyle(cat).getPropertyValue("bottom"));
    let cupcakeLeft = parseInt(window.getComputedStyle(cupcake).getPropertyValue("left"));

    if (catBottom <= 45 && cupcakeLeft >= 10 && cupcakeLeft <= 80) {
        gameOver.style.display = "block";
        road.style.animation = "none";
        cloud.style.animation = "none";
        cupcake.style.animation = "none";
        endScore.innerHTML = `Score: <b>${playerScore}</b>`;
        cat.style.display = "none";
        cupcake.style.display = "none";
        playerScore = 0;
        score.innerHTML = `score <b>${playerScore}</b>`;
    }
}, 10); 
