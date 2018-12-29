var inquirer = require('inquirer')
var fs = require('fs')

// Get random number between 0 to 100
function getRandomNumber () {
  return Math.floor(Math.random() * 101)
}

function getRandomOperator () {
  let operators = [' + ', ' - ', ' × ', ' ÷ ']
  return operators[[Math.floor(Math.random() * operators.length)]]
}

function generateArithmeticProblems (problemNum) {
  let problemList = []
  while (problemNum--) {
    let problem = getRandomNumber() + getRandomOperator() + getRandomNumber()
    problemList.push(problem)
  }
  return problemList
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
    let problemFile = 'problems.txt'
    let problemCount = answers['count']
    let problemSet = generateArithmeticProblems(problemCount)

    try {
      let stream = fs.createWriteStream(problemFile, { flags: 'a+' })
      problemSet.forEach((item) => {
        console.log(item)
        stream.write(item + '\n')
      })
      console.log('Saved ' + problemCount + ' problems to file: ' + problemFile)
    } catch (error) {
      throw error
    }

    console.log('Generated ' + problemCount + ' problems.')
  })
}

main()
