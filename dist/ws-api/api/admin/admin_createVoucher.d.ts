/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    code: string;
    data: {
        for: "robux";
        discount: number;
        discountType: "percent";
        condition: ({
            minAmount: number;
            type: "minAmount";
        } | {
            maxAmount: number;
            type: "maxAmount";
        })[];
        discountMax?: number | undefined;
    };
    amount: number;
    expires: number;
}, boolean, import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
