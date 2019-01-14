/** @function
 * @name getRandomNumber - 生成 0 到 100 的随机数
 */
function getRandomNumber () {
  return Math.floor(Math.random() * 101)
}

/** @function
 * @name getRandomOperator - 生成随机的运算符号
 */
function getRandomOperator () {
  let operators = ['+', '-', '×', '÷']
  return operators[[Math.floor(Math.random() * operators.length)]]
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
    while (problemNum--) {
      let problem = getRandomNumber() + getRandomOperator() + getRandomNumber()
      problemList.push(problem)
    }
    return problemList
  }
}

module.exports = Generator
