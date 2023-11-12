# EnergyDApp - Decentralised Energy Trading

-------

## Features

<details><summary><b>Verification</b></summary>

- ID proof verification<br>
Here, prosumers and consumers will upload their ID proof. The admin would be able to view the ID proof for verification.

</details>

<details><summary><b>Energy Trading</b></summary>

Consumers search energy trading options here nearest to their address. They can choose a perfect agreement among wide variety of options according to their needs. They have the power to dislike any service once they used it.<br>
- Producer/Consumer section<br>
Producers provide details about their offerings here. Details include energy name, room address, price.
Consumers can choose the from the list available accourding to their requirements.
- Transactions<br>
All details regarding agreements and payment are listed here to aviod any sort of confusion between prosumers and consumers.<br>
 
</details>

<details><summary><b>Admin</b></summary>
The Admin mainly acts as a verifier. The admin has to approve or reject in case of a termination of energy agreement by prosumer. The admin also has the access to the ID proof document of consumers and prosumers. The admin can also change the ID proof verifier role from self to any other trusted member of the blockchain.

 </details> 
  
<hr>


## Refer to this flowchart for the full procedure:

![image](https://user-images.githubusercontent.com/74824675/134613157-bb9be3f8-540a-4dca-8aea-ebd183d88773.png)

<hr>


## Steps to setup and run this Dapp in localhost:

1. **Fork** and **clone** this repo in local machine.
2. Run `npm install` in the in the project directory. This would install all dependencies.
3. Download **Ganache** from the [official website](https://www.trufflesuite.com/ganache). Also add & setup **MetaMask** in browser. We recommend you to follow [this](https://www.trufflesuite.com/docs/truffle/getting-started/truffle-with-metamask).
4. Install `truffle` by following [this](https://www.trufflesuite.com/docs/truffle/getting-started/installation).
5. Start **Ganache**, create a `New Workspace`, and add your project by going to the `src` directory and selecting `truffle-config.js`. After this, save this workspace. This would start **Ganache** with 10 ethereum accounts, containg 100 ether each.
6. Now go to `src` directory, open a terminal and run `truffle migrate --reset`. This would compile the smart contracts and deploy the contracts in the local blockchain (Ganache).
7. Open **MetaMask** in your browser and select the network to `custom RPC`. Here, **add** a new network. For this, the RPC URL should be the URL shown in your Ganache. The chain id would be the same as the network id in Ganache.
8. Now select the first account shown in **Ganache**, and click on the `key` icon. This would bring up the private key for the account. Copy this private key. Now go to *MetaMask* (the network should be the custom network you just created), and click on `import account`. Paste the previously copied private key and and click on *import*.
9. MetaMask now should be showing the address of the first *Ganache* account with 100 ether in it. This is your *Verifier/Admin* account. The one who deploys the contracts in always the *admin*.
10. Run `npm start` in the main project directory. This would start the frontend.

-------

## Technologies used: (Development)
1. **Ethereum Blockchain**<br>
2. **IPFS**<br>
3. Web browser extension **Metamask** (recommended) or Nifty wallet.<br>
4. **Truffle**<br>
5. **React** (Html5, Css3, Bootstrap v5.1)<br>
6. **Node.js** (web3.js)<br>
7. **Ganache**<br>



