# About
This package gets mysql pool connections using mysql2/promise.

# Usage
Make a new file `.env` like `.envSample` on the same directory with index.ts like below.
```shell
MYSQL_VPN_ADDRESS=123.123.123.123
MYSQL_LAN_ADDRESS=64.64.64.64
MYSQL_LAN_ADDRESS=5.5.5.5
MYSQL_PORT=1234
MYSQL_USER=alice
MYSQL_PASS=password
DATABASE=schemaName
```
Then import the package and define a pool connection like below.
```typescript
import {getMysqlConnection} from "@pierogi.dev/get_mysql_connection";
import type {Pool} from "@pierogi.dev/get_mysql_connection";
const pool: Pool = await getMysqlConnection(false); //true to use MYSQL_VPN_ADDRESS.
```
If you want to use a docker network, you can use the below.
```typescript
// If you want to use a docker network, set the second argument to true and the first argument to false.
const pool: Pool = await getMysqlConnection(false, true);
// If you set both arguments to true, the process will throw an error.
const pool2: Pool = await getMysqlConnection(true, true); // This will throw an error.
```

These addresses are only used according to the arguments of `getMysqlConnections()`.
Thus, if your hosted MySQL server allows regular connections and VPN connections,
you can set the VPN address to `MYSQL_VPN_ADDRESS`, the regular address to `MYSQL_LAN_ADDRESS`
and the docker network address to `MYSQL_DOCKER_ADDRESS` to switch these connections with the above arguments.

So you can do querying like below.
```typescript
await pool.query(`INSERT INTO ${tableName} SET ?`, recordData);
```

# Note
The address set in `MYSQL_VPN_ADDRESS` can be a normal address,
but the user name, password, port number, and database name cannot be switched,
so you cannot use two different MySQL servers.
This is just a package for my personal use.
