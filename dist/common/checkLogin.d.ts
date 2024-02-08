import type { CSocket } from "../procedure.js";
import { type LocalState } from "../types.js";
import idServer from "./bawid.js";
import { DBUsers, DatabaseReturnType } from "./database.js";
export declare function checkLogin<T extends boolean = false>(lState: Partial<LocalState>, socket: CSocket, remoteCheck?: T): Promise<T extends true ? [
    DatabaseReturnType<typeof DBUsers>,
    Awaited<ReturnType<typeof idServer.p.oauth2_getUserInfo>>
] : DatabaseReturnType<typeof DBUsers>>;
