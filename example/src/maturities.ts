import { fetchAll } from "@pryzm-finance/pryzmaticsjs/lib";
import * as console from "console";
import { PRYZMATICS_ENDPOINT, PRYZMATICS_TESTNET_ENDPOINT } from "./constants";
import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import {
    MaturityOrderByProperty
} from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/database/maturity/maturity";
import {
    FlowPositionPairOrderByProperty
} from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/database/flowtrade/flow_position_pair";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_TESTNET_ENDPOINT })

    let maturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
        const result = (await pryzmaticsClient.pryzmatics.maturityAll({
            assetId: "eth",
            active: "true",
            orderBy: {
                property: MaturityOrderByProperty.ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME,
                descending: false
            },
            pagination: pageRequest
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    }/*, {
        countTotal: false,
        key: new Uint8Array(),
        offset: 0n,
        reverse: false,
        limit: 3n
    }*/)
    console.log(maturities)

    maturities = await fetchAll(pryzmaticsClient, async (client, pageRequest) => {
        const result = (await pryzmaticsClient.pryzmatics.maturityAll({
            assetId: "",
            active: "",
            orderBy: {
                property: MaturityOrderByProperty.ORDER_BY_PROPERTY_MATURITY_EXPIRATION_TIME,
                descending: true
            },
            pagination: pageRequest
        }))
        console.log(result)
        return [result.pagination.next_key, result.maturities]
    })
    console.log(maturities)

    console.log(maturities[0].p_roi)
    console.log(maturities[0].y_roi)
    console.log(maturities[0].roi) // use y_roi instead
}

main().catch(console.error)