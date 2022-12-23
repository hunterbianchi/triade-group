import { SHA256 } from 'crypto-js'

const EC = require('elliptic').ec
const ec = new EC('secp256k1')

type ObjectType = {
    owner: string;
    businessWallet: string;
    businessName: string;
    businessAddress: any | undefined | null;
}

export function opCodeToObject(opCode: string){

    // 8-176-176-2-1~99-

    const protocol64 = opCode.substring(0, 8)
    const protocol = Buffer.from(protocol64, 'base64').toString('ascii')
    
   

    switch (protocol) {

        case 'TAD-20':
            
            const owner64 = opCode.substring(9, 185)
            const owner = Buffer.from(owner64, 'base64').toString('ascii')
        
            const businessWallet64 = opCode.substring(186, 362)
            const businessWallet = Buffer.from(businessWallet64, 'base64').toString('ascii')
            
            const physical64 = opCode.substring(363, 365)
            const physical = Buffer.from(physical64, 'base64').toString('ascii')

            const businessNameLength = opCode.substring(366, 368)
            const businessName64 = opCode.substring(369, eval(businessNameLength) + 369)
            const businessName = Buffer.from(businessName64, 'base64').toString('ascii')


            console.log("owner "+owner)
            console.log("businessWallet "+businessWallet)
            console.log("physical "+physical)
            console.log("businessName "+businessName)


            if(physical==="00"){

            }else if(physical==="01"){

            }
        
            
            break;
    
        default:
            break;
    }
}


export function objectToOpCode(object: ObjectType, protocol: string){

    // protocol TAD-TT, TAD-TA, TAD-TD, TAD-AT, TAD-AA, TAD-AD, TAD-DT, TAD-DA, TAD-DD, 


    const protocol64 = Buffer.from(protocol).toString('base64')
    
    const owner64 = Buffer.from(object.owner).toString('base64') //176
    const businessWallet64 = Buffer.from(object.businessWallet).toString('base64') //176
    const businessName64 = Buffer.from(object.businessName).toString('base64')
    
    const businessName64Length = String(businessName64.length).padStart(2, '0')
    

    if(object.businessAddress){

        return `${protocol64}${owner64}${businessWallet64}01${businessName64Length}${businessName64}`

    }else{
        return `${protocol64}${owner64}${businessWallet64}00${businessName64Length}${businessName64}`
    }   

}