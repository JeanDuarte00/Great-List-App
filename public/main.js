

window.onload = uploadList();
let inputField = document.getElementById("input");
let addBtn = document.getElementById("btn");



inputField.addEventListener("click", function(event){
    clearInput(this);
});

inputField.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        addBtn.click();
        clearInput(this);
    }
    
});

// insert logic
addBtn.addEventListener("click", function (){
    if( typeof(Storage) == "undefined"){
        console.log("Cant use browser storage");
        
    }else{
        console.log("Can use storage");
        var valInput = document.getElementById("input").value; // get input text

        if(valInput != ""){

            // item counter
            if (localStorage.count) {
                localStorage.count = Number(localStorage.count) + 1;
            } else {
                localStorage.count = 1;
            }
                

            
            var nameItem = "item"+localStorage.count; // create name to local storage

            createNewItem(nameItem, valInput);

            localStorage.setItem(nameItem, valInput); // save item
            
            //document.getElementById("itens").appendChild  =  localStorage.getItem(nameItem);;
        }
    }
    clearInput(this);
});

function createNewItem(nameItem, valInput){

    var liTag = document.createElement("LI");
    var spanTag = document.createElement("span");
    var textInput = document.createTextNode(valInput);
    var closeBtn = document.createTextNode("x");
    
    liTag.id = nameItem;
    liTag.className = "input-group-append list-group-item";
    
    spanTag.className = "closeBtn";
    spanTag.onclick = function(){
        //this.parentElement.style.display='none';
        this.parentElement.remove();
        localStorage.removeItem(nameItem);        
    }

    
    liTag.appendChild(textInput);
    liTag.appendChild(spanTag);
    spanTag.appendChild(closeBtn);
    document.getElementById("list").appendChild(liTag);// retrive data when added
    
}   

// "clear" input field
function clearInput(t){
    t.value = "";
}

// upload local list to list viewer
function uploadList(){
    var n = 1; 

    for(var nameItem in localStorage){
        
        if(n <= localStorage.length){                        
            createNewItem(nameItem, localStorage.getItem(nameItem));
            n++;
        }
        
    }

    
}