// const bs58 = require('bs58')
import bs58 from 'bs58'
/* 
export function bs58Decode(bs58Encoded){
    const value = bs58.decode(bs58Encoded)
    return Buffer.from(value).toString('hex')
}

export function bs58Encode(bs58dEcoded){
    const value = bs58.encode(bs58Encoded)
    return Buffer.from(value).toString('hex')
} */

export function decToHexString(decimal:number){
    return  '0x'+decimal.toString(16)
}

export function hexStringToDec(hexString: string){
    return parseInt(hexString, 16)
}

const targetHex = "5a6f3daa8c79a800000000"

export function isHashLowerThanTarget(hash: string, target: string){
    return hexStringToDec(hash)<hexStringToDec(target)
}