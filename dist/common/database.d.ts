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
                };
            };
        };
    };
};
export declare function getDBConfig<T extends keyof ConfigType>(key: T): Promise<ConfigType[T] | null>;
export declare function setDBConfig<T extends keyof ConfigType>(key: T, value: ConfigType[T]): Promise<void>;
