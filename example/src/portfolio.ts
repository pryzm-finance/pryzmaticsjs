import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const portfolioTokens = (await pryzmaticsClient.pryzmatics.portfolio({
        address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2eudxks2",
    })).tokens
    console.log(portfolioTokens)
}

main().catch(console.error)