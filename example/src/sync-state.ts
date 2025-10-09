import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT, PRYZMATICS_MAINNET_ENDPOINT } from "./constants";

async function main() {
    const cosmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_MAINNET_ENDPOINT})
    const syncState = (await cosmaticsClient.cosmatics.syncState()).sync_state
    console.log(syncState)
    const health = (await cosmaticsClient.cosmatics.healthCheck())
    console.log(health)
}

main().catch(console.error)