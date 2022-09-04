const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers")
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs")
const { expect } = require("chai")
const { BigNumber } = require("@ethersproject/bignumber")

describe("ERC20", function () {
  let transferCount = 0
  async function deployERC20Fixture () {
    const [owner, ...otherAccounts] = await ethers.getSigners()
    const [name, symbol] = ['CYL', 'C']
    const ERC20 = await ethers.getContractFactory("ERC20")
    const erc20 = await ERC20.deploy(name, symbol)
    const initTotal = 30000
    const ownerBalances = 3000
    const addr = owner.address
    await erc20.initTest(initTotal, ownerBalances) // 开挂给自己点钱先
    return { erc20, owner, otherAccounts, name, symbol, initTotal, ownerBalances, ownerAddress: addr }
  }

  const transferNumber = async (erc20, from, to, b = 100) => {
    const formBanlancesBefore = await erc20.balanceOf(from)
    const toBanlancesBefore = await erc20.balanceOf(to)
    try {
      await erc20.transfer(to, b)
      transferCount += 1 // 成功一次记录一次
    } catch (error) {
      console.log('报错了，可能钱不够', error.message)
    }
    const fromBanlancesAfter = await erc20.balanceOf(from)
    const toBanlancesAfter = await erc20.balanceOf(to)
    return { formBanlancesBefore, toBanlancesBefore, fromBanlancesAfter, toBanlancesAfter }
  }

  describe("部署测试用例", function () {
    it("合约名称与合约符号应该等于设定值", async function () {
      const { erc20, name, symbol } = await loadFixture(deployERC20Fixture)
      const contractName = await erc20.name()
      const contractSymbol = await erc20.symbol()
      expect(name).to.equal(contractName)
      expect(symbol).to.equal(contractSymbol)
    })
    it("开挂的总币与自己账户的币应当与设定值相等", async function () {
      const { erc20, initTotal, ownerBalances, ownerAddress } = await loadFixture(deployERC20Fixture)
      const total = await erc20.totalSupply()
      const ownerBanlances_ = await erc20.balanceOf(ownerAddress)
      expect(total).to.equal(initTotal)
      expect(ownerBalances).to.equal(ownerBanlances_)
    })
  })

  describe("转账测试", function () {
    it("A向B转账，A账户币变少，B账户币增多", async function () {
      const { erc20, otherAccounts, ownerAddress } = await loadFixture(deployERC20Fixture)
      const { formBanlancesBefore, fromBanlancesAfter, toBanlancesAfter, toBanlancesBefore } = await transferNumber(
        erc20,
        ownerAddress,
        otherAccounts[0].address
      )
      expect(100).to.equal(formBanlancesBefore - fromBanlancesAfter)
      expect(100).to.equal(toBanlancesAfter - toBanlancesBefore)
    })
    it("A向多个账户转账，A账户币变少，多个账户币增多", async function () {
      const { erc20, otherAccounts, ownerAddress } = await loadFixture(deployERC20Fixture)
      for await (const otherAccount of otherAccounts) {
        const { formBanlancesBefore, fromBanlancesAfter, toBanlancesAfter, toBanlancesBefore } = await transferNumber(
          erc20,
          ownerAddress,
          otherAccount.address
        )
        expect(100).to.equal(formBanlancesBefore - fromBanlancesAfter)
        expect(100).to.equal(toBanlancesAfter - toBanlancesBefore)
      }
    })
    it("A钱不够转账，应当转账失败", async function () {
      const { erc20, otherAccounts, ownerAddress } = await loadFixture(deployERC20Fixture)
      const { formBanlancesBefore, fromBanlancesAfter, toBanlancesAfter, toBanlancesBefore } = await transferNumber(
        erc20,
        ownerAddress,
        otherAccounts[0].address,
        10000
      )
      expect(0).to.equal(formBanlancesBefore - fromBanlancesAfter)
      expect(0).to.equal(toBanlancesAfter - toBanlancesBefore)
    })
  })

  describe("转账统计测试", function () {
    it("A向N个账户转账，统计数应该加N，总统计数应该等于总计N", async function () {
      const { erc20, otherAccounts, ownerAddress } = await loadFixture(deployERC20Fixture)
      const countBn = BigNumber.from(`${otherAccounts.length}`)
      for await (const otherAccount of otherAccounts) {
        const bn = BigNumber.from('1')
        const contractTransfCountBefore = await erc20.transferCount()
        await transferNumber(erc20, ownerAddress, otherAccount.address)
        const contractTransfCountAfter = await erc20.transferCount()
        const dx = contractTransfCountAfter.sub(contractTransfCountBefore)
        expect(bn.toString()).to.equal(dx.toString())
      }
      const contractTransfCount = await erc20.transferCount()
      expect(countBn.toString()).to.equal(contractTransfCount.toString())
    })
  })
})
