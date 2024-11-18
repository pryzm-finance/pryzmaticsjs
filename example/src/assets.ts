import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })
    const assets = (await pryzmaticsClient.pryzmatics.assets({})).assets
    console.log(assets)
}

main().catch(console.error)