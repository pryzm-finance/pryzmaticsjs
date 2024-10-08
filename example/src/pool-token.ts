import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({restEndpoint: PRYZMATICS_ENDPOINT})

    const token = (await pryzmaticsClient.pryzmatics.poolToken({
        poolId: 0n,
        denom: "p:atom:30Jun2024"
    })).pool_token
    console.log(token)
}

main().catch(console.error)