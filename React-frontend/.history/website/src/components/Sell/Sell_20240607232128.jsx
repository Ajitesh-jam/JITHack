async function sell(username,price) {
   //check if the skin is unique by comparing metadata
   //if skins unique

    // Call the buy function in the smart contract
    const contract = await GanacheContract();
    const accounts = await connectWalletToLocalGanache();
   
    const gas = await contract.methods
      .buySkin(index, username)
      .estimateGas({ from: accounts[0], value: price });

    const transaction = await contract.methods
      .buySkin(index, username)
      .send({ from: accounts[0], value: price, gas: gas });
    console.log(
      "Successfully buyed skin ,Transaction Hash: ",
      transaction.transactionHash
    );
  }