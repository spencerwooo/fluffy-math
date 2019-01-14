var inquirer = require('inquirer')
var fs = require('fs')
var Generator = require('./tools/generator')
var Fractional = require('./tools/fractional')
var Solver = require('./tools/solver')

function main () {
  let doWhat = [{
    type: 'list',
    name: 'doWhat',
    message: 'Solve my problems or generate problems?',
    choices: [
      'Generate!',
      'Solve!'
    ]
  }]

  let questionType = [{
    type: 'list',
    name: 'type',
    message: 'Integer arithmetic or fractional arithmetic',
    choices: [
      'Integer!',
      'Fractional!'
    ]
  }]

  let questionCount = [{
    type: 'input',
    name: 'count',
    message: 'How many problems do you want to generate?',
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

  inquirer.prompt(doWhat).then(doThis => {
    if (doThis['doWhat'] === 'Generate!') {
      inquirer.prompt(questionType).then(doThis => {
        if (doThis['type'] === 'Integer!') {
          inquirer.prompt(questionCount).then(answers => {
            let problemFile = 'problems.txt'
            let problemCount = answers['count']
            let generator = new Generator()
            let problemSet = generator.generate(problemCount)

            try {
              let stream = fs.createWriteStream(problemFile, {
                flags: 'w'
              })
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
        if (doThis['type'] === 'Fractional!') {
          inquirer.prompt(questionCount).then(answers => {
            let problemFile = 'problems.txt'
            let problemCount = answers['count']
            let fractional = new Fractional()
            let problemSet = fractional.fractional(problemCount)

            try {
              let stream = fs.createWriteStream(problemFile, {
                flags: 'w'
              })
              problemSet.forEach((item) => {
                console.log(item)
                stream.write(item + '\n')
              })
              console.log('Saved ' + problemCount + ' problems to file: ' + problemFile)
            } catch (error) {
              throw error
            }

            console.log('Generated Fractional ' + problemCount + ' problems.')
          })
        }
      })
    }

    if (doThis['doWhat'] === 'Solve!') {
      let solveProblemFile = 'solve_problems.txt'
      let solver = new Solver()

      fs.readFile(solveProblemFile, (err, data) => {
        if (err) throw err
        let problemSet = data.toString().split('\n')
        problemSet.forEach((problem) => {
          let answer = solver.solve(problem)
          if (isNaN(answer[0])) {
            console.log('[ERR!] ' + problem + ' False expression: ' + answer)
          } else {
            console.log(problem + ' = ' + answer.toFraction())
          }
        })
      })
    }
  })
}

main()