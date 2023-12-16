let pageState = `active`

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

let showHiddenButton = document.querySelector(".change")
//Клик добавить
addTodoButton.addEventListener('click',addNewTodo)
//клик удалить
deleteTodoButton.addEventListener('click',deleteTodos)
//клик завершить
confirmButton.addEventListener('click',confirmTodo)
showHiddenButton.addEventListener('click',showHidden)

let arrayActivTodo = []
let arrayInactiveTodo = []

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
                let todoelement1 = element.parentNode
                let textInDiv = todoelement1.querySelector(".todotext").innerHTML
                todoelement1.style.textDecoration = "line-through";
                todoelement1.style.display = "none";
                if(pageState == `active`){
                    arrayInactiveTodo.push(textInDiv)
                    let newArray = arrayActivTodo.filter((active) => active !== textInDiv )
                    arrayActivTodo = newArray 
                    console.log(arrayActivTodo)
                }else{
                    arrayActivTodo.push(textInDiv)
                    //console.log(arrayInactiveTodo)
                    let newArray = arrayInactiveTodo.filter((active) => active !== textInDiv )
                    arrayInactiveTodo = newArray 
                    console.log(arrayActivTodo)
                }
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
            let elementToDeleteFromArray = element.parentNode.querySelector(".todotext").innerHTML
            let newArray = arrayActivTodo.filter((active) => active !== elementToDeleteFromArray)
            element.parentNode.parentNode.removeChild(element.parentNode);
            arrayActivTodo = newArray
            console.log(arrayActivTodo)
        }
        
    });
}
//функ добавления
function addNewTodo(){
    areaTodo.innerHTML+= `<div class="todoelement"><input type="checkbox" class="checkmeout"><div class="todotext">${textTodo.value}</div></div>`
    arrayActivTodo.push(textTodo.value)
    //отчистить поле ввода
    textTodo.value ='';
}

function showHidden(){
    areaTodo.innerHTML = "";
    if(pageState !== `active`){
        arrayActivTodo.forEach(element =>{
            areaTodo.innerHTML+= `<div class="todoelement"><input type="checkbox" class="checkmeout"><div class="todotext">${element}</div></div>`
        });
        pageState = `active`
    }else{
        arrayInactiveTodo.forEach(element =>{
            areaTodo.innerHTML+= `<div class="todoelement"><input type="checkbox" class="checkmeout"><div class="todotext" style="text-decoration:line-through">${element}</div></div>`
        });
        pageState = `unactive`
    }
}
