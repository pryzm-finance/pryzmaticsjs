import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let price = (await pryzmaticsClient.pryzmatics.pulseTradablePairPrice({
        tokenIn: "tokenIn",
        tokenOut: "tokenOut",
        poolId: 0n, // leave zero
        whitelistedRoute: true
    })).price
    console.log(price)

    price = (await pryzmaticsClient.pryzmatics.pulseTradablePairPrice({
        tokenIn: "tokenIn",
        tokenOut: "tokenOut",
        poolId: 1n,
        whitelistedRoute: false
    })).price
    console.log(price)
}

main().catch(console.error)