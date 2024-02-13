/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<void, Pick<import("mongodb").WithId<{
    txid: number;
    target: string;
    oldBalance: number;
    change: number;
    newBalance: number;
    tag: "deposit" | "withdraw" | "charge" | "refund" | "bonus" | "other";
    extraData: {
        [key: string]: any;
        purchasePointer?: number | undefined;
        depositPointer?: number | undefined;
        gsvnUsernameMigration?: string | undefined;
    };
    note: string;
    createdAt: number;
}>, "txid" | "createdAt" | "note" | "oldBalance" | "change" | "newBalance" | "tag" | "extraData">[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
