//сам текст
let textTodo = document.querySelector(".todotext")
//Добавить
let addTodoButton = document.querySelector(".add")
//див с дивом бокса и текста
let areaTodo = document.querySelector(".todoarea")
//кнопка удалить
let deleteTodoButton = document.querySelector(".delete")
//кнопка конфирм
let confirmButton = document.querySelector(".confirm")
//Клик добавить
addTodoButton.addEventListener('click',addNewTodo)
//клик удалить
deleteTodoButton.addEventListener('click',deleteTodos)
//клик завершить
confirmButton.addEventListener('click',confirmTodo)

function confirmTodo(){
    //див внутри дива
    let todoelements = document.querySelectorAll(".todoelement")
    //чекбокс
    let checkboxToDelete = document.querySelectorAll(".checkmeout")
    checkboxToDelete.forEach(element => {
        console.log(element.checked)
        if (element.checked){
            element.checked = !element.checked;
            if(element.parentNode.style.textDecoration == "line-through"){
                element.parentNode.style.textDecoration = "none" 
            }else{
                element.parentNode.style.textDecoration = "line-through";
            }
        }
        
    });
}
//функ удаления 
function deleteTodos(){
    //див внутри дива
    let todoelements = document.querySelectorAll(".todoelement")
    //чекбокс
    let checkboxToDelete = document.querySelectorAll(".checkmeout")
    checkboxToDelete.forEach(element => {
        console.log(element.checked)
        if (element.checked){
            element.parentNode.parentNode.removeChild(element.parentNode);      
        }
        
    });
}
//функ добавления
function addNewTodo(){
    areaTodo.innerHTML+= `<div class="todoelement"><input type="checkbox" class="checkmeout"><div class="todotext">${textTodo.value}</div></div>`
    textTodo.value ='';
}
