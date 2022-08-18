"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicated_util_1 = require("../removeDuplicated.util");
const data = [
    { id: 1, date: "friday" },
    { id: 2, date: "friday" },
    { id: 1, date: "friday" },
];
describe("the removeDuplicate util", () => {
    it("should filter and return an array", () => {
        const result = (0, removeDuplicated_util_1.removeDuplicate)(data, 'id');
        expect(result.length).toBeLessThan(data.length);
    });
});
