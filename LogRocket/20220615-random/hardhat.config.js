require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/x_DUQ1nOB4umfCF5oKqCEJ3lXbFrbn8S",
       accounts: ["0efe2d1f9323cbb538da307e718711d57a7b5a9e2765855141a67e4f6cba165e"]
    }
  }

};