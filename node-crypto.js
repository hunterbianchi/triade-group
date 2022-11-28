import {generateKeyPairSync} from "crypto";

function d () {

    return generateKeyPairSync('ec', {
    namedCurve: 'secp256k1',
    publicKeyEncoding: {
        type: 'spki',
        format: 'der'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'der'
    }})
}

const keys = d()

console.log(keys.privateKey.toString('hex'))
console.log(keys.publicKey.toString('hex'))