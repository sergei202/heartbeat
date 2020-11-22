"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const os = require("os");
const diskUsage = require("diskusage");
;
async function getStats() {
    const byteToGigaByte = 1 / (1024 * 1024 * 1024);
    const usage = await diskUsage.check('/');
    const stats = {
        hostname: os.hostname(),
        uptime: {
            process: Math.round(process.uptime()),
            system: os.uptime(),
        },
        load: os.loadavg(),
        memory: {
            free: os.freemem() * byteToGigaByte,
            total: os.totalmem() * byteToGigaByte
        },
        disk: {
            free: usage.available * byteToGigaByte,
            total: usage.total * byteToGigaByte
        },
        time: new Date()
    };
    return stats;
}
exports.getStats = getStats;
//# sourceMappingURL=stats.js.map