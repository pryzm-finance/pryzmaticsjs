import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_TESTNET_ENDPOINT, PRYZMATICS_DEVNET_ENDPOINT } from "../constants";
import { PayloadModule } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/server/oracle/vote_interval_report";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_DEVNET_ENDPOINT })

    let report = (await pryzmaticsClient.pryzmatics.voteIntervalReport({
        voteIntervalCloseBlockHeight: 0n,
        validators: "",
        module: PayloadModule.PAYLOAD_MODULE_ANY,
        namespace: "",
        csv: false,
    }))
    console.log(report.vote_interval_report.validator_reports)
    return

    console.log(report.vote_interval_report.vote_interval.close_block_height)
    console.log(report.vote_interval_report.vote_interval.close_block_time)
}

main().catch(console.error)