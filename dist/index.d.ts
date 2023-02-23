import type { FieldPacket, OkPacket, Pool, PoolConnection, ResultSetHeader, RowDataPacket } from "mysql2/promise";
declare type mysqlRes = [(RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader), FieldPacket[]];
declare const getMysqlConnection: (vpn: boolean, docker?: boolean) => Pool;
export { getMysqlConnection };
export type { mysqlRes, OkPacket, Pool, RowDataPacket, FieldPacket, ResultSetHeader, PoolConnection };
