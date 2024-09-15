const hre = require("hardhat");

async function main () {
  const ERC20 = await hre.ethers.getContractFactory("ERC20");
  const eRC20 = await ERC20.deploy('ERC20','ETH');

  await eRC20.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${eRC20.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
