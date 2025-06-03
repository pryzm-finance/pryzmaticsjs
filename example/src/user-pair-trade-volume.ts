import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { OperationType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/trade/user_trade_history";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const prices = (await pryzmaticsClient.pryzmatics.userPairTradeVolume({
        address: "",
        tokenInDenom: `ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65`,
        tokenOutDenom: `upryzm`,
        // from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`, optional
        // to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        includeProxyTrades: false,
        operationTypes: [
            OperationType.OPERATION_TYPE_BATCH_SWAP,
            OperationType.OPERATION_TYPE_SINGLE_SWAP,
            OperationType.OPERATION_TYPE_ORDER
        ],
        orderByVolumeAsc: false,
        pagination: undefined,
    })).user_trade_volumes
    console.log(prices)
}

main().catch(console.error)