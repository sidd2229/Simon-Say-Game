let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];


let started = false;
let level  = 0;

let h2 = document.querySelector("h2")

let strtbtn = document.querySelector(".startbtn")
strtbtn.addEventListener("click", function(){
    if(started==false){
        console.log("started");
        started=true;
        levelUp();
    }
})

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //Raandom button choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
    
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}



let allBtns = document.querySelectorAll(".btn");
for(btnsss of allBtns){
    btnsss.addEventListener("click" , btnPress);
}


function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.dir(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}



function checkAns(idx){
    //console.log("curr level is :" , level);
    //let idx = level-1;       //jitne level honge utna he element hoga 

    if(userSeq[idx]===gameSeq[idx]){
       //console.log("same value");
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }

    }else{
        h2.innerHTML= `Game Over! Your Score was <b>${level}</b> <br>Press Start to play again`;
        h2.style.fontWeight="700";

        /*this is when no background picture
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        } ,150);
        
        */


        reset();
    }
    
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}