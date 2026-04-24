/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.*/

//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//Tasks:

    // 1. filter() all credit transactions
    const credit=transactions.filter((amtObj)=>amtObj.type==="credit")
    console.log("Only credit transactions:",credit)

    // 2. map() to extract only transaction amounts
    const tran_amt=transactions.map((amtObj)=>amtObj.amount)
    console.log("Transaction Amounts",tran_amt)

    // 3. reduce() to calculate final account balance
    const final=transactions.reduce((acc,amtObj)=>{
          if(amtObj.type==="credit"){
            return acc+amtObj.amount
          }
          else{
           return acc-amtObj.amount 
          }
    },0)
    console.log("Final account balance:",final)

    // 4. find() the first debit transaction
    const debit=transactions.find((amtObj)=>amtObj.type==="debit")
    console.log("First debit transaction:",debit)

    // 5. findIndex() of transaction with amount 10000
    const idx=transactions.findIndex((amtObj)=>amtObj.amount==10000)
     console.log("Index of transaction amount 10000:",idx)

