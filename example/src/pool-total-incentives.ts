import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const incentives = (await pryzmaticsClient.pryzmatics.poolTotalIncentives({
        bondDenom: "" // optional
        // from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`, optional
    })).pool_total_incentives
    console.log(incentives)
}

main().catch(console.error)