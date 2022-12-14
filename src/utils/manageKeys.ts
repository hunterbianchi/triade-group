const EC = require('elliptic').ec

const ec = new EC('secp256k1')

export function createKeyPair(){

    const key = ec.genKeyPair()

    return {
        privateKey: key.getPrivate('hex'),
        publicKey: key.getPublic('hex')
    }
}

export function getPublicKey(privateKey: string){
    
    return ec.keyFromPrivate(privateKey).getPublic('hex')
    
}