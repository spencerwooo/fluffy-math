var inquirer = require('inquirer')
var fs = require('fs')
var Generator = require('./tools/generator')
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

    if (doThis['doWhat'] === 'Solve!') {
      let problem = '1*3-(12/4)+7'
      // let problem = '5 + ((1 + 2) * 4) - 3'
      let solver = new Solver()
      console.log(problem + ' = ' + solver.solve(problem))
    }
  })
}

main()
