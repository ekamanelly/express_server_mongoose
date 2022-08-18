"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_controller_1 = require("../question.controller");
describe("the question-controller", () => {
    afterEach(jest.clearAllMocks);
    it("should respond with status 200 when handler has no error ", () => __awaiter(void 0, void 0, void 0, function* () {
        const handler = jest.fn();
        handler.mockResolvedValueOnce({
            headers: {
                "Content-Type": "application/json",
            },
            statusCode: 200,
            data: { foo: "foo" },
        });
        const send = jest.fn();
        const status = jest.fn(() => ({ send }));
        const res = {
            status: jest.fn(() => ({ end: jest.fn() })),
            set: jest.fn(() => ({ status })),
        };
        const req = {};
        const resHandler = (0, question_controller_1.questionController)(handler);
        const result = yield resHandler(req, res);
        expect(handler).toHaveBeenCalledWith(req);
        expect(status).toHaveBeenCalledWith(200);
        expect(send).toHaveBeenCalledWith({ foo: "foo" });
    }));
    it("should respond with status 500 when handler throws an error", () => __awaiter(void 0, void 0, void 0, function* () {
        const handler = jest.fn();
        handler.mockRejectedValue(new Error("internal server error"));
        const res = {
            status: jest.fn(() => ({ end: jest.fn() })),
        };
        const req = {};
        const resHandler = (0, question_controller_1.questionController)(handler);
        yield resHandler(req, res);
        expect(handler).toHaveBeenCalledWith(req);
        expect(res.status).toHaveBeenCalledWith(500);
    }));
});
