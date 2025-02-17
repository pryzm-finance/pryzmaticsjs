import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { SwapType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzm/amm/v1/operations";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let simulation = await pryzmaticsClient.pryzmatics.tradeSimulation({
        amount: "100000",
        steps: [],
        swapType: SwapType.SWAP_TYPE_GIVEN_IN,
        tokenIn: "catom",
        tokenOut: "p:atom:30Jun2024"
    })
    console.log(simulation)

    simulation = await pryzmaticsClient.pryzmatics.tradeSimulation({
        amount: "100000",
        swapType: SwapType.SWAP_TYPE_GIVEN_IN,
        tokenIn: "catom",
        tokenOut: "p:atom:30Jun2024",
        steps: [{
            batchSwap: {
                steps: [{
                    poolId: 0n,
                    tokenIn: "catom",
                    tokenOut: "p:atom:30Jun2024"
                }]
            }
        }]
    })
    console.log(simulation)
}

main().catch(console.error)