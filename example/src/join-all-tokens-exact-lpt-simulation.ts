import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const simulation = await pryzmaticsClient.pryzmatics.joinAllTokensExactLptSimulation({
        poolId: 0n,
        lptOutAmount: "100"
    })
    console.log(simulation)
}

main().catch(console.error)