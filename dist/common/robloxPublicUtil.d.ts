export declare function usernameToUserId(username: string): Promise<number | null>;
export declare function findGames(userID: number, cursor?: string | null, limit?: number): Promise<{
    data: {
        id: number;
        rootPlace: {
            id: number;
            name: string;
        };
    }[];
    nextPageCursor: string | null;
    previousPageCursor: string | null;
}>;
export declare function getGamepasses(gameID: number, cursor?: string | null, limit?: number): Promise<{
    data: {
        id: number;
        name: string;
        price: number;
    }[];
    nextPageCursor: string | null;
    previousPageCursor: string | null;
}>;
export declare function getServerVIP(placeID: number): Promise<number | null>;
export declare function getGamepassInfo(gpID: number): Promise<[price: number, sellerID: number]>;
