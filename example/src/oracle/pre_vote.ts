import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "../constants";

async function main() {
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT })

    let preVotes = (await pryzmaticsClient.pryzmatics.preVotes({
        validator: "",
        feeder: "",
    })).preVotes
    console.log(preVotes)

    preVotes = (await pryzmaticsClient.pryzmatics.preVotes({
        validator: "pryzmvaloper156pcgs3faegfte0vuaykr9az3hh9kx2ezc9cl3",
        feeder: "",
        fromBlockHeight: "458",
        toBlockHeight: "460"
    })).preVotes
    console.log(preVotes)
}

main().catch(console.error)