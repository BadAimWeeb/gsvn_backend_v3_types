/// <reference types="ws" />
/// <reference types="node" />
declare const func: import("@badaimweeb/js-dtsocket").Procedure<void, {
    assets: string[];
    cases: ({
        id: number;
        asset: number;
        name: string;
        price: number;
        contains: {
            name: string;
            asset: number;
            rarity: number;
        }[];
        caseImage?: undefined;
    } | {
        id: number;
        caseImage: number;
        name: string;
        price: number;
        contains: {
            name: string;
            asset: number;
            rarity: number;
        }[];
        asset?: undefined;
    })[];
}, import("@badaimweeb/js-dtsocket").ServerContext<import("../../../types.js").GlobalState, import("../../../types.js").LocalState, import("../../../types.js").EventTable, import("@badaimweeb/js-protov2d").Session<import("ws").WebSocket & {
    req: import("http").IncomingMessage;
}>>>;
export default func;
