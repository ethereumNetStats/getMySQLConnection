import type { Pool, FieldPacket, OkPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";
declare type mysqlRes = [(RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader), FieldPacket[]];
declare const getMysqlConnection: (vpn: boolean) => Pool;
export { getMysqlConnection };
export type { mysqlRes, OkPacket };
