/** @function
 * @name getRandomFraction - 生成 0 到 100 的随机数
 */
function gcd (num1, num2) {
  return num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2)
}

/** @function
 * @name getRandomFraction - 生成 0 到 100 的随机数
 */
function getRandomFraction () {
  let resultnum = ''
  let numerator = Math.floor(Math.random() * 10 + 1)
  let denominator = Math.floor(Math.random() * 10 + 1)
  let maxgcd = gcd(numerator, denominator)
  if (numerator < denominator) {
    resultnum += (numerator / maxgcd + '/' + denominator / maxgcd)
    return resultnum
  }
  if (numerator >= denominator) {
    resultnum += (denominator / maxgcd + '/' + numerator / maxgcd)
    return resultnum
  }
}

/** @function
 * @name getRandomOperator - 生成随机的运算符号
 */
function getRandomOperator () {
  let operators = ['+', '-', '*', '÷']
  return operators[[Math.floor(Math.random() * operators.length)]]
}

/** @class
 * @name Fractional - 生成随机四则运算计算题
 */
function Fractional () {
  /** @function
   * @name fractional - 生成计算题
   * @param {int} - 生成的题目数量
   */
  this.fractional = function (problemNum) {
    let problemList = []
    let bracketflag = 0
    let numflag = 0
    let block = 0
    while (problemNum--) {
      bracketflag = 0
      numflag = 0
      block = 0
      let Plen = Math.floor(Math.random() * 5) + 1
      // console.log(Plen)
      let problem = getRandomFraction()
      while (Plen--) {
        block = 0
        problem = problem + getRandomOperator()
        if (Plen > 1) {
          if (Math.random() > 0.7) {
            problem += '('
            bracketflag = 1
            numflag++
            block = 1
          }
        }
        problem += getRandomFraction()
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
      // let problem = getRandomFraction() + getRandomOperator() + getRandomFraction()
      problemList.push(problem)
    }
    return problemList
  }
}

module.exports = Fractional
