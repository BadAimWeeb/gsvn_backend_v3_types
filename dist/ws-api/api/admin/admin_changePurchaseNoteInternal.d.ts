/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<{
    pcid: number;
    note: string;
}, import("mongodb").WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    note?: string | undefined;
    internalNote?: string | undefined;
    createdAt: number;
    updatedAt: number;
} & ({
    type: "robux";
    data: {
        amountTaxed: number;
        amountUntaxed: number;
        gamepassID: string;
        isSVV: boolean;
    };
    partialProcessedData?: null | undefined;
} | {
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})> | null, import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
