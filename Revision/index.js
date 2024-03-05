document.querySelector("form").addEventListener("submit",myDSA)

let queArr=JSON.parse(localStorage.getItem("queData")) || []

// displayTable(queArr)

// window.addEventListener("load",function(){
//     displayTable(queArr)
//})

    //  if(localStorage.getItem("queData")==null){
    //     queArr=[]
    //  }
    //  else{
    //     queArr=JSON.parse(localStorage.getItem("queData"))
    //  }
      

function myDSA(event){
    event.preventDefault()

    let queObj={
        queTitle:document.querySelector("#title").value,
        queLink:document.querySelector("#link").value,
        queDifficulty:document.querySelector("#difficulty").value

    };

    queArr.push(queObj);
    displayTable(queArr);
    localStorage.setItem("queData",JSON.stringify(queArr))
}

function displayTable(queArr){
    document.querySelector("tbody").innerHTML=""

    queArr.forEach(function (elem) {
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        td1.innerText=elem.queTitle

        let td2=document.createElement("td");
        td2.innerText=elem.queLink

        let td3=document.createElement("td");
        td3.innerText=elem.queDifficulty

        let td4=document.createElement("td");
        
        if(elem.queDifficulty=="Easy"){
            td4.innerText="No"
            td4.style.backgroundColor="red"
        }
        else{
            td4.innerText="Yes"
            td4.style.backgroundColor="green"
        }

        let btn=document.createElement("button");
        btn.innerText="DELETE"
        btn.addEventListener("click",del);
        btn.style.backgroundColor="#064E3B";
        
        btn.style.color="white";
        
        tr.append(td1,td2,td3,td4,btn)
        document.querySelector("tbody").append(tr);
      
       
    });
    function del(event){
        event.target.parentNode.remove()
    

}
}