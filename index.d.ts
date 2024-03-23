/// <reference types="ws" />
/// <reference types="node" />
import * as _badaimweeb_js_protov2d from '@badaimweeb/js-protov2d';
import { Session } from '@badaimweeb/js-protov2d';
import * as _badaimweeb_js_dtsocket from '@badaimweeb/js-dtsocket';
import { DTSocketServer, ServerContext } from '@badaimweeb/js-dtsocket';
import * as http from 'http';
import * as ws from 'ws';
import * as mongodb from 'mongodb';
import { Collection, WithId } from 'mongodb';
import * as ip_address from 'ip-address';

type DatabaseReturnType<T extends Collection<any>> = T extends Collection<infer U> ? WithId<U> : never;
declare const DBGachaCases: Collection<{
    caseID: number;
    price: number;
    type: string;
    name: string;
    contains: {
        name: string;
        asset: number;
        rarity: number;
    }[];
    caseImageAsset: number;
    color: number;
    assets: string[];
} & {
    algorithm: "123";
    algorithmData: {
        robux: number;
        rarity: number;
    }[];
}>;

type GlobalState = {
    lockTopDepositCalc?: Promise<void>;
    migrationClaim: Map<string, {
        expires: number;
        username: string;
    }>;
    lockMigrationClaim: Set<string>;
    cacheRobuxRate?: {
        lastCached: number;
        rate: number;
    };
    cacheRobuxLimit?: {
        lastCached: number;
        limit: {
            low: [number, boolean];
            high: [number, boolean];
        };
    };
    cacheUsersCount?: {
        lastCached: number;
        count: number;
    };
    cacheDepositCount?: {
        lastCached: number;
        count: number;
    };
    cachePurchaseCount?: {
        lastCached: number;
        count: number;
    };
    cacheGachaCases?: {
        lastCached: number;
        data: DatabaseReturnType<typeof DBGachaCases>[];
    };
    cacheMinecraftRate?: {
        lastCached: number;
        rate: number;
    };
    cacheGamepasses?: {
        lastCached: number;
        data: {
            [game: string]: {
                displayName: string;
                passes: {
                    [pass: string]: {
                        displayName: string;
                        price: number;
                        color?: string;
                    };
                };
            };
        };
    };
    cacheBloxFruitHire?: {
        lastCached: number;
        data: {
            [groupID: string]: {
                displayName: string;
                types: {
                    [type: string]: {
                        displayName: string;
                        shortDisplayName?: string | null;
                        price: number;
                    };
                };
            };
        };
    };
    cachePhoneCardsFee?: {
        lastCached: number;
        feeTable: {
            [telcoCodename: string]: {
                displayName: string;
                fees: {
                    [value: string]: number;
                };
                resolver?: {
                    [value: string]: {
                        uuid: string;
                        name: string;
                    };
                };
            };
        };
    };
    cacheLatestGachaFeed?: {
        lastCached: number;
        feed: {
            gcid: number;
            username: string;
            rarity: number;
            case: string;
            caseID: number;
            result: string;
            timestamp: number;
        }[];
    };
};
type LocalState = {
    sessionToken?: string;
    uuid?: string;
    username?: string;
};
type EventTable = {
    csEvents: {};
    scEvents: {
        balanceUpdated: (balance: number) => void;
        balanceRobuxUpdated: (balance: number) => void;
        notification: (severity: 'error' | 'success' | 'warning' | 'info', message: string) => void;
        depositFinished: (paymentID: number) => void;
        newPurchase: (createdAt: number, username: string, data: {
            type: "robux";
            amount: number;
        } | {
            type: "roblox-gamepass";
            game: string;
            passes: string[];
        } | {
            type: "minecraft";
        } | {
            type: "blox-fruit-hire";
            hireTypes: string[];
        } | {
            type: "steam-wallet";
            region: string;
            value: number;
            amount: number;
        }) => void;
        newGacha: (gcid: number, username: string, caseName: string, rarity: number, result: string, timestamp: number) => void;
    };
};
declare enum ErrorCode {
    NOT_IMPLEMENTED = "GSVN#-1",
    UNKNOWN_ERROR = "GSVN#0",
    INSUFFICIENT_EXCHANGE_TOKEN_SCOPE = "GSVN#1",
    INVALID_EXCHANGE_TOKEN = "GSVN#2",
    NOT_LOGGED_IN = "GSVN#3",
    INSUFFICIENT_PERMISSION = "GSVN#4",
    NOT_FOUND = "GSVN#5",
    INVALID_AMOUNT = "GSVN#6",
    MISMATCHED_AMOUNT = "GSVN#7",
    INSUFFICIENT_BALANCE = "GSVN#8",
    ALREADY_PURCHASED_GAMEPASS = "GSVN#9",
    INVALID_STATUS_CHANGE = "GSVN#10",
    INVALID_STATE = "GSVN#11",
    VOUCHER_ALREADY_USED = "GSVN#12",
    ALREADY_EXISTS = "GSVN#13",
    VOUCHER_EXPIRED = "GSVN#14",
    VOUCHER_USED_ALL = "GSVN#15",
    VOUCHER_PURCHASE_VALUE_TOO_LOW = "GSVN#16",
    ALREADY_API_USER = "GSVN#17",
    EMAIL_NOT_VERIFIED = "GSVN#18",
    PHONE_NOT_VERIFIED = "GSVN#19"
}

declare const func$1e: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    game: string;
    passes: string[];
    password: string;
    voucher?: string | null | undefined;
    note?: string | null | undefined;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1d: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    password: string;
    twoFactor: string;
    mcNameNote: string;
    voucher?: string | null | undefined;
    userNote?: string | null | undefined;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1c: _badaimweeb_js_dtsocket.Procedure<{
    amount: number;
    taxed: boolean;
    voucher?: string | null | undefined;
    note?: string | null | undefined;
} & ({
    targetUsername: string;
} | {
    targetGamepassLink: string;
}), number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1b: _badaimweeb_js_dtsocket.Procedure<{
    value: number;
    region: string;
    amount: number;
    voucher?: string | undefined;
    userNote?: string | undefined;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1a: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$19: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$18: _badaimweeb_js_dtsocket.Procedure<{
    type: string;
    code: string;
    currentValue: number;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$17: _badaimweeb_js_dtsocket.Procedure<{
    type: string[];
    username: string;
    password: string;
    group: string;
    voucher?: string | null | undefined;
    userNote?: string | null | undefined;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$16: _badaimweeb_js_dtsocket.Procedure<{
    amount: number;
}, [pmid: number, instruction: {
    account: string;
    amount: number;
    message: string;
    timeout: number;
    localID: string;
}], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$15: _badaimweeb_js_dtsocket.Procedure<{
    amount: number;
    resolver: string;
}, [pmid: number, instruction: {
    account: string;
    amount: number;
    message: string;
    timeout: number;
    localID: string;
    qr: string;
    bank: string;
    vqrDeeplink: string;
}], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$14: _badaimweeb_js_dtsocket.Procedure<{
    value: number;
    code: string;
    telco: string;
    serial: string;
}, [pmid: number, status: "pending" | "success" | "failed", reason: string | null], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$13: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    password: string;
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$12: _badaimweeb_js_dtsocket.Procedure<void, {
    [groupID: string]: {
        displayName: string;
        types: {
            [type: string]: {
                displayName: string;
                shortDisplayName?: string | null | undefined;
                price: number;
            };
        };
    };
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$11: _badaimweeb_js_dtsocket.Procedure<number, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$10: _badaimweeb_js_dtsocket.Procedure<void, Record<number, number>, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$$: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$_: _badaimweeb_js_dtsocket.Procedure<void, {
    address: string;
    isVerified: boolean;
    isPublic: boolean;
}[] | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$Z: _badaimweeb_js_dtsocket.Procedure<void, {
    assets: string[];
    cases: {
        id: number;
        asset: number | undefined;
        type: string;
        name: string;
        price: number;
        contains: {
            name: string;
            asset: number | undefined;
            rarity: number;
        }[];
        color: number;
    }[];
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$Y: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
    gcid: number;
    target: string;
    case: number;
    caseName: string;
    value: number;
    action: {
        type: "robux";
        amount: number;
    };
    rarity: number;
    winningItem: string;
    createdAt: number;
    isFree?: boolean | undefined;
}>, "target" | "value" | "createdAt" | "gcid" | "rarity" | "case" | "caseName" | "action" | "winningItem">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$X: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    mode: "gamepass" | "svv";
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$W: _badaimweeb_js_dtsocket.Procedure<void, {
    [game: string]: {
        displayName: string;
        passes: {
            [pass: string]: {
                displayName: string;
                price: number;
                color?: string | undefined;
            };
        };
    };
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$V: _badaimweeb_js_dtsocket.Procedure<void, {
    gcid: number;
    username: string;
    rarity: number;
    case: string;
    caseID: number;
    result: string;
    timestamp: number;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$U: _badaimweeb_js_dtsocket.Procedure<void, {
    created: number;
    username: string;
    data: {
        type: "robux";
        amount: number;
    } | {
        type: "roblox-gamepass";
        game: string;
        passes: string[];
    } | {
        type: "minecraft";
    } | {
        type: "blox-fruit-hire";
        hireTypes: string[];
    } | {
        type: "steam-wallet";
        region: string;
        value: number;
        amount: number;
    };
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$T: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$S: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
    pmid: number;
    remotePMID?: string | undefined;
    target: string;
    amount: number;
    status: "pending" | "success" | "failed";
    auto?: boolean | undefined;
    reason?: string | undefined;
    createdAt: number;
    updatedAt: number;
} & ({
    type: string;
    input: any;
    instruction: any;
    output: any;
} | {
    type: "vn-phone-card";
    input: {
        serial: string;
        code: string;
        telco: string;
        originalValue: string;
        fee: number;
        resolver: string;
    };
    instruction: null;
    output?: {
        id: string;
        amount: number;
        originalValue: number;
        currency: string;
        date: Date;
        message: string;
        penalty: boolean;
    } | undefined;
} | {
    type: "thesieure";
    input: {
        resolver: string;
        originalValue: number;
    };
    instruction?: {
        account: string;
        amount: number;
        message: string;
        timeout: number;
    } | undefined;
    output?: {
        id: string;
        amount: number;
        currency: string;
        date: Date;
        message: string;
    } | undefined;
} | {
    type: "vnbank";
    input: {
        resolver: string;
        originalValue: number;
    };
    instruction?: {
        account: string;
        amount: number;
        message: string;
        timeout: number;
        qr: string;
    } | undefined;
    output?: {
        id: string;
        amount: number;
        currency: string;
        date: Date;
        message: string;
    } | undefined;
})>, "pmid" | "remotePMID" | "createdAt" | "type" | "amount" | "status" | "reason" | "input" | "instruction" | "output" | "updatedAt">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$R: _badaimweeb_js_dtsocket.Procedure<void, {
    usernamePublic: boolean;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$Q: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$P: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})>, "value" | "pcid" | "createdAt" | "type" | "data" | "status" | "updatedAt" | "note" | "userNote" | "partialProcessedData" | "returnData">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$O: _badaimweeb_js_dtsocket.Procedure<void, {
    low: [amount: number, taxed: boolean];
    high: [amount: number, taxed: boolean];
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$N: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$M: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$L: _badaimweeb_js_dtsocket.Procedure<boolean | void, {
    [region: string]: {
        note?: string | undefined;
        availables: {
            [amount: string]: {
                price: number;
                approxVND: number;
                stock: number;
                note?: string | undefined;
            };
        };
    };
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$K: _badaimweeb_js_dtsocket.Procedure<void, {
    username: string;
    amount: number;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$J: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
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
        gachaPointer?: number | undefined;
        gsvnUsernameMigration?: string | undefined;
    };
    note: string;
    createdAt: number;
}>, "txid" | "createdAt" | "note" | "oldBalance" | "change" | "newBalance" | "tag" | "extraData">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$I: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$H: _badaimweeb_js_dtsocket.Procedure<void, {
    uuid: string;
    username: string;
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    balance: number;
    balanceRobux: number;
    permission: number;
    joinedAt: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$G: _badaimweeb_js_dtsocket.Procedure<void, {
    uuid: string;
    type0: string;
    type1: string;
    type2: string;
    name: string;
    codename: string;
    state: Record<string, any>;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$F: _badaimweeb_js_dtsocket.Procedure<void, Record<string, string>, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$E: _badaimweeb_js_dtsocket.Procedure<void, {
    [telcoCodename: string]: {
        displayName: string;
        fees: {
            [value: string]: number;
        };
        resolver?: {
            [value: string]: {
                uuid: string;
                name: string;
            };
        } | undefined;
    };
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$D: _badaimweeb_js_dtsocket.Procedure<{
    authToken: string;
    redirectURI: string;
    oldLoginClaim?: string | null | undefined;
}, [uuid: string, token: string], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$C: _badaimweeb_js_dtsocket.Procedure<void, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$B: _badaimweeb_js_dtsocket.Procedure<number, {
    winSlot: number;
    assets: string[];
    slots: {
        name: string;
        asset: number;
        rarity: number;
    }[];
    action: {
        type: "robux";
        amount: number;
    };
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$A: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$z: _badaimweeb_js_dtsocket.Procedure<number, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$y: _badaimweeb_js_dtsocket.Procedure<{
    usernamePublic: boolean;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$x: _badaimweeb_js_dtsocket.Procedure<string, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$w: _badaimweeb_js_dtsocket.Procedure<void, {
    id: string;
    ip: ip_address.Address4 | ip_address.Address6 | null | undefined;
    hasToken: boolean;
    ping: number;
    accountUsername: string | undefined;
    accountUUID: string | undefined;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$v: _badaimweeb_js_dtsocket.Procedure<{
    note: string;
    cookie: string;
}, {
    robloxID: number;
    username: string;
    robux: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$u: _badaimweeb_js_dtsocket.Procedure<{
    value: number;
    code: string;
    region: string;
    note?: string | null | undefined;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$t: _badaimweeb_js_dtsocket.Procedure<{
    pcid: number;
    note: string;
}, mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$s: _badaimweeb_js_dtsocket.Procedure<{
    pcid: number;
    note: string;
}, mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$r: _badaimweeb_js_dtsocket.Procedure<{
    pcid: number;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
}, mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$q: _badaimweeb_js_dtsocket.Procedure<{
    uuid: string;
    newPermission: number;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$p: _badaimweeb_js_dtsocket.Procedure<void, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$o: _badaimweeb_js_dtsocket.Procedure<void, {
    violationCount: number;
    cannotCheck: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$n: _badaimweeb_js_dtsocket.Procedure<number, "VIOLATION" | "NO_VIOLATION" | "CANNOT_CHECK", _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$m: _badaimweeb_js_dtsocket.Procedure<{
    target: string;
    amount: number;
    note: string;
    tag: "deposit" | "withdraw" | "charge" | "refund" | "bonus" | "other";
}, ErrorCode[] | undefined, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$l: _badaimweeb_js_dtsocket.Procedure<{
    code: string;
    amount: number;
    data: {
        for: ("robux" | "roblox-gamepass" | "minecraft" | "blox-fruit-hire" | "steam-wallet" | "*")[];
        discount: number;
        discountType: "fixed" | "percent";
        condition: ({
            type: "minAmount";
            minAmount: number;
        } | {
            type: "maxAmount";
            maxAmount: number;
        })[];
        discountMax?: number | undefined;
    };
    expires: number;
}, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$k: _badaimweeb_js_dtsocket.Procedure<string, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$j: _badaimweeb_js_dtsocket.Procedure<number, {
    pcid: number;
    value: number;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    note: string | undefined;
    createdAt: number;
    updatedAt: number;
    type: "robux" | "roblox-gamepass" | "minecraft" | "blox-fruit-hire" | "steam-wallet";
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData: {
        passesProcessed: string[];
    } | {
        typeProcessed: string[];
    } | null | undefined;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$i: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})>, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$h: _badaimweeb_js_dtsocket.Procedure<number, mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$g: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
    pcid: number;
    target: string;
    value: number;
    originalValue?: number | undefined;
    voucher?: string | undefined;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    userNote?: string | undefined;
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
        accountRobuxUsed?: number | undefined;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
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
        accountRobuxUsed?: number | undefined;
        passesRefundValueRobux?: {
            [pass: string]: number;
        } | undefined;
    };
    partialProcessedData?: {
        passesProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
    returnData?: null | undefined;
} | {
    type: "blox-fruit-hire";
    data: {
        username: string;
        password: string;
        cachedDisplayNames: Record<string, string>;
        group: string;
        groupCachedDisplayName: string;
        types: string[];
        refundValue: Record<string, number>;
    };
    partialProcessedData?: {
        typeProcessed: string[];
    } | undefined;
    returnData?: null | undefined;
} | {
    type: "steam-wallet";
    data: {
        region: string;
        value: number;
        amount: number;
        pricePerCard: number;
    };
    partialProcessedData?: null | undefined;
    returnData?: {
        code: string[];
    } | undefined;
})>[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$f: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
    robloxID: number;
    username: string;
    cookie: string;
    robux: number;
    status: "active" | "banned";
    note: string;
    createdAt: number;
    updatedAt: number;
}>[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$e: _badaimweeb_js_dtsocket.Procedure<void, {
    robuxDirect: number;
    robuxForGamepass: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$d: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
    code: string;
    region: string;
    amount: number;
    status: "available" | "sold";
    note: string;
    createdAt: number;
}>[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$c: _badaimweeb_js_dtsocket.Procedure<void, {
    data: mongodb.WithId<{
        pcid: number;
        target: string;
        value: number;
        originalValue?: number | undefined;
        voucher?: string | undefined;
        status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
        userNote?: string | undefined;
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
            accountRobuxUsed?: number | undefined;
        };
        partialProcessedData?: null | undefined;
        returnData?: null | undefined;
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
            accountRobuxUsed?: number | undefined;
            passesRefundValueRobux?: {
                [pass: string]: number;
            } | undefined;
        };
        partialProcessedData?: {
            passesProcessed: string[];
        } | undefined;
        returnData?: null | undefined;
    } | {
        type: "minecraft";
        data: {
            username: string;
            password: string;
            twoFactor: string;
            mcNameNote: string;
        };
        partialProcessedData?: null | undefined;
        returnData?: null | undefined;
    } | {
        type: "blox-fruit-hire";
        data: {
            username: string;
            password: string;
            cachedDisplayNames: Record<string, string>;
            group: string;
            groupCachedDisplayName: string;
            types: string[];
            refundValue: Record<string, number>;
        };
        partialProcessedData?: {
            typeProcessed: string[];
        } | undefined;
        returnData?: null | undefined;
    } | {
        type: "steam-wallet";
        data: {
            region: string;
            value: number;
            amount: number;
            pricePerCard: number;
        };
        partialProcessedData?: null | undefined;
        returnData?: {
            code: string[];
        } | undefined;
    })>[];
    day: number;
    month: number;
    year: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$b: _badaimweeb_js_dtsocket.Procedure<string, {
    username: string;
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    permission: number;
    balance: number;
    balanceRobux: number;
    createdAt: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$a: _badaimweeb_js_dtsocket.Procedure<void, {
    uuid: string;
    username: string;
    permission: number;
    balance: number;
    balanceRobux: number;
    createdAt: number;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$9: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
    code: string;
    data: {
        for: ("robux" | "roblox-gamepass" | "minecraft" | "blox-fruit-hire" | "steam-wallet" | "*")[];
        discount: number;
        discountType: "fixed" | "percent";
        discountMax?: number | undefined;
        condition: ({
            type: "minAmount";
            minAmount: number;
        } | {
            type: "maxAmount";
            maxAmount: number;
        })[];
    };
    amount: number;
    amountLeft: number;
    expires: number;
}>[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$8: _badaimweeb_js_dtsocket.Procedure<number, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$7: _badaimweeb_js_dtsocket.Procedure<string, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$6: _badaimweeb_js_dtsocket.Procedure<Record<string, {
    displayName: string;
    types: Record<string, {
        price: number;
        displayName: string;
        shortDisplayName?: string | null | undefined;
    }>;
}>, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$5: _badaimweeb_js_dtsocket.Procedure<Record<string, {
    passes: Record<string, {
        price: number;
        displayName: string;
        color?: string | undefined;
    }>;
    displayName: string;
}>, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$4: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$3: _badaimweeb_js_dtsocket.Procedure<{
    high: [number, boolean];
    low: [number, boolean];
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$2: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1: _badaimweeb_js_dtsocket.Procedure<Record<string, {
    availables: Record<string, {
        price: number;
        approxVND: number;
        note?: string | undefined;
    }>;
    note?: string | undefined;
}>, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func: _badaimweeb_js_dtsocket.Procedure<{
    note: string;
    website: string;
    siteBackendLanguage: string;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare namespace WSAPI {
  export { func$w as admin_activeConnections, func$v as admin_addRobloxAccount, func$u as admin_addSteamWalletStock, func$t as admin_changePurchaseNote, func$s as admin_changePurchaseNoteInternal, func$r as admin_changePurchaseStatus, func$q as admin_changeUserPermission, func$p as admin_checkRobloxAccountStatus, func$o as admin_checkRobuxAmountViolation, func$n as admin_checkRobuxAmountViolationPurchase, func$m as admin_createTransaction, func$l as admin_createVoucher, func$k as admin_deleteSteamWalletStock, func$j as admin_getGamepassPendingReferences, func$i as admin_getLatestPurchase, func$h as admin_getPurchase, func$g as admin_getPurchases, func$f as admin_getRobloxAccounts, func$e as admin_getRobuxRequired, func$d as admin_getSteamWalletStock, func$c as admin_getTodayPurchases, func$b as admin_getUser, func$a as admin_getUserList, func$9 as admin_getVouchers, func$8 as admin_removeRobloxAccount, func$7 as admin_removeVoucher, func$6 as admin_updateBloxFruitHireAvailable, func$5 as admin_updateGamepasses, func$4 as admin_updateMinecraftPremiumRate, func$3 as admin_updateRobuxLimit, func$2 as admin_updateRobuxRate, func$1 as admin_updateSteamWalletTypes, func as api_registerWaitlist, func$1e as buyGamepass, func$1d as buyMinecraftPremium, func$1c as buyRobux, func$1b as buySteamWallet, func$1a as cancelPayment, func$19 as cancelPurchase, func$18 as checkVoucher, func$17 as createBloxFruitHireRequest, func$16 as createTSRTransaction, func$15 as createVNBankTransaction, func$14 as depositPhoneCard, func$13 as generateOldLoginClaim, func$12 as getBloxFruitHireAvailable, func$11 as getBloxFruitHireQueueNumber, func$10 as getCaseInventory, func$$ as getDepositCount, func$_ as getEmails, func$Z as getGachaCases, func$Y as getGachaHistory, func$X as getGamepassCreationLink, func$W as getGamepasses, func$V as getLatestGachaFeed, func$U as getLatestPurchases, func$T as getMinecraftPremiumRate, func$S as getPayments, func$R as getPrivacySetting, func$Q as getPurchaseCount, func$P as getPurchases, func$O as getRobuxLimit, func$N as getRobuxRate, func$M as getRobuxRateBuyback, func$L as getSteamWalletTypes, func$K as getTopDeposit, func$J as getTransactions, func$I as getUserCount, func$H as getUserInfo, func$G as getVNBanks, func$F as getVNPhoneCardDisplayName, func$E as getVNPhoneCardFee, func$D as login, func$C as logout, func$B as openGachaCase, func$A as robuxAutoAvailable, func$z as sellRobuxBuyback, func$y as setPrivacySetting, func$x as switchToken };
}

declare const apiServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>>;
type Server = typeof apiServer;

export type { Server };
