import { createPryzmaticsClient, fetchAll, PryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { PageRequest } from "@pryzm-finance/pryzmaticsjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import { ProposalOrderByProperty } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/database/gov/proposal";
import { ProposalStatus } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/gov/proposal";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // list of all proposals ordered by voting end time
    const proposals = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.proposals({
            proposer: "",
            voter: "",
            status: ProposalStatus.PROPOSAL_STATUS_ANY,
            orderBy: {
                property: ProposalOrderByProperty.ORDER_BY_PROPERTY_VOTING_END_TIME,
                descending: true
            },
            pagination: request
        })
        return [result.pagination.next_key, result.proposals]
    })
    console.log(JSON.stringify(proposals))
    console.log(proposals.length)

    const proposal = (await pryzmaticsClient.pryzmatics.proposal({ id: 0n })).proposal
    console.log(proposal)
    const proposal_msg = JSON.parse(proposal.proposal_msgs[0])
    console.log(proposal_msg)
}

main().catch(console.error)