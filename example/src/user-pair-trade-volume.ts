import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { OperationType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/trade/user_trade_history";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const prices = (await pryzmaticsClient.pryzmatics.userPairTradeVolume({
        address: "",
        tokenIn: `ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65`,
        tokenOut: `upryzm`,
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

    //performance limit rule: if you provide from or to, you must provide both token-in and token-out
    //scenario 1: provide full address only -> get total trade volume for a user since the beginning for all pairs <*, *>
    //scenario 2: provide full address and token-in -> get total trade volume for a user since the beginning for all pairs like <token-in, *>
    //scenario 3: provide full address and token-in and token-out -> get total trade volume for a user since the beginning for the pair <token-in, token-out>
    //scenario 4: provide full address and token-in and token-out and from|to -> get total trade volume for a user since the beginning for the pair <token-in, token-out> for interval <from, to>
    //scenario 5: empty address -> get leaderboard for all pairs from the beginning
    //scenario 6: empty address and token-in and/or token-out -> get leaderboard for selected pair(s) from the beginning
    //scenario 7: empty address and set (from or to or both) and (token-in and/or token-out) -> get leaderboard for selected pair(s) from the beginning for the interval
    //scenario 8: empty address and set (from or to or both)  -> not supported
}

main().catch(console.error)