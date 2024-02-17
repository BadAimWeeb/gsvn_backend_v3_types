import { CookieJar } from "tough-cookie";
export declare function getCSRF(jar: CookieJar): Promise<string | undefined>;
export declare function getUserInfo(jar: CookieJar): Promise<{
    username: string;
    displayName: string;
    emailVerified: boolean;
    premium: boolean;
    userID: number;
}>;
export declare function getRobux(userID: number, jar: CookieJar): Promise<number>;
export declare function buyGamepass(csrf: string, sellerID: number, gamepassID: number, price: number, jar: CookieJar): Promise<boolean>;
export declare function deleteGamepass(csrf: string, gamepassID: number, jar: CookieJar): Promise<boolean>;
export declare function buySVV(csrf: string, gameID: number, price: number, jar: CookieJar): Promise<number | undefined>;
export declare function cancelSVV(csrf: string, serverID: number, price: number, jar: CookieJar): Promise<boolean>;
