var inquirer = require('inquirer')
var Solver = require('./solver')
var { from } = require('rxjs')

function QuestionBot () {
  this.startQuestioning = function (problemSet) {
    let totalScore = problemSet.length
    let currentProblem = 0
    console.log('----------------------------------------')
    console.log('There are', totalScore, 'problems to solve!')
    console.log('Write fractions as \'1/2\' with no spaces.')
    console.log('Happy hacking!')
    console.log('----------------------------------------')

    let solverBot = new Solver()

    let questionBotAsk = []
    problemSet.forEach(problem => {
      let questionBotAskEach = {
        type: 'input',
        name: 'botAsk',
        message: problem + ' ='
      }
      questionBotAsk.push(questionBotAskEach)
    })
    let obs = from(questionBotAsk)

    inquirer.prompt(obs).ui.process.subscribe(
      function (ans) {
        let problem = problemSet[currentProblem]
        let answer = solverBot.solve(problem).toFraction()
        if (ans.answer === answer) {
          console.log('✅ ', 'You are right!')
        } else {
          console.log('❌ ', 'That was wrong...')
          totalScore = totalScore - 1
        }
        currentProblem = currentProblem + 1
      },
      function (err) {
        console.log('Err: ', err)
        currentProblem = currentProblem + 1
      },
      function () {
        let accuracy = (totalScore / problemSet.length * 100).toFixed(2) + '%'
        console.log('----------------------------------------')
        console.log('That\'s the end of the quiz!')
        console.log('You scored', totalScore, 'out of', problemSet.length + ', with an accuracy of', accuracy)
        console.log('Thanks for playing!')
        console.log('----------------------------------------')
      }
    )
  }
}

module.exports = QuestionBot
