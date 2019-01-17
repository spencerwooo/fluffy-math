<div align="center">

<img src="artwork/fluffy-math.png" width="20%"/>

<h1>Fluffy Math</h1>

<p><strong>BIT 软件开发团队项目</strong></p>

<p>👉  🔢  📝  📚  😒  😑  😩  ✔️  📓  👈</p>

<!-- <h3>
<a href="https://github.com/spencerwooo/Sudoku">项目主页</a>
<span> · </span>
<a href="https://spencerwoo.com/Sudoku">博客首页</a>
<span> · </span>
<a href="https://spencerwoo.com/Sudoku/Progress">开发历程</a>
</h3> -->

</div>

## 要求

### 第一阶段

写一个能自动生成小学四则运算题目的命令行「软件」，分别满足下面的各种需求：

- 一次可以出一千道题目，不重复，并把题目写入一个文件
- 当有超过一个运算符的时候，如何对表达式求值？逐步扩展功能和可以支持的表达式类型，最后希望能支持下面类型的题目（最多 10 个运算符，不限括号数量）

```
25 - 3 * 4 - 2 / 2 + 89 = ?
1/2 + 1/3 - 1/4 = ?
(5 - 4) * (3 + 28) = ?
```

- 除了整数外还指出真分数的四则运算
- 让程序接受用户输入答案，判定对错，最后给出总对、错题目的数量

### 第二阶段

- 增加一个运算符，支持乘方运算（乘方优先级高于乘除法优先级）
- 支持两种表示乘方的方式：「^」和「\*\*」（可以通过设置来选择）

### 第三阶段

对程序进行扩展：

- 把程序变成一个网页程序，让用户设定参数得到各种题目
- 选一个从未接触的编程语言（Javascript）并试一试实现基本功能

> 真的，我们两个人从来都没学过 Javascript。

## 项目结构

```bash
.
├── app.js
├── LICENSE
├── package.json
├── problems.txt
├── README.md
├── tools
│   ├── generator.js
│   └── solver.js
└── yarn.lock

1 directory, 8 files
```

入口程序为 `app.js`.

## 编译

1. 安装依赖

```bash
$ yarn install
```

2. 编译运行

```bash
$ yarn start
```

![](https://i.loli.net/2019/01/17/5c40356ef38c5.png)

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
