# 测试

[![Codacy Badge](https://img.shields.io/codacy/coverage/ebf8f648a65a4e3a86f93b50d7fd6dce.svg?style=for-the-badge)](https://www.codacy.com/app/spencerwooo/fluffy-math?utm_source=github.com&utm_medium=referral&utm_content=spencerwooo/fluffy-math&utm_campaign=Badge_Coverage)

## 内容

`/test` 目录下存放测试用例、测试方法和测试结果。测试结果和覆盖率等内容同步至 Codacy 平台。

## 测试方法

利用 `nyc` - [the Istanbul command line interface](https://github.com/istanbuljs/nyc) 对代码覆盖率进行检测。测试方法：

```bash
$ npx nyc --reporter=lcov yarn test
```

显示测试报告：

```bash
$ npx nyc report
```

同步至 Codacy 平台：

```bash
yarn send-coverage
```

## 结果

```
-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |    95.52 |    89.32 |    96.97 |    96.18 |                   |
 fluffy-math       |    90.67 |       80 |      100 |    93.15 |                   |
  app.js           |    90.67 |       80 |      100 |    93.15 |  41,65,88,113,119 |
 fluffy-math/tools |    97.21 |    91.57 |    95.45 |    97.21 |                   |
  fractional.js    |      100 |    93.75 |      100 |      100 |                20 |
  generator.js     |      100 |      100 |      100 |      100 |                   |
  questionbot.js   |    94.12 |      100 |    83.33 |    94.12 |             41,42 |
  solver.js        |    93.44 |    80.65 |      100 |    93.44 |   121,123,124,130 |
-------------------|----------|----------|----------|----------|-------------------|
```