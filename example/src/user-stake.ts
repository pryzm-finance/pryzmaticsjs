import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let userStakes = (await pryzmaticsClient.pryzmatics.userStakes({denom: "", address: "pryzm156pcgs3faegfte0vuaykr9az3hh9kx2eudxks2"})).user_stakes
    console.log(userStakes)

    userStakes = (await pryzmaticsClient.pryzmatics.userStakes({denom: "y:eth:30Jun2024", address: ""})).user_stakes
    console.log(userStakes)

    userStakes = (await pryzmaticsClient.pryzmatics.userStakes({denom: "", address: ""})).user_stakes
    console.log(userStakes)

}

main().catch(console.error)