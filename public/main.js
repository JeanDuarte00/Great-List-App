

window.onload = uploadList();


document.getElementById("input").addEventListener("click", function(event){
    clearInput(this);
});

document.getElementById("input").addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        document.getElementById("btn").click();
        clearInput(this);
    }
    
});

// insert logic
document.getElementById("btn").addEventListener("click", function (){
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
    var n = Number(localStorage.count);
    console.log(n);
    for(var c=1; c<=n; c++){
        var nameItem = "item"+c;
        createNewItem(nameItem, localStorage.getItem(nameItem));
    }
}