import { Collection, WithId } from "mongodb";
export type DatabaseReturnType<T extends Collection<any>> = T extends Collection<infer U> ? WithId<U> : never;
export declare const DBUsers: Collection<{
    uuid: string;
    cachedFirstName: string;
    cachedLastName: string;
    cachedNameOrder: "first-last" | "last-first";
    cachedUsername: string;
    balance: number;
    /**
     * 0: normal user
     * 1: admin
     * 2: fe test
     */
    permission: number;
    voucherUsed?: string[] | undefined;
    privacy: {
        usernamePublic: boolean;
    };
    createdAt: number;
    updatedAt: number;
}>;
export declare const DBUserSessions: Collection<{
    uuid: string;
    authToken: string;
    refreshToken?: string | undefined;
    abstractToken: string;
    createdAt: number;
    expiresAt: number;
}>;
export declare const DBTransactions: Collection<{
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
        gsvnUsernameMigration?: string | undefined;
    };
    note: string;
    createdAt: number;
}>;
export declare const DBConfig: Collection<{
    key: string;
    value: any;
}>;
export type ConfigType = {
    robuxRate: number;
    robuxLimit: {
        low: [amount: number, taxed: boolean];
        high: [amount: number, taxed: boolean];
    };
    gamepasses: {
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
    minecraftPremiumRate: number;
    discordWebhook: string;
    cacheTopDeposit: {
        updatedAt: number;
        data: {
            uuid: string;
            amount: number;
        }[];
    } | null;
    payment: number;
    transaction: number;
    purchase: number;
};
export declare function getDBConfig<T extends keyof ConfigType>(key: T): Promise<ConfigType[T] | null>;
export declare function setDBConfig<T extends keyof ConfigType>(key: T, value: ConfigType[T]): Promise<void>;
export declare function getCounter(key: string): Promise<number>;
export declare const DBPayments: Collection<{
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
        /**
         * The ID of the transaction, or notification. Should be unique.
         */
        id: string;
        /**
         * Amount of money involved in the transaction.
         */
        amount: number;
        /**
         * The currency of the transaction.
         */
        currency: string;
        /**
         * The date of the transaction.
         */
        date: Date;
        /**
         * Transaction message.
         */
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
        /**
         * The ID of the transaction, or notification. Should be unique.
         */
        id: string;
        /**
         * Amount of money involved in the transaction.
         */
        amount: number;
        /**
         * The currency of the transaction.
         */
        currency: string;
        /**
         * The date of the transaction.
         */
        date: Date;
        /**
         * Transaction message.
         */
        message: string;
    } | undefined;
})>;
export declare const DBPurchases: Collection<{
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
})>;
export declare const DBRobloxAccounts: Collection<{
    robloxID: number;
    username: string;
    cookie: string;
    robux: number;
    status: "active" | "banned";
    note: string;
    createdAt: number;
    updatedAt: number;
}>;
export declare const DBVouchers: Collection<{
    code: string;
    data: {
        for: ("robux" | "roblox-gamepass" | "minecraft" | "*")[];
        discount: number;
        discountType: "percent" | "fixed";
        discountMax?: number;
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
}>;
export declare const DBAPIWaitlist: Collection<{
    accountUUID: string;
    website: string;
    siteBackendLanguage: string;
    note: string;
}>;
/**
 * For migration purposes only. This database is not used actively.
 */
export declare const DBUserMigration: Collection<{
    username: string;
    password: string;
    balance: number;
}>;
