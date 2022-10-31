import * as dotenv from "dotenv";
import type {FieldPacket, OkPacket, Pool, PoolConnection, ResultSetHeader, RowDataPacket} from "mysql2/promise";
import {createPool} from "mysql2/promise";

dotenv.config();
type mysqlRes = [(RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader), FieldPacket[]];

const getMysqlConnection = (vpn: boolean): Pool => {

    let host: string | undefined;

    if (vpn) {
        host = process.env.MYSQL_VPN_ADDRESS;
    }
    else {
        host = process.env.MYSQL_LAN_ADDRESS;
    }

//Connect the mysql server.
    return createPool({
        waitForConnections: true,
        connectionLimit: 100,
        host: host,
        port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: 'ethereum',
        multipleStatements: true,
        connectTimeout: 30000,
        debug: false,
        timezone: '+00:00',
    })
}


export {getMysqlConnection}
export type {mysqlRes, OkPacket, Pool, RowDataPacket, FieldPacket, ResultSetHeader, PoolConnection}
