/// <reference types="ws" />
/// <reference types="node" />
import { ErrorCode } from "../../../types.js";
declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    target: string;
    amount: number;
    note: string;
    tag: "deposit" | "withdraw" | "charge" | "refund" | "bonus" | "other";
}, ErrorCode[] | undefined, import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
