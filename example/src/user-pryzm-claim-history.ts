import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import { PRYZMATICS_ENDPOINT } from "./constants";


async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })
    const resp = await pryzmaticsClient.pryzmatics.userPryzmClaimHistory({
        address: "address",
        denom: "", // optional
    });
    console.log(resp.records);
}

main().catch(console.error)