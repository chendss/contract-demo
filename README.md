# 智能合约学习历程

第一次接触智能合约的开发，介绍一下我是如何学习的。

[TOC]

## 一、学习范围

我们先确定一下范围 智能合约、solidity、hardhat、ERC-20合约

- 智能合约
  - <https://zh.wikipedia.org/wiki/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6>
  - <https://www.zhihu.com/question/268003620>
  - <https://yeasy.gitbook.io/blockchain_guide/07_ethereum/concept>
  - <https://www.woshipm.com/blockchain/1442574.html>
  - <https://www.techtarget.com/searchcio/definition/smart-contract>
  - <https://blog.chain.link/what-is-a-smart-contract-and-why-it-is-a-superior-form-of-digital-agreement-zh/>
- ERC-20合约
  - <https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC-20>
  - <https://zhuanlan.zhihu.com/p/391837660>
  - <https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/>
  - <https://github.com/xianfeng92/Love-Ethereum/blob/master/notes/ERC-20%E5%8D%8F%E8%AE%AE%E8%AF%A6%E8%A7%A3.md>
- hardhat环境
  - <https://cloud.tencent.com/developer/article/1794419>
  - <https://learnblockchain.cn/article/1356>
  - <http://blog.hubwiz.com/2021/02/26/hardhat-beginner-tutorial/>
  - <https://hardhat.org/hardhat-runner/docs/getting-started#running-tasks>
- 开发语言：solidity
  - <https://remix.ethereum.org/>
  - <https://solidity-cn.readthedocs.io/zh/develop/>
  - <https://solidity-by-example.org/>

## 学习历程

### 1、智能合约

#### 1.1、智能合约是什么？

在维基上的定义是这样的：
`是一种特殊协议，在区块链内制定合约时使用，当中内含了代码函数 (Function)，亦能与其他合约进行交互、做决策、存储资料及发送以太币等功能。智能合约主力提供验证及执行合约内所订立的条件。`

跨领域法律学者尼克·萨博（Nick Szabo）是这样定义的：`一个智能合约是一套以数字形式定义的承诺（promises），包括合约参与方可以在上面执行这些承诺的协议`

得到几个信息：

- 可以编程
- 在区块链内使用
- 可以存储数据

从知乎上查到另一种定义：`Smart Contract，是一种旨在以信息化方式传播、验证或执行合同的计算机协议`

意味着它其实就一种特殊的合同，

智能合约具备一些特点：

- 规则公开透明，合约内的规则以及数据对外部可见
- 所有交易公开可见，不会存在任何虚假或者隐藏的交易

#### 1.2、为什么需要智能合约

智能合约一定要在区块链技术之上才能实现吗？其实并非如此，在了解到智能合约的定义之后，学过技术的同学应该很容易想得到，传统计算机技术里，也是可以实现自动交易的合约的；
那么传统计算机没有采用智能合约呢？合约是记录在代码里的，那么**数字化的合约，在传统计算机技术里，更容易有被篡改、被攻击的技术风险**，因为传统计算机技术里，是中心化的，一切都在某一台计算机里，或者某一个组织的计算机里，并且管理这些系统的人也是高度利益相关（单向）的，一旦出现纠纷，所有最重要的证据都在对方的计算机里，指望道德是不靠谱的。

但是区块链是去中心化的、不可篡改的、高可靠的系统，正是因为这种去中心的底层逻辑，使得每一个人都是举证方，都是存有一份“证据”的，在这种情况下信任自动交易才变成现实；

在计算机世界里，机器与人类相比，人会作恶，但是代码不会主观作恶，而传统的契约（合同）行为都是由人来制定与执行，这样就会导致执行过程的可操作空间变得很大（不公平，不公开）

于是智能合约就是来解决这个问题的，人来制定一套规则，但是却是机器来执行，这样就规避开人执行是的作弊行为。

这样就可以得出它的价值（优势）

- 安全：在去中心化的基础架构中运行智能合约能够规避单点失效风险、去除中心化的中介，而且不论是合约任意一方还是系统管理员都无法篡改结果
- 可靠：网络中多个独立节点会对智能合约逻辑进行重复处理和验证，以有效规避操纵风险并保障网络运行时间，确保合约按照规定条款按时执行
- 公平：使用点对点的去中心化网络运行并执行合约条款，能够减少中心化的营利性实体榨取交易价值
- 高效：将托管、维护、执行和交割等后端流程自动化，意味着合约双方都无须等待手动输入数据、交易对手方履行合约职责或中间方处理交易（代码完成）

所以，为什么需要智能合约，可以知道有一个原因是：代码比人更具备公平性，把合约的执行交付给程序更为靠谱与公平。
特别一提：与其说链需要智能合约，不如说是因为链的去中心化，使得智能合约能大放异彩。

#### 1.3、智能合约有什么应用

- 金融产品（DeFi）
  - 应用使用智能合约再造传统金融产品和服务，其中包括货币市场、衍生品、稳定币、交易所以及资产管理等。智能合约可以托管用户资金，并根据结果分配给相应用户。举个例子，Set协议使用市场数据自动进行投资组合管理，Opium交易所基于实时资产价格交割期权合约。）
- 游戏
  - 区块链游戏使用智能合约防游戏中欺诈行为。其中一个例子就是PoolTogether，这是一个保本储蓄游戏，用户将存款放在一个彩票智能合约中，并连接到货币市场
  - 存款在货币市场中积累利息，并基于随机数生成机制（RNG）将利息发放给中奖者。公布中奖者后，所有人都可以取回最初的本金。同样地，智能合约还能用RNG创建罕见的游戏物品，比如一次性的神奇宝剑
  - 可以用Chainlink的可验证随机函数（VRF）生成随机数，使用户相信结果的随机性，用户还能独立对结果进行验证，确保结果没有受到游戏开发者或数据提供商的操纵。
- 保险
  - 参数化保险是新型的保险模式，保险赔付直接与预先设定的具体事件挂钩。智能合约可以为参数化保险提供防篡改的基础架构，基于数据输入触发合约执行
  - Etherisc正在开发一款航班保险智能合约，当收到航班状态信息时可自动赔付。终端用户不仅可以获得更大的保障，而且个人投资者还能通过智能合约参与到保险的供应端，将资金存放在合约资金池中。智能合约基于用户对资金池的贡献比例分配收益

等等

### 2、ERC-20代币合约

#### 2.1、什么是代币

在以太坊系统中，存在作为基础货币的 Ether（以太），以及同样可以作为货币使用的 Token（代币）。

以太坊与其他加密货币的主要不同在于，以太坊不是单纯的货币，而是一个环境/平台。在这个平台上，任何人都可以利用区块链的技术，通过智能合约来构建自己的项目和DAPPS（去中心化应用

如果把以太坊理解成互联网，DAPPS则是在上面运行的网页。DAPPS是去中心化的，意味着它不属于某个人，而是属于一群人。DAPPS发布的方式通常是采用被称为 ICO 的众筹方式。简单来说，你需要用你的以太来购买相应DAPP的一些tokens。

一般有两种Token

- Usage Tokens: 就是对应 DAPP 的原生货币
- Work Tokens: 此类 Tokens 可以标识你对于 DAPP 的某种股东权益

了解到代币的定义后，有个问题值得思考，为什么在已经有了以太基础货币后，还需要token（代币）呢？因为代币可以在以太坊里代表任何东西

- 彩票
- 法定货币
- 黄金
- 白银
等等

我们类比到真实的场景去，假设我们去游乐场玩游戏、开摩托车等操作，需要先用现金获取游戏币，然后用游戏币投入各项机器才体验它的功能，这里的现金就是以太（基础货币），游戏币就是代币（token），目的是利用token去使用合约的各项功能的。

据作者查到的资料里，对于代币合约的定义并没有一个准确的说法，本质上来说代币背后都承载着一定的业务意义，举个例子：

假如你造了一个代币，币数极大；你还开了个交易所，向全世界宣布交易所可以接受代币1比1换人民币；你在央行提交保证金，让其他机构监管你。那么你就创造了一个USDT 与RMB一比一的汇率。

这里作者给出一个定义：代币就是在以太币（基础币）的基础上，结合人的某种需求或者场景衍生的一种数字化的货币承载体，例如信誉、彩票、法定货币等（没有承载东西的时候就是空气币），而代币合约就是在这种环境下用于处理内部各种逻辑的智能合约。

#### 2.2、ERC-20代币合约

##### ERC-20发展

ERC-20是一种ETH以太坊代币的标准，是从早期的EIP-20提案标准论证发展而来，他也是以太坊创始人Vitalik Buterin（V神）在2015年提出的以太坊第20号代币标准。
截止2022年，ETH上有大量的ERC-20标准以及ERC-721标准的代币合约，加起来大概45w种代币，其中ERC-20占据96.9%

##### ERC-20标准是什么？

ERC-20实际上更像是typescript里的一套接口 interface ERC20,里面包含着

- 代币的名称
- 总量
- 规定小数点位（精度）
- 如何批准其交易
- 如何访问数据
- 查看地址下代币的数量和总量
在允许的情况下第三方可以使用账户中的代币、允许代币和兼容ETH合约和钱包服务的第三方兼容以及其他一些函数功能

翻译成`TypesSript`就是

```typescript
interface ERC20 {
  /** 代币名称 **/
  name: () => string
  /** 该币的发行总量 **/
  totalSupply: () => BigNumber
  /** 给定地址的余额 **/
  balanceOf: (address: string) => BigNumber | null
  /** 表示把当前调用该函数用户的value数量的代币转移给to这个用户 **/
  transfer: (to:string, value: number) => void
  /** 它是专门给第三方智能合约设计的，表示允许该函数的调用者msg.sender (通常是另一个已授权的智能合约) 从_from账户转移value个代币到_to账户，同时也会触发Transfer()这个事件在区块链上留下log **/
  transferFrom: (from:string, to:string, value: number) => void
  /** 表示用户授权spender (即调用transferFrom()的第三方智能合约) 从你的账户最多转移value个代币 **/
  approve: (sender:string, value: number) => void
  /** owner仍然允许spender转移的代币个数 **/
  allowance: (sender:string, value: number) => BigNumber
}
```

**这里需要理解一下transferFrom、approve、allowance三个函数的意义**
在EtherDelta交易的第一步是需要向EtherDelta合约“充值”，这里会让你确认两次，第一次确认实际上就是调用了approve()函数，允许EtherDalta合约从该账户转走最多X个代币,
第二次确认，此时调用了transferFrom()函数

值得一提的是，ERC-20的approve是有安全隐患的（front-running attack），并且作者了解到的信息是目前仍未解决，场景如下：

- A授权B可以挪用100个她的Token A. (tx1)
- tx1被矿工确认后，A想把授权上限改为50个Token A. (tx2)
- B探测到tx1已经确认，同时tx2还在pending状态，他给高额gas并调用transferFrom()函数直接在tx2被确认前从A账户转移了100个Token A. (tx3)
- tx3先于tx2被确认，之后不久tx2也被确认，在A还没反应过来之前B立马再次调用transferFrom()又从A那转移了50个Token A。
- 这样B一共从 A那转移了150个Token A，虽然A的本意是只希望授权50个给B挪用。

打了一套时间差，所以在授权的时候一定要确认spender的信任是否足够。

这套标准的定义，让以太坊区块链上的其他智能合约和去中心化应用之间无缝交互

##### 　ERC-20背后的意义是什么？

ERC-20的出现，给代币设定了一种标准，允许开发人员构建可与其他产品和服务互操作的令牌应用程序”，在 ERC-20 标准诞生之前，任何想要创建代币的人都必须从头开始（这意味着他们必须首先编写整个区块链协议）并定制构建代码。这个标准的出现，大大降低了创造代币的成本

### 2.3、solidity

这里将一个非常简单的demo，体验一下这个语言的一些简单特性，本文不做深入讲解

#### 以太网络部署到本地

windows的用户直接 下载<https://trufflesuite.com/ganache/> 安装后无脑启动就可以得到一个环境了

mac用户可以<http://blog.hubwiz.com/2019/06/01/ethereum-mac-env/> 用这篇文章来得到一个环境

![](https://s1.328888.xyz/2022/09/06/1dCzS.png)

#### 编译器安装

`npm install -g solc`

windows用户可以直接下载 <https://github.com/ethereum/solidity/releases>,本仓库跟目录也有一个`solc.exe`文件，也是一样的

#### 先写一个hello world

具体代码可以参考本仓库下的 *demo1*

#### 编译出abi和bin文件

因为solidity并不是低级语言，所以需要编译出可以认识的东西来。 `solc.exe --bin counter.sol` ,这样会出现Counter.ab和Counter.bin文件，这俩文件在后面发布和调用时有用处，请往下看

#### 发布一个

*demo1*里用的是web3来与智能合约交互，因为刚开始搜资料的时候介绍web3比较多，后面用hardhat就改成了etherjs了

```javascript
const Web3 = require('web3')
const fs = require('fs')

async function main () {
  const abi = JSON.parse(fs.readFileSync('./Counter.abi', 'utf-8'))
  const bytecode = fs.readFileSync('./Counter.bin', 'utf-8')

  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")) // 本地起了一个ganache以太坊网络,7545是我本地以太网络的端口
  // 获取 ganache 中的所有账户
  const accounts = await web3.eth.getAccounts()
  // 部署合约，并用第一个账户的资金支付部署合约的开销
  await new web3.eth.Contract(abi).deploy({ data: bytecode }).send({
    from: accounts[0], // 随便找个人花钱，因为是自建的，这个无所谓
    gas: 4200000 // 愿意花这个gas来部署合约,随便试的 不停告诉我不够钱
  })
}

main()
```

#### 调用这个智能合约

```javascript
const Web3 = require('web3')
const fs = require('fs')

const addCount = (contract, accounts) => {
  return contract.methods.add().send({
    from: accounts[0] // 随便找个有钱的账户出钱
  })
}

const getCount = async (contract) => {
  const count = await contract.methods.getCount().call()
  return count
}

const main = async () => {
  const abi = JSON.parse(fs.readFileSync('./Counter.abi', 'utf-8'))
  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  const accounts = await web3.eth.getAccounts()
  const contractAddr = '0xECD1D6baC07b96C3Ee7257D77e9bd5ef3E215D13'
  const contract = new web3.eth.Contract(abi, contractAddr)
  await addCount(contract, accounts)
  const count = await getCount(contract)
  console.log('out count', count)
}

main()
```

#### 在线代码编辑

<https://remix.ethereum.org/> 刚开始的时候建议可以直接用在线环境去学习如何写一个合约，这样可以免去部署环境的痛苦（虽然并不难）

<img src="https://s1.328888.xyz/2022/09/06/1d1GN.png" style="zoom:33%;" />
<img src="https://s1.328888.xyz/2022/09/06/1dkE5.png" style="zoom:33%;" />
<img src="https://s1.328888.xyz/2022/09/06/1d58y.png" style="zoom: 33%;" />

### 2.4、hardhat
