export type GlobalState = {};
export type LocalState = {
    sessionToken?: string;
};
export type EventTable = {
    csEvents: {};
    scEvents: {
        balanceUpdated: (balance: number) => void;
    };
};
export declare enum ErrorCode {
    NOT_IMPLEMENTED = "GSVN#-1",
    UNKNOWN_ERROR = "GSVN#0",
    INSUFFICIENT_EXCHANGE_TOKEN_SCOPE = "GSVN#1",
    INVALID_EXCHANGE_TOKEN = "GSVN#2",
    NOT_LOGGED_IN = "GSVN#3"
}
