const { ethers } = require("ethers");

const url = ""; // Provide the network endpoint
const provider = new ethers.providers.JsonRpcProvider(url);

const sender = ""; // Sender's address
const recipient = ""; // Recipient's address

const privateKey = ""; // sender's private key
const wallet = new ethers.Wallet(privateKey, provider);

const main = async () => {
    const amount = 0.025; // Type the amount

  //  Send Ether
  const tx = await wallet.sendTransaction({
    from: sender,
    to: recipient,
    value: ethers.utils.parseEther(amount.toString()), 
  });

  // Fetch Transaction
  await tx.wait(); // Wait for the transaction to be mined
  console.log(tx);
};


main();