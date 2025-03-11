import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { OperationType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/trade/user_trade_history";
import { createPryzmaticsClient, PryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import { PageRequest } from "@pryzm-finance/pryzmaticsjs/lib/codegen/cosmos/base/query/v1beta1/pagination";
import { fetchAll } from "@pryzm-finance/pryzmaticsjs/lib";
import {
    UserTradeHistoryOrderByProperty, UserTradeVolumeOrderByProperty
} from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/database/trade/user_trade_history";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let history = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeHistory({
            operationTypes: [OperationType.OPERATION_TYPE_BATCH_SWAP, OperationType.OPERATION_TYPE_NEXUS_BATCH, OperationType.OPERATION_TYPE_SINGLE_SWAP],
            address: "",
            firstToken: "",
            secondToken: "",
            orderBy: {
                property: UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request,
            includeProxyTrades: false,
            minVolume: "123"
        })
        return [result.pagination.next_key, result.user_trade_history_records]
    })
    console.log(JSON.stringify(history))


    history = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeHistory({
            operationTypes: [OperationType.OPERATION_TYPE_BATCH_SWAP, OperationType.OPERATION_TYPE_NEXUS_BATCH, OperationType.OPERATION_TYPE_SINGLE_SWAP],
            address: "",
            firstToken: "c:uluna",
            secondToken: "upryzm",
            orderBy: {
                property: UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request,
            includeProxyTrades: false,
            minVolume: undefined
        })
        return [result.pagination.next_key, result.user_trade_history_records]
    })
    console.log(JSON.stringify(history))

    let volumes = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeVolume({
            address: "",
            intervalHours: 24n,
            operationTypes: [
                OperationType.OPERATION_TYPE_BATCH_SWAP,
                OperationType.OPERATION_TYPE_NEXUS_BATCH,
                OperationType.OPERATION_TYPE_SINGLE_SWAP,
                OperationType.OPERATION_TYPE_ORDER
            ],
            orderBy: {
                property: UserTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME,
                descending: true
            },
            pagination: request,
            includeProxyTrades: false,
        })
        return [result.pagination.next_key, result.user_trade_volume_records]
    })
    console.log(JSON.stringify(volumes))
    return

    history = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.userTradeHistory({
            address: "pryzm1pl9wyl87pzdzeffpg5deknd3gymq56p2g6gjpk",
            operationTypes: [OperationType.OPERATION_TYPE_BATCH_SWAP, OperationType.OPERATION_TYPE_NEXUS_BATCH, OperationType.OPERATION_TYPE_SINGLE_SWAP],
            firstToken: "c:uluna",
            secondToken: "upryzm",
            orderBy: {
                property: UserTradeHistoryOrderByProperty.ORDER_BY_PROPERTY_BLOCK_TIME,
                descending: true
            },
            pagination: request,
            includeProxyTrades: false,
            minVolume: undefined
        })
        return [result.pagination.next_key, result.user_trade_history_records]
    })
    console.log(JSON.stringify(history))
}

main().catch(console.error)
