import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_TESTNET_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_TESTNET_ENDPOINT })

    const supplies = (await pryzmaticsClient.pryzmatics.historicalBankSupply({
        denom: `cluna`,
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_HOUR, // only supported resolutions are hour and day
        timeResolutionValue: 1
    })).historical_supplies
    console.log(supplies)
}

main().catch(console.error)