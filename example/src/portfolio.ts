import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const resp = (await pryzmaticsClient.pryzmatics.portfolio({
        address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2eudxks2",
    }))

    // all wallet tokens including badge and unbonding tokens (u:denom)
    resp.wallet_tokens
    // this is undefined in case of badge or unbonding tokens. we do not show such tokens (PortfolioTokenSDKType) in portfolio wallet section
    resp.wallet_tokens[0].token // of type TokenSDKType

    resp.y_stakings
    resp.y_launch_stakings
    resp.p_gov_staked_tokens
    resp.staking_delegations
    resp.staking_unbondings
    resp.incentives_bonds
    resp.incentives_unbondings
    resp.alliance_delegations
    resp.alliance_unbondings

    // unbonding tokens appear here too; here they have their token field (TokenSDKType) set as their underlying token
    resp.icstaking_unbondings
    resp.icstaking_unbondings[0].token.token // of type TokenSDKType

    resp.wallet_tokens_value_in_stable_coin_terms
    resp.y_stakings_value_in_stable_coin_terms
    resp.y_launch_stakings_value_in_stable_coin_terms
    resp.p_gov_tokens_value_in_stable_coin_terms
    resp.staking_delegations_value_in_stable_coin_terms
    resp.staking_unbondings_value_in_stable_coin_terms
    resp.incentives_bonds_value_in_stable_coin_terms
    resp.incentives_unbondings_value_in_stable_coin_terms
    resp.alliance_delegations_value_in_stable_coin_terms
    resp.alliance_unbondings_value_in_stable_coin_terms
    resp.icstaking_unbondings_value_in_stable_coin_terms

    // sum of the values of all assets in wallet, bonded, or unbonded
    resp.total_value_in_stable_coin_terms
    // sum of the values of all assets in wallet or bonded
    resp.total_excluding_unbonding_value_in_stable_coin_terms
    // sum of the values of all bonding/delegation rewards to be claimed
    resp.rewards_value_in_stable_coin_terms
}

main().catch(console.error)