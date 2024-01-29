
let arr = [];
// Load tasks from local storage on page load
window.onload = function () {
    if (localStorage.getItem('tasks')) {
        arr = JSON.parse(localStorage.getItem('tasks'));
        renderTasks();
        taskCounter();
    }
};


addButton = () => {

    // user input value
    const userText = document.getElementById("userText");
    const inputValue = userText.value;
    if (!inputValue) {
        alert("please Enter again ");
        //   const eror= document.getElementById("errorMessage");
        //   eror.innerHTML="Some thing wrong"

    }
    else {
        //Display text on screen 
        const userInputText = document.getElementById("userInputText");

        let elem = `<div class="itemTodo" >
        <input class="checkBoxToDo" type="checkbox" name="" id="completeTask">
        <div class="pText">
        <p class="userInputs" id="getInput">${inputValue}</div>
        <div class="btn">
            <button class="editBtn" onclick="editButton(this)">Edit</button>
        <button class="delBtn" onclick="delButton()">Delete</button>
        </div>
    </div>`
        userInputText.insertAdjacentHTML("beforeend", elem);
        userText.value = "";

        // arr.push(inputValue);
        // complete task
        arr.push({ text: inputValue, completed: false });
        console.log(arr)
        saveTasksToLocalStorage(); // Save tasks to local storage
    }
    taskCounter()


}
// delButton = () => {
//     const userInputText = document.getElementById("userInputText");
//     const items = userInputText.getElementsByClassName("itemTodo");

//     // Find the index of the clicked item
//     const index = Array.from(items).indexOf(event.target.closest('.itemTodo'));

//     // Remove the item from the array and the DOM using filter
//     arr = arr.filter((_, i) => i !== index);
//     userInputText.removeChild(items[index]);

//     console.log(arr);
// }

delButton = () => {
    const userInputText = document.getElementById("userInputText");
    const items = userInputText.getElementsByClassName("itemTodo");

    // Find the index of the clicked item
    const index = Array.from(items).indexOf(event.target.closest('.itemTodo'));

    // Remove the item from the array and the DOM
    if (index !== -1) {
        arr.splice(index, 1);
        userInputText.removeChild(items[index]);
        saveTasksToLocalStorage(); // Save tasks to local storage
    }

    console.log(arr);
    taskCounter();
}


editButton = (button) => {
    const item = button.closest('.itemTodo');
    const userInput = item.querySelector('.userInputs');
    const updatedText = prompt("Edit task:", userInput.innerText);

    if (updatedText !== null) {
        userInput.innerText = updatedText;
        const index = Array.from(item.parentElement.children).indexOf(item);
        // arr[index] = updatedText;
        // completetion code
        // Update the text property of the task object
        arr[index].text = updatedText;
        saveTasksToLocalStorage(); // Save tasks to local storage
    }

    taskCounter();
}









taskCounter=()=>{
    let count = arr.length;
        
        let taskId=document.getElementById("counter");
        let taskElement=`<p class="counterTask" id="counter">You have ${count} task(s) to complete.</p>`
        taskId.innerHTML=taskElement


}

// Function to complete a task (checkbox click)
completeTask = (checkbox) => {
    const item = checkbox.closest('.itemTodo');
    const userInput = item.querySelector('.userInputs');
    const index = Array.from(item.parentElement.children).indexOf(item);

    if (checkbox.checked) {
        userInput.style.textDecoration = 'line-through';
        arr[index].completed = true;
    } else {
        userInput.style.textDecoration = 'none';
        arr[index].completed = false;
    }
    saveTasksToLocalStorage(); // Save tasks to local storage

    taskCounter();
}

// Add event listeners for checkbox clicks
document.addEventListener('change', function (event) {
    const target = event.target;
    if (target && target.classList.contains('checkBoxToDo')) {
        completeTask(target);
                // Also update the task counter after completing a task
        taskCounter();

    }
});

// Save tasks to local storage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

// Render tasks from the array
function renderTasks() {
    const userInputText = document.getElementById("userInputText");
    userInputText.innerHTML = "";

    arr.forEach(task => {
        let elem = `<div class="itemTodo" >
        <input class="checkBoxToDo" type="checkbox" ${task.completed ? 'checked' : ''} name="" id="completeTask">
        <div class="pText">
        <p class="userInputs" id="getInput">${task.text}</div>
        <div class="btn">
            <button class="editBtn" onclick="editButton(this)">Edit</button>
            <button class="delBtn" onclick="delButton()">Delete</button>
        </div>
    </div>`;
        userInputText.insertAdjacentHTML("beforeend", elem);
    });
}


