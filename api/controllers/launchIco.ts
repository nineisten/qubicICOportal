interface Distribution {
    address:string;
    percentage:number;
}
interface SalePhase {
    price:number,
    phaseSaleVolume:number
}
interface TransferShareManagementRights{
    numberOfShares:number,
    newManagementContractIndex:number;
}
interface LaunchIco {
    tokenName:string,
    tokenIssuer:string,
    startEpoch:number,
    tokenMaxSupply:number,
    tokenPrice:number,
    phases:{
        phase1:SalePhase,
        phase2:SalePhase,
        phase3:SalePhase,
    }
    distributions:Distribution[],
    transferRights:TransferShareManagementRights
}


export interface IcoProps extends LaunchIco{}
export default function launchIco(props:IcoProps){
const {
    tokenName,
    tokenIssuer,
    startEpoch,
    tokenMaxSupply,
    tokenPrice,
    phases,
    distributions,
    transferRights
} = props
        transferRights.numberOfShares = 
        phases.phase1.phaseSaleVolume + 
        phases.phase2.phaseSaleVolume + 
        phases.phase3.phaseSaleVolume;
        transferRights.newManagementContractIndex = 18

   
        console.log(
            tokenName,
            tokenIssuer,
            startEpoch,
            tokenMaxSupply,
            tokenPrice,
            distributions,
            transferRights)



}
//struct TransferShareManagementRights_input
//   {
//        Asset asset;
//      sint64 numberOfShares;
//        uint32 newManagingContractIndex;
 //   };
 //   struct TransferShareManagementRights_output
 //   {
 //       sint64 transferredNumberOfShares;
//    };


//Token name:
//Token Issuer:
//Distribution Address1:
//Distribution Address2:
//... ... ...
//Distribution Address10:
//Percent1:
//Percent2:
//Percent3:
//... ... ...
//Percent10:
//Price1:
//Price2:
//Price3:
//SaleAmountForPhase1:
//SaleAmountForPhase2:
//SaleAmountForPhase3:
//StartEpoch(It should be more than current epoch):