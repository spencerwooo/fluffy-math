/** @function
 * @name getRandomNumber - 生成 0 到 100 的随机数
 */
function getRandomNumber () {
  return Math.floor(Math.random() * 101)
}

/** @function
 * @name getRandomNumber - 生成 0 到 100 的随机数
 */
function getSmallRandomNumber () {
  return Math.floor(Math.random() * 10)
}

/** @function
 * @name getRandomOperator - 生成随机的运算符号
 */
function getRandomOperator () {
  let operators = ['+', '-', '*', '÷', '^', '**']
  let randomoperator = Math.random()
  if (randomoperator > 0.7) {
    return operators[0]
  } else if (randomoperator > 0.4) {
    return operators[1]
  } else if (randomoperator > 0.15) {
    return operators[2]
  } else if (randomoperator > 0.05) {
    return operators[3]
  } else if (randomoperator > 0.025) {
    return operators[4]
  } else {
    return operators[5]
  }
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
    let bracketflag = 0 // 能不能加右括号
    let numflag = 0 // 缺少的右括号个数
    let block = 0 // 避免（3）这种情况
    let tmp = '' // 存储运算符，进行运算类型判断，以约束运算数
    while (problemNum--) {
      bracketflag = 0
      numflag = 0
      block = 0
      let end = 0
      let start = 0
      let Plen = Math.floor(Math.random() * 10) + 1
      let problem = getRandomNumber()
      while (Plen--) {
        block = 0
        problem = problem + ' '
        tmp = getRandomOperator()
        problem = problem + tmp
        if (tmp === '**' || tmp === '^') {
          end = problem.length
          start = end - 3
          while (start) {
            if (start === 1) {
              problem = problem.substring(0, start) + ' '
              problem = problem + tmp
              break
            }
            if ((problem[start] >= '0' && problem[start] <= '9') || problem[start] === ')' || problem[start] === ' ') {
              if (problem[start] === ')') {
                numflag++
              }
              problem = problem.substring(0, start + 2) + ' '
              problem = problem + tmp
              start--
            } else break
          }
          problem = problem + ' '
          problem += getSmallRandomNumber()
        } else {
          if (Plen > 1) {
            if (Math.random() > 0.8) {
              problem = problem + ' '
              problem += '('
              bracketflag = 1
              numflag++
              block = 1
            }
          }
          problem = problem + ' '
          problem += getRandomNumber()
        }
        if (bracketflag) {
          if (Math.random() > 0.7) {
            if (!block) {
              problem = problem + ' '
              problem += ')'
              bracketflag = 0
              numflag -= 1
            }
          }
        }
      }
      while (numflag > 0) {
        problem = problem + ' '
        problem += ')'
        numflag--
      }
      problemList.push(problem)
    }
    return problemList
  }
}

module.exports = Generator
