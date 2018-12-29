// Get random number between 0 to 100
function getRandomNumber () {
  return Math.floor(Math.random() * 101)
}

function getRandomOperator () {
  let operators = [' + ', ' - ', ' × ', ' ÷ ']
  return operators[[Math.floor(Math.random() * operators.length)]]
}

function generator (problemNum) {
  console.log('Hello generator!')
  let problemList = []
  while (problemNum--) {
    let problem = getRandomNumber() + getRandomOperator() + getRandomNumber()
    problemList.push(problem)
  }
  return problemList
}

module.exports = generator
