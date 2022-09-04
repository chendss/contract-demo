# 基于Hardhat脚手架demo

## 开发配置

windows+node+vscoe

## 借鉴资料

- <https://remix.ethereum.org/> 在线学习工具，这里有例子、有可视化调试，方便学习
- <https://solidity-cn.readthedocs.io/zh/develop/>
- <https://solidity-by-example.org/>
- <https://learnblockchain.cn/2018/04/15/web3-html>
- <https://hardhat.org/hardhat-runner/docs/getting-started#running-tasks>
- <https://learnblockchain.cn/docs/ethers.js/>
- <https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20> // ERC20智能合约仓库
- <https://wugaosheng.gitbooks.io/blockchain/content/web3-contract.html>
- <https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/>

## 执行测试用例

`npx run test`

## 部署合约

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```
