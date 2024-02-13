/// <reference types="ws" />
/// <reference types="node" />
import { ErrorCode } from "../../../types.js";
declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    pcid: number;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
}, (Pick<{
    pcid: number;
    target: string;
    value: number;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    note?: string | undefined;
    internalNote?: string | undefined;
    createdAt: number;
    updatedAt: number;
} & {
    type: "robux";
    data: {
        amountTaxed: number;
        amountUntaxed: number;
        gamepassID: string;
        isSVV: boolean;
    };
    partialProcessedData?: null | undefined;
}, "target" | "value" | "pcid" | "createdAt" | "data" | "status" | "updatedAt" | "type" | "note" | "internalNote" | "partialProcessedData"> & {
    _id: import("bson").ObjectId;
}) | (Pick<{
    pcid: number;
    target: string;
    value: number;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    note?: string | undefined;
    internalNote?: string | undefined;
    createdAt: number;
    updatedAt: number;
} & {
    type: "roblox-gamepass";
    data: {
        game: string;
        passes: string[];
        cachedGameName: string;
        cachedGamePassesName: {
            [pass: string]: string;
        };
        passesRefundValue: {
            [pass: string]: number;
        };
        username: string;
        password: string;
        amountRobux: number;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
}, "target" | "value" | "pcid" | "createdAt" | "data" | "status" | "updatedAt" | "type" | "note" | "internalNote" | "partialProcessedData"> & {
    _id: import("bson").ObjectId;
}) | ErrorCode[] | null, import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
