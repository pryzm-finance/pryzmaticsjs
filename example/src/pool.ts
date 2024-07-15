import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const pool = await pryzmaticsClient.pryzmatics.pool({
        poolId: 2n
    })
    console.log(pool.pool)
    console.log(pool.zero_impact_join_capabilities)
}

main().catch(console.error)