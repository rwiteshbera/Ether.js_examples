const { ethers } = require("ethers");

const url = "https://mainnet.infura.io/v3/376c37f714e24a7ea10a69efe7993408";

const provider = new ethers.providers.JsonRpcProvider(url);

const main = async () => {
  let account = "0x6887246668a3b87F54DeB3b94Ba47a6f63F32985";

  // Get the number of blocks
  // var blockNumber = await provider.getBlockNumber();
  // console.log(blockNumber);

  // Get Ethereum balance
  var price = await provider.getBalance(account);
  console.log(ethers.utils.formatEther(price));

};

main();
