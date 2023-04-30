const jarBody = document.querySelector(".jar__body__wrapper");
const jarLiquid = document.querySelector(".jar__body__liquid");
let fillDuration = jarLiquid.dataset.duration * 10;
let bubbleAmount = 40;
let initialJarLiquidPosition = 110;


// Initial setup for jarLiquid Position
jarLiquid.style.transform = `translateY(${initialJarLiquidPosition}%)`;

// Bubbles Create Function 
function createBubbles(){
    for(let i = 0; i <= bubbleAmount; i++){
        let bubble = document.createElement("span");
        let x = Math.floor(Math.random() * jarBody.getBoundingClientRect().width);
        let duration = Math.random() * 10;
        let size = Math.random() * 8;

        bubble.style.left = x + "px";
        bubble.style.width = 6 + size + "px";
        bubble.style.height = 6 + size + "px";
        bubble.style.animationDuration = (+jarLiquid.dataset.duration) + duration + "s";
        bubble.style.animationDelay = duration + "s";

        jarBody.appendChild(bubble);
    }
}

// Bubbles Hide Function 
function hideBubbles(){
    let jarBubbles = document.querySelectorAll(".jar__body__wrapper span");
    jarBubbles.forEach(jarBubbles =>{
        let duration = Math.random() * 1.5;
        jarBubbles.classList.add("removed");
        jarBubbles.style.transitionDelay = duration + "s";
    })
}

// Jar Filler Function 
function fillJar(){
    currentPercent = initialJarLiquidPosition;
    let fillPercent = currentPercent - (+jarLiquid.dataset.fillpercent) - 10;
    let fillInterval = setInterval(function(){
        jarLiquid.style.transform = `translateY(${currentPercent}%)`;
        if(currentPercent == fillPercent){
            clearInterval(fillInterval)
        }else{
            currentPercent--;
        }
    },fillDuration)
}

// Jar Empty Function 
function emptyJar(){
    let filledPercent = initialJarLiquidPosition - (+jarLiquid.dataset.fillpercent) - 10;
    let emptyInterval = setInterval(function(){
        jarLiquid.style.transform = `translateY(${filledPercent}%)`;
        if(filledPercent == initialJarLiquidPosition){
            clearInterval(emptyInterval)
        }else{
            filledPercent++;
        }
    },fillDuration)
}