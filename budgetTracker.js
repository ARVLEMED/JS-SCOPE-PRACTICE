
let globalBudget = 0;

function addExpense(expense) {
    expense = Number(expense); 
    globalBudget += expense;
    return globalBudget;
}

function getExpenseDetails(description, cost) {
    console.log(`${description}: $${cost}`);
}
addExpense(700)
getExpenseDetails("Tea" ,700)