document.querySelector('form').addEventListener("submit",myfunction);

function myfunction(event){
    event.preventDefault();

    let avtar=document.querySelector("#image").value;
    let name=document.querySelector("#name").value;
    let batch=document.querySelector("#batch").value;
    let dsa=document.querySelector("#dsa").value;
    let skillathon=document.querySelector("#cs").value;
    let coding=document.querySelector("#coding").value;
    console.log(avtar, name, batch, dsa, skillathon, coding);

    var tr=document.createElement("tr");

    var td1=document.createElement("td")
    //create an image
   
    let img=document.createElement("img");
            img.setAttribute("src",avtar);
            img.setAttribute("class","image");
            img.setAttribute("alt","Student Image");
    
    var td2=document.createElement("td");
    td2.innerText=name;

    var td3=document.createElement("td");
    td3.innerText=batch;

    var td4=document.createElement("td");
    td4.innerText=dsa;

    var td5=document.createElement("td");
    td5.innerText=skillathon;

    var td6=document.createElement("td");
    td6.innerText=coding;

    let obtainedMarks=Number(dsa)+Number(skillathon)+Number(coding)
    
    let percentage=(obtainedMarks/30)*100;

    var td7=document.createElement("td");
    td7.innerText=percentage.toFixed(2);
   

    var td8=document.createElement("td");

    if(percentage>50){
       td8.innerText="Regular"
       td8.style.backgroundColor="green"
    }
    else{
        td8.innerText="Async"
        td8.style.color="red"
        td8.style.backgroundColor="teal"
    }

    var td9=document.createElement("td");
    td9.innerText="DELETE"
    
    td9.style.backgroundColor="red"
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr);
    td1.append(img);
   
}
