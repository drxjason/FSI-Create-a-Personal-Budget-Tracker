let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

var answer = null

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
	answer = window.prompt(weeklyExpenseQuestions[i])
	answer = parseFloat(answer)
	weeklyExpenses += answer
}
