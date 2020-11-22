"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const stats_1 = require("./stats");
const version_1 = require("./version");
const app = express();
app.listen({ port: 20200 }, () => {
    const version = version_1.getVersionFromPackageJson();
    console.log(`Heartbeat ${version}.  Listening on port 20200.`);
});
app.get('/', (res, req) => {
    stats_1.getStats().then(stats => req.json(stats));
});
//# sourceMappingURL=heartbeat.js.map