# 智能合约学习历程

第一次接触智能合约的开发，介绍一下我是如何学习的。

## 一、学习范围

我们先确定一下范围 智能合约、solidity、hardhat、ERC20合约

- 智能合约
  - <https://zh.wikipedia.org/wiki/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6>
  - <https://www.zhihu.com/question/268003620>
  - <https://yeasy.gitbook.io/blockchain_guide/07_ethereum/concept>
  - <https://www.woshipm.com/blockchain/1442574.html>
  - <https://www.techtarget.com/searchcio/definition/smart-contract>
- ERC20合约
  - <https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20>
  - <https://zhuanlan.zhihu.com/p/391837660>
  - <https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/>
  - <https://github.com/xianfeng92/Love-Ethereum/blob/master/notes/ERC-20%E5%8D%8F%E8%AE%AE%E8%AF%A6%E8%A7%A3.md>
- hardhat环境
  - <https://cloud.tencent.com/developer/article/1794419>
  - <https://learnblockchain.cn/article/1356>
  - <http://blog.hubwiz.com/2021/02/26/hardhat-beginner-tutorial/>
  - <https://hardhat.org/hardhat-runner/docs/getting-started#running-tasks>
- 开发语言：solidity
  - <https://solidity-cn.readthedocs.io/zh/develop/>
  - <https://solidity-by-example.org/>

## 二、学习历程

### 2.1、智能合约

#### 智能合约是什么？

在维基上的定义是这样的：
`是一种特殊协议，在区块链内制定合约时使用，当中内含了代码函数 (Function)，亦能与其他合约进行交互、做决策、存储资料及发送以太币等功能。智能合约主力提供验证及执行合约内所订立的条件。`

得到几个信息：

- 可以编程
- 在区块链内使用
- 可以存储数据

从知乎上查到另一种定义：`Smart Contract，是一种旨在以信息化方式传播、验证或执行合同的计算机协议`

意味着它其实就一种特殊的合同，

智能合约具备一些特点：

- 规则公开透明，合约内的规则以及数据对外部可见
- 所有交易公开可见，不会存在任何虚假或者隐藏的交易

所以我们常说区块链技术具有“公开透明”“不可篡改”的特点，这些其实都是智能合约赋予区块链的

在计算机世界里，机器与人类相比，人会作恶，但是代码不会主观作恶，而传统的契约（合同）行为都是由人来制定与执行，这样就会导致执行过程的可操作空间变得很大（不公平，不公开）

于是智能合约就是来解决这个问题的，人来制定一套规则，但是却是机器来执行，这样就规避开人执行是的作弊行为。

这样就可以得出它的价值（优势）

- 安全：在去中心化的基础架构中运行智能合约能够规避单点失效风险、去除中心化的中介，而且不论是合约任意一方还是系统管理员都无法篡改结果
- 可靠：网络中多个独立节点会对智能合约逻辑进行重复处理和验证，以有效规避操纵风险并保障网络运行时间，确保合约按照规定条款按时执行
- 公平：使用点对点的去中心化网络运行并执行合约条款，能够减少中心化的营利性实体榨取交易价值
- 高效：将托管、维护、执行和交割等后端流程自动化，意味着合约双方都无须等待手动输入数据、交易对手方履行合约职责或中间方处理交易（代码完成）

### 2.2、ERC20合约

### 2.3、solidity

### 2.4、hardhat
