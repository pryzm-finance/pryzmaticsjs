import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_MAINNET_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_MAINNET_ENDPOINT })

    const token = (await pryzmaticsClient.pryzmatics.token({
        denom: "c:uosmo",
        tokenIn: ""
    })).token

    console.log(token.underlying_token_denom)
    console.log(token.underlying_token_terms_price)

    console.log(token.metrics.price_change_percentage_1h)
    console.log(token.metrics.price_change_percentage_24h)
    console.log(token.metrics.price_change_percentage_7d)
    console.log(token.metrics.price_change_percentage_30d)
    console.log(token.metrics.trade_volume_1h)
    console.log(token.metrics.trade_volume_24h)
    console.log(token.metrics.trade_volume_7d)
    console.log(token.metrics.trade_volume_30d)
    console.log(token.metrics.price_52w_low)
    console.log(token.metrics.price_52w_high)
    console.log(token.metrics.yield_change_percentage_24h)
    console.log(token.metrics.yield_change_percentage_7d)
    console.log(token.metrics.yield_change_percentage_30d)
    console.log(token.metrics.price_underlying_terms_change_percentage_1h)
    console.log(token.metrics.price_underlying_terms_change_percentage_24h)
    console.log(token.metrics.price_underlying_terms_change_percentage_7d)
    console.log(token.metrics.price_underlying_terms_change_percentage_30d)

    console.log(token.yield.p_roi)
}

main().catch(console.error)