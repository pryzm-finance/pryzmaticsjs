import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let intervals = (await pryzmaticsClient.pryzmatics.voteIntervals({})).intervals
    console.log(intervals)

    intervals = (await pryzmaticsClient.pryzmatics.voteIntervals({
        fromBlockHeight: "190",
        toBlockHeight: "220",
    })).intervals
    console.log(intervals)
}

main().catch(console.error)