import * as dotenv from "dotenv";
import type {FieldPacket, OkPacket, Pool, PoolConnection, ResultSetHeader, RowDataPacket} from "mysql2/promise";
import {createPool} from "mysql2/promise";

dotenv.config();
type mysqlRes = [(RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader), FieldPacket[]];

const getMysqlConnection = (vpn: boolean, docker: boolean = false): Pool => {

    let host: string | undefined;

    //Select connections between vpn, lan, docker according to the arguments.
    if (vpn && !docker) {
        host = process.env.MYSQL_VPN_ADDRESS;
    } else if (!vpn && !docker) {
        host = process.env.MYSQL_LAN_ADDRESS;
    } else if (!vpn && docker) {
        host = process.env.MYSQL_DOCKER_ADDRESS;
    } else if (vpn && docker) {
        throw new Error("VPN and docker cannot be used at the same time.");
    }

//Connect the mysql server.
    return createPool({
        waitForConnections: true,
        connectionLimit: 100,
        host: host,
        port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.DATABASE,
        multipleStatements: true,
        connectTimeout: 30000,
        debug: false,
        timezone: '+00:00',
    })
}

export {getMysqlConnection}
export type {mysqlRes, OkPacket, Pool, RowDataPacket, FieldPacket, ResultSetHeader, PoolConnection}
