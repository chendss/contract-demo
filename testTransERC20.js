const Web3 = require('web3')
const fs = require('fs')

async function main () {
  // 先用web3打通一次合约调用流程
  const ercAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  const from = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  const Market = JSON.parse(fs.readFileSync("./test/artifacts/contracts/ERC20.sol/ERC20.json", 'utf-8'))
  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
  const accounts = await web3.eth.getAccounts()
  const w1 = accounts[0]
  const w2 = accounts[1]
  const contract = new web3.eth.Contract(Market.abi, ercAddress)
  const status = await contract.methods.initTest().send({ from })
  const obj = await contract.methods.totalSupply().call()
  await contract.methods.transfer('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', 100)
    .send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' })
  const count = await contract.methods.transferCount().call()
  // const res2 = await contract.methods.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call()
  console.log('eee', count, w1)
}

main()