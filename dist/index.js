"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMysqlConnection = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const promise_1 = require("mysql2/promise");
const getMysqlConnection = (vpn) => {
    let host = '';
    if (vpn) {
        host = process.env.MYSQL_VPN_ADDRESS;
    }
    else {
        host = process.env.MYSQL_LAN_ADDRESS;
    }
    const pool = (0, promise_1.createPool)({
        waitForConnections: true,
        connectionLimit: 10,
        host: host,
        port: Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: 'ethereum',
        multipleStatements: true,
        connectTimeout: 30000,
        debug: false,
        timezone: '+00:00',
    });
    return pool;
};
exports.getMysqlConnection = getMysqlConnection;
