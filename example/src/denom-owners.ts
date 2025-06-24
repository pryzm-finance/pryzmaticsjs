import * as console from "console";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const client = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const resp = (await client.pryzmatics.denomOwners({
        denom: "upryzm",
        orderByBalanceDesc: true,
        pagination: {
            // limit: 0n, set to zero if only getting total count is enough
            countTotal: true
        },
    }))
    console.log(resp.denom_owners)
    console.log(resp.pagination.total)
}

main().catch(console.error)