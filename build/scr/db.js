"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'shweta',
    database: 'ticketapp',
});
exports.pool.on('connect', () => {
    console.log('✅ PostgreSQL connected');
});
//# sourceMappingURL=db.js.map