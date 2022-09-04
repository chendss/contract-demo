const Web3 = require('web3')
const fs = require('fs')

async function main () {
  const abi = JSON.parse(fs.readFileSync('./Counter.abi', 'utf-8'))
  const bytecode = fs.readFileSync('./Counter.bin', 'utf-8')

  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")) // 本地起了一个ganache以太坊网络
  // 获取 ganache 中的所有账户
  const accounts = await web3.eth.getAccounts()
  // 部署合约，并用第一个账户的资金支付部署合约的开销
  await new web3.eth.Contract(abi).deploy({ data: bytecode }).send({
    from: accounts[0],
    gas: 4200000 // 愿意花这个gas来部署合约,随便试的 不停告诉我不够钱
  })
}

main()