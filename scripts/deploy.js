const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account:", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const Token = await hre.ethers.getContractFactory("CoffeePortal");
    const portal = await Token.deploy({
        value: hre.ethers.utils.parseEther("0.1")
    });
    await portal.deployed();
    console.log("CoffeePortal address: ", portal.address);
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  