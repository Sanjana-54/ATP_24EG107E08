import {addTask,getAllTasks,completeTask} from './task.js'

console.log(addTask("writing","high",'2026-02-25'));
console.log(addTask("eating","medium",'2026-02-28'));
console.log(addTask("coding","high",'2027-02-17'))
console.log(addTask("cycling","high",'2028-01-28'))

console.log("All Tasks:");
console.log(getAllTasks());

console.log("Completed tasks:")
console.log(completeTask(1));

console.log("Updated Tasks:");
console.log(getAllTasks());