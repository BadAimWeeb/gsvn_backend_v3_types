/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<void, {
    pmid: number;
    remotePMID: string | undefined;
    amount: number;
    status: "pending" | "success" | "failed";
    reason: string | undefined;
    createdAt: number;
    updatedAt: number;
    type: string;
    input: any;
    instruction: any;
    output: any;
}[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
