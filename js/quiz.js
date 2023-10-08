const quizbtn = document.querySelector(".quizbtn")
const question  = document.querySelector(".question")
const answer  = document.querySelector(".answer-cont")
const quiz= [{
    "ques": "A total eclipse occurs when the observer is within the _____.",
    "ans": "umbra",
    "opt": ["Antumbra","umbra"]
},{
    "ques": " Which eclipse is NOT safe to watch with the naked eye?",
    "ans": "Solar eclipse",
    "opt": ["Solar eclipse","Lunar eclipse"]
},
{
    "ques": " A lunar eclipse occurs when the ______ shadow falls on the Moon.",
    "ans": "Earth’s",
    "opt": ["Sun’s","Earth’s"]
},
{
    "ques": " The Moon orbits the Earth in _____.",
    "ans": "27.32 days",
    "opt": ["33.3 days","32.3 days","27.32 days","21.7 days"]   
},
{
    "ques": "In an eclipse where the Moon, Sun, and Earth are involved, they are nearly in a _____.",
    "ans": "Straight line",
    "opt": ["Circle shape","Oval shape","Straight line","Polygon shape"]   
},
{
    "ques": " ______ takes place when the Earth intersects the umbra portion of the Moon’s shadow.",
    "ans": "Total solar eclipse",
    "opt": ["Partial solar eclipse","Total solar eclipse","Partial lunar eclipse","Total lunar eclipse"]
},
{
    "ques": "How long can a total solar eclipse last?",
    "ans": "7 minutes",
    "opt": ["5 minutes","7 minutes","30 minutes","1 hour"]
},
{
    "ques": "What colour will the moon sometimes appear during a lunar eclipse?",
    "ans": "Red",
    "opt": ["Red","Green","Blue","Yellow"]
},
{
    "ques": "What is the correct alignment during a solar eclipse?  ",
    "ans": "Sun, moon, earth",
    "opt": ["Sun, earth, moon","Moon, sun, earth","Sun, moon, earth"]
},
{
    "ques": "What is the maximum number of solar eclipses that can occur during a calendar year? ",
    "ans": "5",
    "opt": ["5","1","4"]
}]

let index = 0;
let score = 0;

const svalue = document.querySelector(".s-value")
const next = document.querySelector(".next")
const previous = document.querySelector(".previous")
quizbtn.addEventListener("click",()=>{
    next.style.display = "block"
    previous.style.display = "block"
    index = 0
    check(null)
})
let nextvalue = "true"
let prevvalue = "false"
next.addEventListener("click", ()=>{
    if (index <= 0) {
        console.log(index)
        index=1;
        check(nextvalue);
    }
    else if(index <quiz.length){
        check(nextvalue);
    }
    else{
        index = quiz.length
    }
    console.log(index)
})
previous.addEventListener("click", ()=>{
    console.log("Index"+index)
    console.log("Prev clicked")
    if(index>=quiz.length){
        index = quiz.length -2
        check(prevvalue)
    }
    else if(index >=0 && index < quiz.length){
        check(prevvalue)
    }
    else{
        index = 0
    }
    
})

function check(value){
    if(index<quiz.length && index >=0){
        answer.innerHTML = ""
        question.textContent = quiz[index]["ques"] 
        const length = quiz[index]["opt"].length
        for(let i=0;i<length;i++){
         const one = document.createElement("div")
         one.classList.add("answer", "center")
         one.id = quiz[index]["opt"][i]
         one.dataset.correct = quiz[index]["opt"][i] === quiz[index]["ans"] ? "true" : "false";
         one.innerText = quiz[index]["opt"][i]
         answer.appendChild(one)
        }
        const answerbutton = document.querySelectorAll(".answer")
        answerbutton.forEach((elem)=>{
        elem.addEventListener("click", ()=>{
            console.log("clicked")
            if (elem.dataset.correct === "true") {
                elem.style.backgroundColor = "green";
                elem.style.color = "white"
                score++
                svalue.innerText = score
            } else {
                elem.style.backgroundColor = "red";
                elem.style.color = "white"
            }
        })
     })
     value =="true"|| null? index++: index--
    }
}


const Eclipse = document.querySelector(".Eclipses")
const Solar = document.querySelector(".solar")
const Lunar = document.querySelector(".lunar")
const topview = document.querySelector(".topview")
const Eclipsebutton = document.querySelector(".eclipsebutton")
const Solarbutton = document.querySelector(".solarbutton")
const Lunarbutton = document.querySelector(".lunarbutton")
const topviewbutton = document.querySelector(".topviewbutton")
Eclipsebutton.addEventListener("click",()=>{
    Lunar.style.display = "none"
    Eclipse.style.display = "block"
    topview.style.display = "none"
    Solar.style.display = "none"
})
Lunarbutton.addEventListener("click",()=>{
    Lunar.style.display = "flex"
    Eclipse.style.display = "none"
    topview.style.display = "none"
    Solar.style.display = "none"
})
Solarbutton.addEventListener("click",()=>{
    Lunar.style.display = "none"
    Eclipse.style.display = "none"
    topview.style.display = "none"
    Solar.style.display = "flex"
})
topviewbutton.addEventListener("click",()=>{
    topview.style.display = "flex"
    Eclipse.style.display = "none"
    Lunar.style.display = "none"
    Solar.style.display = "none"
})
