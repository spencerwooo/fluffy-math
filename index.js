var inquirer = require('inquirer')

function getRandomNumber () {
  // Get random number between 0 to 100
  return Math.floor(Math.random() * 101)
}

function getRandomOperator () {
  let operators = [' + ', ' - ', ' × ', ' ÷ ']
  return operators[[Math.floor(Math.random() * operators.length)]]
}

function generateArithmeticProblems (problemNum) {
  while (problemNum--) {
    console.log(getRandomNumber() + getRandomOperator() + getRandomNumber())
  }
}

function main () {
  let questionCount = [{
    type: 'input',
    name: 'count',
    message: 'How many problems do you want to solve?',
    validate: function (number) {
      // Problem count must be a positive integer
      let pattern = /^[1-9]\d*$/
      let pass = number.match(pattern)
      if (pass) {
        return true
      }
      return 'Please enter a positive integer.'
    }
  }]

  inquirer.prompt(questionCount).then(answers => {
    let problemCount = answers['count']
    generateArithmeticProblems(problemCount)
    console.log('Generated ' + problemCount + ' problems.')
  })
}

main()
