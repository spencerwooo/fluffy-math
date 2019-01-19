<div align="center">

<img src="artwork/fluffy-math.png" width="20%"/>

<h1>Fluffy Math</h1>

<p><strong>BIT 软件开发团队项目</strong></p>

<h3>
<a href="https://github.com/spencerwooo/fluffy-math">Core and CLI</a>
<span> · </span>
<a href="https://github.com/spencerwooo/fluffy-math-spa">Frontend</a>
<span> · </span>
<a href="https://spencerwoo.com/fluffy-math-docs/">Documentation</a>
</h3>

[![Codacy Badge](https://img.shields.io/codacy/grade/ebf8f648a65a4e3a86f93b50d7fd6dce.svg?logo=codacy&logoColor=%23fff&style=for-the-badge)](https://www.codacy.com/app/spencerwooo/fluffy-math?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=spencerwooo/fluffy-math&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://img.shields.io/codacy/coverage/ebf8f648a65a4e3a86f93b50d7fd6dce.svg?style=for-the-badge)](https://www.codacy.com/app/spencerwooo/fluffy-math?utm_source=github.com&utm_medium=referral&utm_content=spencerwooo/fluffy-math&utm_campaign=Badge_Coverage)
[![](https://img.shields.io/badge/codestyle-standard-2176ff.svg?style=for-the-badge&logo=eslint&logoColor=fff)](https://standardjs.com/)
[![](https://img.shields.io/github/license/spencerwooo/fluffy-math.svg?style=for-the-badge)](https://github.com/spencerwooo/fluffy-math/blob/master/LICENSE)

</div>

## 项目链接

项目共有三个仓库：

- [Fluffy Math Core](https://github.com/spencerwooo/fluffy-math)：Fluffy Math 的底层类库（与命令行界面）仓库
- [Fluffy Math Front-end](https://github.com/spencerwooo/fluffy-math-spa)：Fluffy Math 的前端仓库
- [Fluffy Math Docs](https://github.com/spencerwooo/fluffy-math-docs)：Fluffy Math 团队的博客文档

## Core 项目结构

```bash
.
├── app.js
├── artwork
│   └── fluffy-math.png
├── LICENSE
├── package.json
├── problems.txt
├── README.md
├── solve_problems.txt
├── tools
│   ├── fractional.js
│   ├── generator.js
│   ├── questionbot.js
│   └── solver.js
└── yarn.lock

2 directories, 12 files
```

入口程序为 `app.js`.

## 编译

> **本地文件请全部使用 `LF` 换行符。**

1. 安装依赖

```bash
$ yarn install
```

2. 编译运行

```bash
$ yarn start
```

![](https://i.loli.net/2019/01/17/5c40356ef38c5.png)

## 要求

### 第一阶段

写一个能自动生成小学四则运算题目的命令行「软件」，分别满足下面的各种需求：

- [x] 一次可以出一千道题目，不重复，并把题目写入一个文件
- [x] 当有超过一个运算符的时候，如何对表达式求值？逐步扩展功能和可以支持的表达式类型，最后希望能支持下面类型的题目（最多 10 个运算符，不限括号数量）

```
25 - 3 * 4 - 2 / 2 + 89 = ?
1/2 + 1/3 - 1/4 = ?
(5 - 4) * (3 + 28) = ?
```

- [x] 除了整数外还指出真分数的四则运算
- [x] 让程序接受用户输入答案，判定对错，最后给出总对、错题目的数量

### 第二阶段

- [x] 增加一个运算符，支持乘方运算（乘方优先级高于乘除法优先级）
- [x] 支持两种表示乘方的方式：「^」和「\*\*」（可以通过设置来选择）

### 第三阶段

对程序进行扩展：

- [x] 把程序变成一个网页程序，让用户设定参数得到各种题目
- [x] 选一个从未接触的编程语言（Javascript）并试一试实现基本功能

> 真的，我们两个人从来都没学过 Javascript。

## 任务与进展

### 任务分配

**第一阶段：**

- 设计类、方法 - *[@Spencer Woo](https://github.com/spencerwooo)* *[@Garvey Lau](https://github.com/Garvey98)*
- 实现生成计算题 - *[@Garvey Lau](https://github.com/Garvey98)*
- 实现对生成的计算题形式的配置 - *[@Garvey Lau](https://github.com/Garvey98)*
- 实现对计算题的求解 - *[@Spencer Woo](https://github.com/spencerwooo)*
- 实现对新增计算题类型的求解 - *[@Spencer Woo](https://github.com/spencerwooo)*

**第二阶段：**

- 实现网页端 SPA 程序的搭建
---

🔢 **Fluffy Math** ©Spencer Woo. Released under the MIT License.

Authored by Spencer Woo. Co-maintained with [@Garvey Lau](https://github.com/Garvey98).

[@Blog](https://spencerwoo.com/) · [ⒿJike](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwooo)
