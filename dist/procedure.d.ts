/// <reference types="node" />
import { type Session } from "@badaimweeb/js-protov2d";
import type { WebSocket } from "ws";
import { type ServerContext } from "@badaimweeb/js-dtsocket";
import type { GlobalState, LocalState, EventTable } from "./types.js";
import type { IncomingMessage } from "http";
import type { DTSocketServer_CSocket } from "@badaimweeb/js-dtsocket/dist/server_csocket.js";
export declare const GState: GlobalState;
export declare const p: {
    input: <TIn>(parser: {
        parse: (input: unknown) => TIn;
    }) => {
        resolve: <TOut>(oCallback: (gState: GlobalState, lState: Partial<LocalState>, input: TIn, socket: DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>, Session<WebSocket & {
            req: IncomingMessage;
        }>>) => TOut | PromiseLike<TOut>) => import("@badaimweeb/js-dtsocket").Procedure<TIn, TOut, ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>>;
        streamResolve: <TOut_1>(oCallback: (gState: GlobalState, lState: Partial<LocalState>, input: TIn, socket: DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>, Session<WebSocket & {
            req: IncomingMessage;
        }>>) => AsyncIterable<TOut_1>, burst?: boolean | undefined) => import("@badaimweeb/js-dtsocket/dist/procedures.js").StreamingProcedure<TIn, TOut_1, ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
            req: IncomingMessage;
        }>>>;
    };
};
export type CSocket = DTSocketServer_CSocket<ServerContext<GlobalState, LocalState, EventTable, Session<WebSocket & {
    req: IncomingMessage;
}>>>;
