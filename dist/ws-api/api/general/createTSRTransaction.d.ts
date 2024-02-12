/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    amount: number;
}, [pmid: number, instruction: {
    account: string;
    amount: number;
    message: string;
    timeout: number;
    localID: string;
}], import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
