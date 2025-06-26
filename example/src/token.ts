import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_MAINNET_ENDPOINT } from "./constants";
import { MarketCapAmino, SupplyAmino } from "../../src/codegen/pryzmatics/statistics/market_cap";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_MAINNET_ENDPOINT })

    const token = (await pryzmaticsClient.pryzmatics.token({
        denom: "c:uosmo",
        tokenIn: "",
        detailedStats: true
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

    console.log(token.yield.p_roi) // use roi instead
    console.log(token.yield.y_roi) // use roi instead
    console.log(token.yield.roi)
    console.log(token.yield.yield_to_maturity_in_underlying_terms)
    console.log(token.yield.yield_per_day_in_underlying_terms)

    console.log(token.supply)
    console.log(token.supply_stable_coin_terms)
    console.log(token.supply_fetch_time)

    console.log(token.stats)

    console.log(token.stats.supply.fully_diluted)
    console.log(token.stats.supply.circulating)
    console.log(token.stats.supply.liquid_circulating)
    console.log(token.stats.market_cap?.fully_diluted) // market_cap can be undefined if token has no price
    console.log(token.stats.market_cap?.circulating)
    console.log(token.stats.market_cap?.liquid_circulating)
    console.log(token.stats.owners_count)
    console.log(token.stats.volume_24h)
    console.log(token.stats.total_volume)
    console.log(token.stats.volume_7d)  // undefined if detailedStats is false in request
    console.log(token.stats.volume_30d) // undefined if detailedStats is false in request
}

main().catch(console.error)