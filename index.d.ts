/// <reference types="ws" />
/// <reference types="node" />
import * as _badaimweeb_js_protov2d from '@badaimweeb/js-protov2d';
import { Session } from '@badaimweeb/js-protov2d';
import * as _badaimweeb_js_dtsocket from '@badaimweeb/js-dtsocket';
import { DTSocketServer, ServerContext } from '@badaimweeb/js-dtsocket';
import * as http from 'http';
import * as ws from 'ws';
import * as mongodb from 'mongodb';
import * as ip_address from 'ip-address';

type GlobalState = {
    robuxRate?: number;
    lockTopDepositCalc?: Promise<void>;
    migrationClaim: Map<string, {
        expires: number;
        username: string;
    }>;
    lockMigrationClaim: Set<string>;
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
        }) => void;
        newGacha: (gcid: string, username: string, caseName: string, rarity: number, result: string, timestamp: number) => void;
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

declare const func$13: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    game: string;
    passes: string[];
    password: string;
    voucher?: string | null | undefined;
    note?: string | null | undefined;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$12: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    password: string;
    twoFactor: string;
    mcNameNote: string;
    voucher?: string | null | undefined;
    userNote?: string | null | undefined;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$11: _badaimweeb_js_dtsocket.Procedure<{
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

declare const func$10: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$$: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$_: _badaimweeb_js_dtsocket.Procedure<{
    code: string;
    type: string;
    currentValue: number;
}, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$Z: _badaimweeb_js_dtsocket.Procedure<{
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

declare const func$Y: _badaimweeb_js_dtsocket.Procedure<{
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

declare const func$X: _badaimweeb_js_dtsocket.Procedure<{
    value: number;
    code: string;
    telco: string;
    serial: string;
}, [pmid: number, status: "pending" | "success" | "failed", reason: string | null], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$W: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    password: string;
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$V: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$U: _badaimweeb_js_dtsocket.Procedure<void, {
    address: string;
    isVerified: boolean;
    isPublic: boolean;
}[] | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$T: _badaimweeb_js_dtsocket.Procedure<void, {
    assets: string[];
    cases: {
        id: number;
        asset: number;
        type: string;
        name: string;
        price: number;
        contains: {
            name: string;
            asset: number;
            rarity: number;
        }[];
        color: number;
    }[];
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$S: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
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
}>, "target" | "value" | "createdAt" | "gcid" | "case" | "caseName" | "action" | "rarity" | "winningItem">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$R: _badaimweeb_js_dtsocket.Procedure<{
    username: string;
    mode: "gamepass" | "svv";
}, string, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$Q: _badaimweeb_js_dtsocket.Procedure<void, {
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

declare const func$P: _badaimweeb_js_dtsocket.Procedure<void, {
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

declare const func$O: _badaimweeb_js_dtsocket.Procedure<void, {
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
    };
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$N: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$M: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
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
})>, "pmid" | "remotePMID" | "createdAt" | "amount" | "status" | "reason" | "input" | "instruction" | "output" | "updatedAt" | "type">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$L: _badaimweeb_js_dtsocket.Procedure<void, {
    usernamePublic: boolean;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$K: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$J: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})>, "value" | "pcid" | "createdAt" | "data" | "status" | "updatedAt" | "type" | "note" | "userNote" | "partialProcessedData">[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$I: _badaimweeb_js_dtsocket.Procedure<void, {
    low: [amount: number, taxed: boolean];
    high: [amount: number, taxed: boolean];
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$H: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$G: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$F: _badaimweeb_js_dtsocket.Procedure<void, {
    username: string;
    amount: number;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$E: _badaimweeb_js_dtsocket.Procedure<void, Pick<mongodb.WithId<{
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

declare const func$D: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$C: _badaimweeb_js_dtsocket.Procedure<void, {
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

declare const func$B: _badaimweeb_js_dtsocket.Procedure<void, {
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

declare const func$A: _badaimweeb_js_dtsocket.Procedure<void, Record<string, string>, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$z: _badaimweeb_js_dtsocket.Procedure<void, {
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

declare const func$y: _badaimweeb_js_dtsocket.Procedure<{
    authToken: string;
    redirectURI: string;
    oldLoginClaim?: string | null | undefined;
}, [uuid: string, token: string], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$x: _badaimweeb_js_dtsocket.Procedure<void, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$w: _badaimweeb_js_dtsocket.Procedure<number, {
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

declare const func$v: _badaimweeb_js_dtsocket.Procedure<void, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$u: _badaimweeb_js_dtsocket.Procedure<number, number, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$t: _badaimweeb_js_dtsocket.Procedure<{
    usernamePublic: boolean;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$s: _badaimweeb_js_dtsocket.Procedure<string, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$r: _badaimweeb_js_dtsocket.Procedure<void, {
    id: string;
    ip: ip_address.Address4 | ip_address.Address6 | null | undefined;
    hasToken: boolean;
    ping: number;
    accountUsername: string | undefined;
    accountUUID: string | undefined;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$q: _badaimweeb_js_dtsocket.Procedure<{
    note: string;
    cookie: string;
}, {
    robloxID: number;
    username: string;
    robux: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$p: _badaimweeb_js_dtsocket.Procedure<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$o: _badaimweeb_js_dtsocket.Procedure<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$n: _badaimweeb_js_dtsocket.Procedure<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$m: _badaimweeb_js_dtsocket.Procedure<{
    uuid: string;
    newPermission: number;
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$l: _badaimweeb_js_dtsocket.Procedure<void, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$k: _badaimweeb_js_dtsocket.Procedure<void, {
    violationCount: number;
    cannotCheck: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$j: _badaimweeb_js_dtsocket.Procedure<number, "VIOLATION" | "NO_VIOLATION" | "CANNOT_CHECK", _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$i: _badaimweeb_js_dtsocket.Procedure<{
    target: string;
    amount: number;
    note: string;
    tag: "deposit" | "withdraw" | "charge" | "refund" | "bonus" | "other";
}, ErrorCode[] | undefined, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$h: _badaimweeb_js_dtsocket.Procedure<{
    code: string;
    data: {
        for: ("robux" | "roblox-gamepass" | "minecraft" | "*")[];
        discount: number;
        discountType: "fixed" | "percent";
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
}, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$g: _badaimweeb_js_dtsocket.Procedure<number, {
    pcid: number;
    value: number;
    status: "pending" | "processing" | "done" | "cancelled" | "partial-processed";
    note: string | undefined;
    createdAt: number;
    updatedAt: number;
    type: "robux" | "roblox-gamepass" | "minecraft";
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
    } | null | undefined;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$f: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})>, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$e: _badaimweeb_js_dtsocket.Procedure<number, mongodb.WithId<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})> | null, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$d: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
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
} | {
    type: "minecraft";
    data: {
        username: string;
        password: string;
        twoFactor: string;
        mcNameNote: string;
    };
    partialProcessedData?: null | undefined;
})>[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$c: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
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

declare const func$b: _badaimweeb_js_dtsocket.Procedure<void, {
    robuxDirect: number;
    robuxForGamepass: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$a: _badaimweeb_js_dtsocket.Procedure<void, {
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
    } | {
        type: "minecraft";
        data: {
            username: string;
            password: string;
            twoFactor: string;
            mcNameNote: string;
        };
        partialProcessedData?: null | undefined;
    })>[];
    day: number;
    month: number;
    year: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$9: _badaimweeb_js_dtsocket.Procedure<string, {
    username: string;
    firstName: string;
    lastName: string;
    nameOrder: "first-last" | "last-first";
    permission: number;
    balance: number;
    createdAt: number;
}, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$8: _badaimweeb_js_dtsocket.Procedure<void, {
    uuid: string;
    username: string;
    permission: number;
    balance: number;
    createdAt: number;
}[], _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$7: _badaimweeb_js_dtsocket.Procedure<void, mongodb.WithId<{
    code: string;
    data: {
        for: ("robux" | "roblox-gamepass" | "minecraft" | "*")[];
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

declare const func$6: _badaimweeb_js_dtsocket.Procedure<number, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$5: _badaimweeb_js_dtsocket.Procedure<string, boolean, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$4: _badaimweeb_js_dtsocket.Procedure<Record<string, {
    passes: Record<string, {
        displayName: string;
        price: number;
        color?: string | undefined;
    }>;
    displayName: string;
}>, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$3: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$2: _badaimweeb_js_dtsocket.Procedure<{
    high: [number, boolean];
    low: [number, boolean];
}, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
    req: http.IncomingMessage;
}>>>;

declare const func$1: _badaimweeb_js_dtsocket.Procedure<number, void, _badaimweeb_js_dtsocket.ServerContext<GlobalState, LocalState, EventTable, _badaimweeb_js_protov2d.Session<ws.WebSocket & {
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
  export { func$r as admin_activeConnections, func$q as admin_addRobloxAccount, func$p as admin_changePurchaseNote, func$o as admin_changePurchaseNoteInternal, func$n as admin_changePurchaseStatus, func$m as admin_changeUserPermission, func$l as admin_checkAccountStatus, func$k as admin_checkRobuxAmountViolation, func$j as admin_checkRobuxAmountViolationPurchase, func$i as admin_createTransaction, func$h as admin_createVoucher, func$g as admin_getGamepassPendingReferences, func$f as admin_getLatestPurchase, func$e as admin_getPurchase, func$d as admin_getPurchases, func$c as admin_getRobloxAccounts, func$b as admin_getRobuxRequired, func$a as admin_getTodayPurchases, func$9 as admin_getUser, func$8 as admin_getUserList, func$7 as admin_getVouchers, func$6 as admin_removeRobloxAccount, func$5 as admin_removeVoucher, func$4 as admin_updateGamepasses, func$3 as admin_updateMinecraftPremiumRate, func$2 as admin_updateRobuxLimit, func$1 as admin_updateRobuxRate, func as api_registerWaitlist, func$13 as buyGamepass, func$12 as buyMinecraftPremium, func$11 as buyRobux, func$10 as cancelPayment, func$$ as cancelPurchase, func$_ as checkVoucher, func$Z as createTSRTransaction, func$Y as createVNBankTransaction, func$X as depositPhoneCard, func$W as generateOldLoginClaim, func$V as getDepositCount, func$U as getEmails, func$T as getGachaCases, func$S as getGachaHistory, func$R as getGamepassCreationLink, func$Q as getGamepasses, func$P as getLatestGachaFeed, func$O as getLatestPurchases, func$N as getMinecraftPremiumRate, func$M as getPayments, func$L as getPrivacySetting, func$K as getPurchaseCount, func$J as getPurchases, func$I as getRobuxLimit, func$H as getRobuxRate, func$G as getRobuxRateBuyback, func$F as getTopDeposit, func$E as getTransactions, func$D as getUserCount, func$C as getUserInfo, func$B as getVNBanks, func$A as getVNPhoneCardDisplayName, func$z as getVNPhoneCardFee, func$y as login, func$x as logout, func$w as openGachaCase, func$v as robuxAutoAvailable, func$u as sellRobuxBuyback, func$t as setPrivacySetting, func$s as switchToken };
}

declare const apiServer: DTSocketServer<ServerContext<GlobalState, LocalState, EventTable, Session<any>, typeof WSAPI>>;
type Server = typeof apiServer;

export type { Server };