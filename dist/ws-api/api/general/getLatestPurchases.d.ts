/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<void, {
    type: "robux" | "roblox-gamepass";
    created: number;
    username: string;
}[], import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;