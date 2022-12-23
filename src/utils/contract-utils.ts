import { SHA256 } from 'crypto-js'
const EC = require('elliptic').ec
const ec = new EC('secp256k1')


export class Contract {

    fromAddress: string | null;
    toAddress: string;
    amount: number;
    opCode: string | null;
    signature: string;


    constructor( fromAddress: string, toAddress: string , amount: number, opCode: string, signature: string) {

        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.opCode = opCode;
        this.signature = signature;

    }

    calculateHash(): string {
        if(this.opCode){
            return SHA256(this.opCode).toString()
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
