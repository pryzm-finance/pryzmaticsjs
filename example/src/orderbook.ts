import { createPryzmaticsClient } from "@pryzm-finance/pryzmaticsjs";
import * as console from "console";
import { PRYZMATICS_ENDPOINT } from "./constants";

async function main()
{
    const pryzmaticsClient = await createPryzmaticsClient({ restEndpoint: PRYZMATICS_ENDPOINT });

    const orders = (await pryzmaticsClient.pryzmatics.orderBookOrders({
        live: true,
        owner: "",
        tokenInDenom: "",
        tokenOutDenom: ""
    })).orders;
    console.log(orders)

    const reservations = (await pryzmaticsClient.pryzmatics.orderBookReservations({})).reservations;
    console.log(reservations);
}

main().catch(console.error)