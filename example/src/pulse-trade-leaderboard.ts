import { createPryzmaticsClient, fetchAll, PryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import {
    QueryUserPulseTradeVolumeRequest
} from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/server/trade/user_pulse_trade_volume";
import { PageRequest } from "@pryzm-finance/pryzmaticsjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import {
    UserPulseTradeVolumeSDKType
} from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/trade/user_pulse_trade_volume";
import {
    UserPulseTradeVolumeOrderByProperty
} from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/database/trade/user_pulse_trade_volume";

async function main() {
    const c = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    // list of all user pulse trade volumes
    const volumes = await getAllUserPulseTradeVolumes(c, {
        address: "",
        orderBy: {
            property: UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_TOTAL_VOLUME,
            descending: true
        }
    })
    console.log(JSON.stringify(volumes))
}

async function getAllUserPulseTradeVolumes(client: PryzmaticsClient, req: QueryUserPulseTradeVolumeRequest): Promise<UserPulseTradeVolumeSDKType[]> {
    return fetchAll(client, async (client: PryzmaticsClient, request: PageRequest) => {
        req.pagination = request
        const result = (await client.pryzmatics.userPulseTradeVolume(req))
        return [result.pagination.next_key, result.volumes]
    }, {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 5n
    })
}

main().catch(console.error)