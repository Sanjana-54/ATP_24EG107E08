function validateTitle(title) {
        if(!title){
            return "title required";
        }
        if(title.length<3){
            return "minimum 3 char required";
         }
            return true;
}
                      
//  2.Validate priority (must be: low, medium, high)
function validatePriority(priority) {
const priorities=["low","medium","high"];
let result=priorities.includes(priority)
if(result==false){
    return "Invalid Priority";
    }
    return true;
}
            
// 3.Validate due date (must be future date)
function validateDueDate(date) {
                        
 const DueDate=new Date(date);
 const today=new Date();
 if(DueDate<=today){
    return "Invalid DueDate"
 }               
 return true;        
}
 export {validateTitle,validatePriority,validateDueDate}