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