import {validateTitle,validatePriority,validateDueDate} from './validator.js'


const tasks=[];
let idCount=1;
// 1. Add new task
export function addTask(title, priority, dueDate) {
// Validate using imported functions
if(validateTitle(title)!==true || validatePriority(priority)!==true || validateDueDate(dueDate)!==true){
    return "invalid task";
}
 // If valid, add to tasks array
//push taskobjs
const task={
    id:idCount,
    title:title,
    priority:priority,
    dueDate:dueDate,
    completed:false,
};
//if tasks are valid
tasks.push(task);
idCount++;
// Return success/error message
return "Task added successfully";
}
// 2. Get all tasks
export function getAllTasks() {
// Return all tasks
return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
    //Find task and mark as complete
    const task=tasks.find(t=>t.id===taskId);
    if(!task){
        return "task not found";
    }
    task.completed=true;
    return "task completed";
}

