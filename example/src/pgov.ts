import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { ProposalOrderByProperty } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/database/pgov/proposal";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const proposals = (await pryzmaticsClient.pryzmatics.pGovProposals({
        assetId: "",
        orderBy: {property: ProposalOrderByProperty.ORDER_BY_PROPERTY_END_TIME, descending: true},
        pagination: {limit: 100n}
    })).proposals
    console.log(proposals)
}

main().catch(console.error)