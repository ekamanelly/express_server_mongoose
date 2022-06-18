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
const deleteQuestion_1 = require("../services/deleteQuestion");
describe("the deleteQuestion-handler", () => {
    afterEach(jest.clearAllMocks);
    it("should delete a Question collection isDeleted field to true", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: "Paul hope you like stubbing function cause I love it" },
            body: { acknowledged: true }
        };
        const httpResponse = jest.fn();
        const updateOne = jest.fn();
        updateOne.mockImplementation(() => Promise.resolve(req.body));
        const handler = (0, deleteQuestion_1.deleteQuestion)(httpResponse, { updateOne });
        const result = yield handler(req);
        console.log(result);
        expect(updateOne).toBeCalledWith({ _id: req.params._id }, { isDeleted: true });
        expect(httpResponse).toBeCalledWith(200, req.body);
    }));
    it("should response with status 400 when error occurs ", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: "Paul hope you like stubbing function cause I love it" },
            body: { acknowledged: true }
        };
        const httpResponse = jest.fn();
        const updateOne = jest.fn();
        updateOne.mockRejectedValue(new Error("internal server error"));
        const handler = (0, deleteQuestion_1.deleteQuestion)(httpResponse, { updateOne });
        yield handler(req);
        expect(updateOne).toBeCalledWith({ _id: req.params._id }, { isDeleted: true });
        expect(httpResponse).toBeCalledWith(400, null);
    }));
});
