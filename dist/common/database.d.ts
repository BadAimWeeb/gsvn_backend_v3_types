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
    paymentCount: number;
    transactionCount: number;
    purchaseCount: number;
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
        originalValue: string;
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
})>;
