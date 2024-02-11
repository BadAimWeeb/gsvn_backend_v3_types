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
    tag: string;
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
export declare function getCounter(key: string): Promise<any>;
export declare const DBPayments: Collection<{
    pmid: number;
    remotePMID?: string | undefined;
    target: string;
    amount: number;
    status: "pending" | "success" | "failed";
    type: string;
    input: any;
    instruction: any;
    output: any;
    reason?: string | undefined;
    createdAt: number;
    updatedAt: number;
} & {
    type: "vn-phone-card";
    input: {
        serial: string;
        pin: string;
        telco: string;
        value: string;
        fee: number;
        resolver: string;
    };
    instruction: null;
    output: {
        id: string;
        amount: number;
        originalValue: number;
        currency: string;
        date: Date;
        message: string;
        penalty: boolean;
    };
}>;
