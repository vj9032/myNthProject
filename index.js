let userName = "jayanth"
let theName = document.createElement("h1")
document.body.appendChild(theName)
function addElementSlowly(s){
    for(let i = 0 ; i< s.length ; i++){
        setTimeout( ()=>{
            if(s[i] == " "){
                theName.innerHTML = theName.innerHTML+= "&nbsp;"
            }
            else{
                theName.innerText = theName.innerText + s[i]

            }
            
            
        } , 1000+ i*200)
    }
}

addElementSlowly("venkat jayanth yelamanchli")