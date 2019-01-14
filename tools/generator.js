/** @function
 * @name getRandomNumber - 生成 0 到 100 的随机数
 */
function getRandomNumber () {
  // var numerator = Math.floor(Math.random() * 101)
  // var denominator = Math.floor(Math.random() * 101)
  return Math.floor(Math.random() * 101)
}

/** @function
 * @name getRandomNumber - 生成 0 到 100 的随机数
 */
function getSmallRandomNumber () {
  // var numerator = Math.floor(Math.random() * 101)
  // var denominator = Math.floor(Math.random() * 101)
  return Math.floor(Math.random() * 10)
}

/** @function
 * @name getRandomOperator - 生成随机的运算符号
 */
function getRandomOperator () {
  let operators = ['+', '-', '×', '÷', '^']
  let randomoperator = Math.random()
  if (randomoperator > 0.7) {
    return operators[0]
  } else if (randomoperator > 0.4) {
    return operators[1]
  } else if (randomoperator > 0.15) {
    return operators[2]
  } else if (randomoperator > 0.05) {
    return operators[3]
  } else {
    return operators[4]
  }
  // return operators[[Math.floor(Math.random() * operators.length)]]
}

/** @class
 * @name Generator - 生成随机四则运算计算题
 */
function Generator () {
  /** @function
   * @name generate - 生成计算题
   * @param {int} - 生成的题目数量
   */
  this.generate = function (problemNum) {
    // console.log('Hello generator!')
    let problemList = []
    let bracketflag = 0
    let numflag = 0
    let block = 0
    let tmp = ''
    while (problemNum--) {
      bracketflag = 0
      numflag = 0
      block = 0
      let Plen = Math.floor(Math.random() * 10) + 1
      // console.log(Plen)
      let problem = getRandomNumber()
      while (Plen--) {
        block = 0
        tmp = getRandomOperator()
        problem = problem + tmp
        if (Plen > 1) {
          if (Math.random() > 0.7) {
            problem += '( '
            bracketflag = 1
            numflag++
            block = 1
          }
        }
        if (tmp === '**' || tmp === '^') {
          problem += getSmallRandomNumber()
        } else {
          problem += getRandomNumber()
        }
        if (bracketflag) {
          if (Math.random() > 0.7) {
            if (!block) {
              problem += ')'
              bracketflag = 0
              numflag -= 1
            }
          }
        }
      }
      while (numflag > 0) {
        problem += ')'
        numflag--
      }
      // let problem = getRandomNumber() + getRandomOperator() + getRandomNumber()
      problemList.push(problem)
    }
    return problemList
  }
}

module.exports = Generator
