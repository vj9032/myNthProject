let userName = "jayanth"
let theName = document.createElement("h1")
theName.setAttribute("class" , "name")
document.body.appendChild(theName)
const alpaStr = "abcdefghijklmnopqrstuvwxyz"


fontzList = ["'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" , "cursive" , "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"]
function addElementSlowly(s){
    for(let i = 0 ; i< s.length ; i++){
        setTimeout( ()=>{
            if(s[i] == " "){
                theName.innerText += "\u00A0";
            }
            else{
                theName.innerText += s[i]
            }
            redd = Math.floor((Math.random()*256))
            greenn = Math.floor((Math.random()*256))
            bluee = Math.floor((Math.random()*256))
            fontIndex = Math.floor(Math.random()*(fontzList.length))
            theName.style.color = `rgb(${redd},${greenn},${bluee})`
            theName.style.fontFamily = fontzList[fontIndex]
            
            
        } , 1000+ i*200)
    }

}

function removeElementSlowly(ele){
    let inText = ele.innerText;
    let n = inText.length;
    for(let i = 0 ; i< n ; i++){
        setTimeout(()=>{
            inText = inText.slice(0 ,-1);
            ele.innerText = inText;
            redd = Math.floor((Math.random()*256))
            greenn = Math.floor((Math.random()*256))
            bluee = Math.floor((Math.random()*256))
            fontIndex = Math.floor(Math.random()*(fontzList.length))
            theName.style.color = `rgb(${redd},${greenn},${bluee})`
            theName.style.fontFamily = fontzList[fontIndex]
        } , 1000 + i*200);
        
        
    }
     theName.style.color = `rgb(${256},${0},${0})`
       
}

let aniStr = "venkat jayanth yelemanchili"
totalTime = 1000+ aniStr.length*200


addElementSlowly(aniStr);
setTimeout(() => {
  removeElementSlowly(theName);
}, totalTime);


setInterval(()=>{
addElementSlowly(aniStr);
setTimeout(() => {
  removeElementSlowly(theName);
}, totalTime);

} , totalTime*2 )

