export function mint (NFTContract, account, numberOfTokens) {
  let value = 50000000000000000 * numberOfTokens;
  let button = document.getElementById("mint-button")
  NFTContract.methods
    .safeMint(numberOfTokens)
    .send({from: account, value: value})
    .once('sending', () => {
      button.innerText = `Awating approval...`
      button.style.opacity = "38%"
    })
    .once('transactionHash', () => {
      button.innerText = `Awaiting confirmation...`
      button.style.opacity = "38%"
    })
    .on('error', () => {
      button.innerText = `Something were wrong...`
      button.style.opacity = "100%"
    })
    .then((txHash) => {
      console.log(txHash);
      button.style.opacity = "100%"
      button.innerText = `Transaction successful!`
    })
}