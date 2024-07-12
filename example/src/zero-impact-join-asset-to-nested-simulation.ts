import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_TESTNET_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_TESTNET_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.zeroImpactJoinAssetToNestedSimulation({
        amountIn: {
            amount: "100000",
            denom: "ibc/8F8AC9564FFE8893F0A59DA44A0809815F257037508A2D1F1EC96E48E2AAB8B7"
        },
        hostChainId: "utia",
        transferChannel: "channel-39",
        poolId: 25n
    })
    console.log(simulation)
}

main().catch(console.error)