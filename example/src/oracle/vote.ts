import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let votes = (await pryzmaticsClient.pryzmatics.votes({
        validator: "",
        feeder: "",
    })).votes
    console.log(votes)

    votes = (await pryzmaticsClient.pryzmatics.votes({
        validator: "pryzmvaloper156pcgs3faegfte0vuaykr9az3hh9kx2ezc9cl3",
        feeder: "",
        fromBlockHeight: "458",
        toBlockHeight: "460"
    })).votes
    console.log(votes)
}

main().catch(console.error)