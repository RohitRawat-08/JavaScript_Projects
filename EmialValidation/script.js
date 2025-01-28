console.log("check")


let btn = document.getElementById("button")
let resultscontainer = document.getElementById("rescontainer")

btn.addEventListener("click",async (e)=>{
    e.preventDefault()
    resultscontainer.innerHTML=`<img style=" width:50px ; background-color: azure;" src='./loading.svg' >`
    let key ="ema_live_CiDbIZBOPYEmyzpzrvwonS7PRYo9bqGKavYMQmXu";
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    
    let rs =await fetch(url)
    let res = await rs.json()
    
    
    let str =''

    for (key of Object.keys(res)){
        if (res[key] !== "" && res[key] !== " "){
            str  = str + `<div>${key}: ${res[key]}</div>`
        }
    }
    
    rescontainer = document.getElementById("rescontainer");
    rescontainer.innerHTML=str
});


