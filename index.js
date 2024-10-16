const Web3 = require('web3');
const web3 = new Web3(window.ethereum); 
const contractABI = 
    // Replace this with the actual ABI of your contract
    [
        {
            "inputs": [],
            "name": "butToken",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_Wallet",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "val",
                    "type": "uint256"
                }
            ],
            "name": "show",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
;

const contractAddress = '0x43D218197E8c5FBC0527769821503660861c7045';
const myContract = new web3.eth.Contract(contractABI, contractAddress);

async function buyToken() {
    const accounts = await web3.eth.requestAccounts();
    const userAccount = accounts[0];

    const amountInEther = '1.0'; // 0.1 Ether
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    try {
       
        const receipt = await myContract.methods.butToken().send({
            from: userAccount,
            value: amountInWei 
        });

        console.log('Transaction successful:', receipt);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}


