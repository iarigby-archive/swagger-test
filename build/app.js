"use strict";
exports.__esModule = true;
// src/app.ts
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var routes_1 = require("../build/routes");
exports.app = express_1["default"]();
// Use body parser to read sent json payloads
exports.app.use(body_parser_1["default"].urlencoded({
    extended: true
}));
exports.app.use(body_parser_1["default"].json());
routes_1.RegisterRoutes(exports.app);
