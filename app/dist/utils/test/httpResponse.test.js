"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpResponse_util_1 = require("../httpResponse.util");
describe("The httpResponse,", () => {
    it("should respond with right body", () => {
        const statusCode = 200;
        const data = { correctData: "just any thing" };
        const result = (0, httpResponse_util_1.httpResponse)(statusCode, data);
        expect(result).toHaveProperty("statusCode", statusCode);
        expect(result).toHaveProperty(['data', 'correctData'], data.correctData);
    });
});
