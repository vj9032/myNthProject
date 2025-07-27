let userName = "jayanth"
let theName = document.createElement("h1")
theName.setAttribute("class" , "name")
document.body.appendChild(theName)
function addElementSlowly(s){
    for(let i = 0 ; i< s.length ; i++){
        setTimeout( ()=>{
            if(s[i] == " "){
                theName.innerText += "\u00A0";
            }
            else{
                theName.innerText += s[i]

            }
            
            
        } , 1000+ i*200)
    }
    let totalTime = 1000 + s.length*200
    return totalTime 
}

function removeElementSlowly(ele){
    let inText = ele.innerText;
    let n = inText.length;
    for(let i = 0 ; i< n ; i++){
        setTimeout(()=>{
            inText = inText.slice(0 ,-1);
            ele.innerText = inText;
        } , 1000 + i*200);
        
    }
       
}


let theTime =  addElementSlowly("helloWorld");
console.log(theTime)
setTimeout(() => {
  removeElementSlowly(theName);
}, theTime);