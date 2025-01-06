const todoValue = document.getElementById("todoText");
const todoAlert = document.getElementById("Alert");
const listItems = document.getElementById("list-items");
const addUpdate = document.getElementById("AddUpdateClick");

let todo = JSON.parse(localStorage.getItem("todo-list"));

if(!todo){

    todo = [];

}

function CreateToDoItems(){

    //console.log(todoValue);

    if(todoValue.value === ""){

        todoAlert.innerText="Please enter your todo text!";
        todoValue.focus();

    }else{

        let isPresent = false; 
        todo.forEach((element) => {

            if(element.item == todoValue.value){

                isPresent = true;

            }

        });

        if(isPresent){

            setAlertMessage("This item already present in the list!");
            return;
        }

        let li = document.createElement("li");

        const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div>
                           <div> <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="images/pencil.jpg" />
                           <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="images/delete.jpg" /></div>
                           `;

        li.innerHTML = todoItems; 
        listItems.appendChild(li);
        

        if(!todo){

            todo = [];

        }

        let itemList = {item: todoValue.value, status: false};

        todo.push(itemList);

        setLocalStorage();

    }

    todoValue.value = "";
    setAlertMessage("Todo item created successfully!");

}

function setLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(todo));
}

