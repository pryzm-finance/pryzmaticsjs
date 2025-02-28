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
import { QueryIcnsByAddressRequest } from "../../src/codegen/pryzmatics/server/icns/icns";

async function main() {
    const c = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let icnsRecord = (await c.pryzmatics.icnsByAddress({
        address: "pryzm_address"
    })).icns
    console.log(icnsRecord.icns)
    console.log(icnsRecord.fetch_time)

    icnsRecord = (await c.pryzmatics.icnsByName({
        icns: "icns_name"
    })).icns
    console.log(icnsRecord.address)
    console.log(icnsRecord.fetch_time)
}

main().catch(console.error)