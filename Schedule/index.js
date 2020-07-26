const taskList = [{
    id: 0,
    checked: false,
    taskName:  'Wake up',
    time: '07:00'
},{
    id: 1,
    checked: false,
    taskName:  'Leave for a work',
    time: '08:30'
},{
    id: 2,
    checked: false,
    taskName:  'Meeting',
    time: '11:00'
},{
    id: 3,
    checked: false,
    taskName:  'LunchTime',
    time: '12:00 - 13:00'
},{
    id: 4,
    checked: false,
    taskName:  'Shopping at the nearby grocery',
    time: '18:15'
},{
    id: 5,
    checked: false,
    taskName:  'Dinner with friends ',
    time: '19:20'
},{
    id: 6,
    checked: false,
    taskName:  'Finish freelance Work',
    time: '01:00'
}];


window.onload = () => {
    
    initialize = () => {
        const ulElem = document.getElementById("dynamicUL");
        taskList.forEach((el) => {
            const li = createListElement();
            const innerElem = createInnerElements(el);
            li.append(innerElem);
            ulElem.append(li);
        });
    }

     

    createListElement = () => {
        return document.createElement("li");
    }

    createInnerElements = (taskElement) => {
        const innerDiv =  document.createElement("div");
        innerDiv.className = "listItem";
        innerDiv.addEventListener('click', () => {
            if(taskElement.id === 0 || taskList[taskElement.id -1 ].checked){
                taskElement.checked = true;
                innerDiv.className = "doneItem";
            }
        });
        innerDiv.append(document.createTextNode(`${taskElement.taskName} at ${taskElement.time}`));
        return innerDiv;
    }
    initialize();
}