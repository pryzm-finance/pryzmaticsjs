import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    const validators = (await pryzmaticsClient.pryzmatics.validators({})).validators
    console.log(validators)

    const validator = (await pryzmaticsClient.pryzmatics.validator({ operatorAddress: validators[0].operator_address })).validator
    console.log(validator)
}

main().catch(console.error)