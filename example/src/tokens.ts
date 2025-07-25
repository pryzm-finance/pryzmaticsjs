import { createPryzmaticsClient, fetchAll, PryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";
import { TokenType } from "@pryzm-finance/pryzmaticsjs/lib/codegen/pryzmatics/pool/token";
import { PageRequest } from "@pryzm-finance/pryzmaticsjs/lib/codegen/cosmos/base/query/v1beta1/pagination";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let tokens = await fetchAll(pryzmaticsClient, async (client: PryzmaticsClient, request: PageRequest) => {
        const result = await pryzmaticsClient.pryzmatics.tokens({
            tokenType: TokenType.TOKEN_TYPE_ANY,
            tokenIn: "",
            pagination: request
        })
        return [result.pagination.next_key, result.tokens]
    })
    console.log(tokens)

    tokens = (await pryzmaticsClient.pryzmatics.tokens({
        tokenType: TokenType.TOKEN_TYPE_ANY,
        tokenIn: ""
    })).tokens
    console.log(tokens)

    tokens = (await pryzmaticsClient.pryzmatics.tokens({
        tokenType: TokenType.TOKEN_TYPE_P,
        tokenIn: ""
    })).tokens
    console.log(tokens)
}

main().catch(console.error)