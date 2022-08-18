"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpResponse = void 0;
const httpResponse = (statusCode, body) => {
    return {
        headers: {
            "Content-Type": "application/json",
        },
        statusCode,
        data: Object.assign({}, body),
    };
};
exports.httpResponse = httpResponse;
