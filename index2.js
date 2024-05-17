const inputBox= document.getElementById("input-box");
const list= document.getElementById("list");
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";        // \u00d7for cross icon
        li.appendChild(span);

    }
    inputBox.value="";
    saveData();  // whenever we add any data it will call saveData and added data get saved

}
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //when we click on li it will be checked
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //when we click on span it wil delete the parent element and the element get removed
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
//to save the data whenever we will open this again
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();
