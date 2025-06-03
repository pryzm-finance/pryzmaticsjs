import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { TimeResolutionType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/common/time_resolution";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let prices = (await pryzmaticsClient.pryzmatics.historicalPrice({
        denom: `cluna`,
        quote: "",
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 5,
    })).historical_prices
    console.log(prices)

    prices = (await pryzmaticsClient.pryzmatics.historicalPrice({
        denom: `cluna`,
        quote: 'catom',
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 5,
    })).historical_prices
    console.log(prices)

    const supportedDenoms = (await pryzmaticsClient.pryzmatics.config()).config.supported_denoms_for_external_price
    prices = (await pryzmaticsClient.pryzmatics.historicalPrice({
        denom: supportedDenoms[0],
        quote: '',
        from: `${Date.parse('2023-07-27 11:59:33.619 GMT')}`,
        to: `${Date.parse('2023-07-27 12:10:04.045 GMT')}`,
        timeResolutionType: TimeResolutionType.TIME_RESOLUTION_TYPE_MINUTE,
        timeResolutionValue: 5,
        useExternalPriceSource: true
    })).historical_prices
    console.log(prices)
}

main().catch(console.error)