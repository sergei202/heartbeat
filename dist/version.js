"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersionFromPackageJson = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
function getVersionFromPackageJson(path = '../package.json') {
    var file = fs_1.readFileSync(path_1.resolve(__dirname, path)).toString();
    var json = JSON.parse(file);
    return `v${json.version}`;
}
exports.getVersionFromPackageJson = getVersionFromPackageJson;
//# sourceMappingURL=version.js.map