"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', user_router_1.userRouter);
//# sourceMappingURL=router.js.map