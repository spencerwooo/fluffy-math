/** @function
 * @name isNumeric
 * @param {string} num - 检查以字符串形式存储的变量是否为数字
 */
function isNumeric (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

/** @function
 * @name cleanArray
 * @param {Array} arr - 删掉 List 中的空白表项
 */
function cleanArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      arr.splice(i, 1)
    }
  }
  return arr
}

/** @class
 * @name Solver: 解决四则运算问题
 */
function Solver () {
  /** @function
   * @name reversePolishNotation - 中缀表达式转后缀表达式
   * */
  this.reversePolishNotation = function (preFixExpression) {
    let outputQueue = ''
    let operatorStack = []
    let operators = {
      '^': {
        priority: 4,
        associativity: 'R'
      },
      '/': {
        priority: 3,
        associativity: 'L'
      },
      '*': {
        priority: 3,
        associativity: 'L'
      },
      '+': {
        priority: 2,
        associativity: 'L'
      },
      '-': {
        priority: 2,
        associativity: 'L'
      }
    }

    // Get rid of unnecessary spaces
    preFixExpression = preFixExpression.replace(/\s+/g, '')
    preFixExpression = cleanArray(preFixExpression.split(/([+\-*/^()])/))

    for (let i = 0; i < preFixExpression.length; i++) {
      let token = preFixExpression[i]
      if (isNumeric(token)) {
        outputQueue += token + ' '
      } else if ('^*/+-'.indexOf(token) !== -1) {
        let o1 = token
        let o2 = operatorStack[operatorStack.length - 1]
        while ('^*/+-'.indexOf(o2) !== -1 && ((operators[o1].associativity === 'L' && operators[o1].priority <= operators[o2].priority) || (operators[o1].associativity === 'R' && operators[o1].priority < operators[o2].priority))) {
          outputQueue += operatorStack.pop() + ' '
          o2 = operatorStack[operatorStack.length - 1]
        }
        operatorStack.push(o1)
      } else if (token === '(') {
        operatorStack.push(token)
      } else if (token === ')') {
        while (operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue += operatorStack.pop() + ' '
        }
        operatorStack.pop()
      }
    }

    while (operatorStack.length > 0) {
      outputQueue += operatorStack.pop() + ' '
    }

    return outputQueue
  }

  /** @function
   * @name solve - 中缀转后缀，然后以后缀表达式的形式求解四则运算问题
   * @param {string} expression - 中缀表达式
   */
  this.solve = function (expression) {
    let resultStack = []
    let postFixExpression = this.reversePolishNotation(expression)
    // console.log(postFixExpression)

    postFixExpression = postFixExpression.split(' ')
    cleanArray(postFixExpression)
    for (let i = 0; i < postFixExpression.length; i++) {
      if (isNumeric(postFixExpression[i])) {
        resultStack.push(postFixExpression[i])
      } else {
        let val1 = resultStack.pop()
        let val2 = resultStack.pop()
        if (postFixExpression[i] === '+') {
          resultStack.push(parseInt(val2) + parseInt(val1))
        } else if (postFixExpression[i] === '-') {
          resultStack.push(parseInt(val2) - parseInt(val1))
        } else if (postFixExpression[i] === '*') {
          resultStack.push(parseInt(val2) * parseInt(val1))
        } else if (postFixExpression[i] === '/') {
          resultStack.push(parseInt(val2) / parseInt(val1))
        } else if (postFixExpression[i] === '^') {
          resultStack.push(Math.pow(parseInt(val2), parseInt(val1)))
        }
      }
    }

    if (resultStack.length > 1) {
      return 'ERR'
    } else {
      return resultStack.pop()
    }
  }
}

module.exports = Solver
