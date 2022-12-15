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

    const key = ec.genKeyPair()

    if(privateKey){
        return ec.keyFromPrivate(privateKey).getPublic('hex')
    }else{
        // return ec.keyFromPrivate(key.getPrivate('hex')).getPublic('hex')
        return key.getPrivate('hex')
    }
}