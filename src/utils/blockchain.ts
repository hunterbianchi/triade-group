import { SHA256 } from 'crypto-js'
const EC = require('elliptic').ec
const ec = new EC('secp256k1')


export class Block {

    timestamp: string;
    contracts: any;
    previousHash: string;
    nonce: number;
    hash: string;

    constructor(timestamp: string, contracts: any, previousHash: string = '', nonce: number = 0, hash: string) {
        this.timestamp = timestamp;
        this.contracts = contracts;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.hash = hash;
    }

    hasValidContracts(): boolean {
        for (const contract of this.contracts) {
            if (!contract.isValid()) {
                return false;
            }
        }
        return true;
    }

    checkConsensus(target: number): void {
        while (this.hash.substring(0, target) !== Array(target + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

    }

    calculateHash() {
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.contracts) + this.nonce).toString()
    }

}

export class BlockChain {

    chain: Array<any>
    target: number
    pendingContracts: Array<any>
    fee: number
    nodes: Array<any>

    constructor(
    ) {
        this.chain = [this.createGenesisBlock()]
        this.target = this.getDifficulty()
        this.pendingContracts = []
        this.fee = 50
        this.nodes = ["https://triade-api.vercel.app/api/chain"]
    }

    calculateTargetAndDifficulty(previousHash: string): number {
        // Set the maximum possible value for the target as in the Bitcoin model
        const maxTarget = '00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        
        // Set the initial target to the maximum possible value
        let target = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        
        // Set the initial difficulty to 1
        let difficulty = 1
        
        // Calculate the target and difficulty until the previous hash is less than the target
        // and the target is less than or equal to the maximum possible value
        while (previousHash >= target || target > maxTarget) {
          // Increase the difficulty by 1
          difficulty++
          
          // Calculate the new target by dividing the initial target by the difficulty
          target = (parseInt(target) / difficulty).toString(16)
        }
        
        // Return the calculated target and difficulty
        return difficulty
    }

    getDifficulty(): number {
        let currentDifficulty: number = 1

        /* if (this.chain.length > 2015) {
            const latest_block = this.getLatestBlock();
            const twoweeks = 1209600;
            const period = (latest_block.timestamp - under2016_block.timestamp);
            const calc = period%twoweeks;
            const under2016_block = this.chain[this.chain.length - 2016];

            
            if(calc == 0){
                const ttltime = (latest_block.timestamp - under2016_block.timestamp);

                console.log(`bloco: ${this.chain.length-1}`)
            }
        } */
        return currentDifficulty;
    }

    addContract(contract: any) {
        if (!contract.fromAddress) {
            throw new Error('Contract must include From and To address')
        }

        if (this.getBalanceOfAddress(contract.fromAddress) >= contract.amount) {

            if (contract.isValid()) {
                console.log(`
        _____________________________________
        |       transactionsisvalid?:       |
         |       ${contract.isValid()}                        |
           |___________________________________|
                
                `)
            }
            if (!contract.isValid()) {
                throw new Error('Cannot add invalid contract to the chain');
            }
            this.pendingContracts.push(contract);
        } else { throw new Error('No founds') }
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    upgradeChain(newChain: Array<any>): void {

        if (this.chain[0].hash === newChain[0].hash) {

            const myChainLength = this.chain.length
            const newChainLength = newChain.length

            for (let i = myChainLength; i < newChainLength; i++) {
                const myBlock = this.chain[i - 1]
                const newBlock = newChain[i]
                if (newBlock.previousHash === myBlock.hash) {
                    this.chain.push(newBlock)

                }

            }
        }

    }

    getBalanceOfAddress(address: string) {
        let balance: number = 0;
        for (const block of this.chain) {
            for (const contract of block.contracts) {
                if (contract.fromAddress === address) {
                    balance -= contract.amount;
                }
                if (contract.toAddress === address) {
                    balance += contract.amount;
                }
            }
        }
        return balance
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (!currentBlock.hasValidContracts()) {
                return false;
            }
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                console.error("hash not equal: " + JSON.stringify(currentBlock));
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.calculateHash()) {
                console.error("previous hash not right: " + JSON.stringify(currentBlock));
                return false;
            }
            return true;
        }

    }

    // 2022-12-19T21:12:48.585Z

    createGenesisBlock() {
        const newBlock: any = {
            timestamp: new Date('2022-08-27T00:00:00.000Z').getTime(),
            previousHash: "",
            contracts: ["TRÍADE-Blockchain"],
            nonce: 0
        }
        newBlock.hash = SHA256(newBlock.timestamp + newBlock.previousHash + JSON.stringify(newBlock.contracts) + newBlock.nonce).toString()
        return new Block(newBlock.timestamp, newBlock.contracts, undefined, newBlock.nonce, newBlock.hash);
    }

}

export class Contract {

    fromAddress: string | null;
    toAddress: string;
    amount: number;
    payload: any | null;
    signature: string;


    constructor(fromAddress: string, toAddress: string, amount: number, payload: any = null, signature: string) {

        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.payload = payload;
        this.signature = signature;

    }

    calculateHash(): string {
        if(this.payload){
            const newDataHash = SHA256(`${this.payload.data.businessRating}${this.payload.data.businessWallet}${this.payload.data.businessName}${this.payload.data.businessImage}${this.payload.data.businessService}${this.payload.data.businessProducts?JSON.stringify(this.payload.data.businessProducts):null}${this.payload.data.businessAddress?this.payload.data.addressHash:null}`).toString()
            
            if(newDataHash === this.payload.data.dataHash){
                return SHA256(`${this.payload.header.timestamp}${this.payload.header.owner}${this.payload.header.toAddress}${this.payload.header.amount}${newDataHash}`).toString()
            }
            
        }
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString()
    }


    isValid(): boolean {
        if (!this.fromAddress === null) return true

        if (!this.signature || this.signature.length === 0) {
            throw new Error('No signature in this contract')
        }

        const key = ec.keyFromPublic(this.fromAddress, 'hex')
        return key.verify(this.calculateHash(), this.signature)
    }
}

// const constract = new Contract()

/* const block = new Block(new Date().getTime(), pendingDatas, chain[chain.length - 1].hash)

block.mineBlock(chainHeader.target)

const alicePrivateKey = '815eeac8fcb9aee5d097ad6cedc3d2310c1c258d67b50bda9377c1badddd33bc'
const alicePublicKey = '04a9d3154a24b2aebb23f30f920ded627e131e0a3eb2624c4506842f6299ed1b29a51bd772ca0208c638c37224409e9d51b476989995482ec0f5fc4a93d3c034e0'


console.log(block)
 */

/* 
// wallet:
const myPrivateKey = '1c258d67b50bda9377c1badddd33bc815eeac8fcb9aee5d097ad6cedc3d2310c';
const myPublicKey = ec.keyFromPrivate(myPrivateKey);
const myWalletAddress = myPublicKey.getPublic('hex');
const alicePrivateKey = '815eeac8fcb9aee5d097ad6cedc3d2310c1c258d67b50bda9377c1badddd33bc'
const alicePublicKey = '04a9d3154a24b2aebb23f30f920ded627e131e0a3eb2624c4506842f6299ed1b29a51bd772ca0208c638c37224409e9d51b476989995482ec0f5fc4a93d3c034e0'
const triade = new BlockChain();
const tx1 = new Transaction(myWalletAddress, alicePublicKey, 60);
tx1.signTransaction(myPrivateKey);
triade.addTransaction(tx1);

// Tunelling transactions and asingnment to full nodes
triade.minePendingTransactions(myWalletAddress);
console.log("Balance of Alice's account is: ", triade.getBalanceOfAddress(alicePublicKey));
const tx2 = new Transaction(alicePublicKey, myWalletAddress, 20);
tx2.signTransaction(alicePrivateKey);
triade.minePendingTransactions(myWalletAddress);
console.log("Balance of Alice's account is: ", triade.getBalanceOfAddress(alicePublicKey));
const tx3 = new Transaction(myWalletAddress, alicePublicKey, 60);
tx3.signTransaction(myPrivateKey);
triade.addTransaction(tx3);
triade.minePendingTransactions(myWalletAddress);
console.log("Balance of Alice's account is: ", triade.getBalanceOfAddress(alicePublicKey));
const tx4 = new Transaction(alicePublicKey, myWalletAddress, 20);
tx4.signTransaction(alicePrivateKey);
triade.addTransaction(tx4);
triade.minePendingTransactions(myWalletAddress);
console.log("Balance of Alice's account is: ", triade.getBalanceOfAddress(alicePublicKey)); */

