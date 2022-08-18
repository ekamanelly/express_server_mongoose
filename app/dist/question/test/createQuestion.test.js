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
const createQuestion_1 = require("../services/createQuestion");
describe("the getQuestion-handler", () => {
    afterEach(jest.clearAllMocks);
    it("should create a Question collection wit the body", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: { text: "Paul hope you like stubbing function cause I love it" },
        };
        const httpResponse = jest.fn();
        const create = jest.fn();
        create.mockImplementation(() => Promise.resolve(req.body));
        const handler = (0, createQuestion_1.createQuestion)(httpResponse, { create });
        const result = yield handler(req);
        console.log(result);
        expect(create).toBeCalledWith(req.body);
        expect(httpResponse).toBeCalledWith(200, req.body);
    }));
    it("should response with status 400 when error occurs ", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: { text: "hope you like stubbing function cause I love it" },
        };
        const httpResponse = jest.fn();
        const create = jest.fn();
        create.mockRejectedValue(new Error("internal server error"));
        const handler = (0, createQuestion_1.createQuestion)(httpResponse, { create });
        yield handler(req);
        expect(create).toBeCalledWith(req.body);
        expect(httpResponse).toBeCalledWith(400, null);
    }));
});
