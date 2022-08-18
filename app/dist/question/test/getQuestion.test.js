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
const getQuestion_1 = require("../services/getQuestion");
describe("the getQuestion-handler", () => {
    const httpResponse = jest.fn();
    const then = jest.fn();
    const model = { findOne: jest.fn(() => ({ then })) };
    const redisStore = { set: jest.fn(), get: jest.fn() };
    const searchDb = jest.fn();
    const storeValue = { value: 'assuming the redis has it stored ' };
    beforeEach(jest.clearAllMocks);
    it("should check the redisStore with the _id as key ", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: "ekemaId" },
            query: { pageNum: null, search: null },
        };
        const handler = (0, getQuestion_1.getQuestionByQueryOrId)({ httpResponse, model, searchDb, redisStore });
        const res = handler(req);
        expect(redisStore.get).toBeCalledWith(req.params._id);
    }));
    it("should check the redisStore with the _id as key and if it exist, should returned  the store data", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: "ekemaId" },
            query: { pageNum: null, search: null },
        };
        redisStore.get.mockResolvedValue([storeValue]);
        const handler = (0, getQuestion_1.getQuestionByQueryOrId)({ httpResponse, model, searchDb, redisStore });
        const res = yield handler(req);
        expect(redisStore.get).toBeCalledWith(req.params._id);
        expect(model.findOne).toBeCalledTimes(0);
        expect(redisStore.set).toBeCalledTimes(0);
        expect(httpResponse).toBeCalledWith(200, [storeValue]);
    }));
    it("should check the mongoDb if the value is not in the redis store ", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: "ekemaId" },
            query: { pageNum: null, search: null },
        };
        redisStore.get.mockResolvedValue(null);
        then.mockResolvedValue([{ data: 'value' }]);
        const handler = (0, getQuestion_1.getQuestionByQueryOrId)({ httpResponse, model, searchDb, redisStore });
        const res = yield handler(req);
        expect(redisStore.get).toBeCalledWith(req.params._id);
        expect(model.findOne).toBeCalledTimes(1);
        expect(redisStore.set).toBeCalledWith(req.params._id, [{ data: 'value' }]);
    }));
    it("should check the redisStore the with search and pageNum as key and it exist, should be returned ", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: null },
            query: { pageNum: 1, search: 'noSearch' },
        };
        redisStore.get.mockResolvedValue(null);
        searchDb.mockResolvedValue({ value: 'value' });
        const handler = (0, getQuestion_1.getQuestionByQueryOrId)({ httpResponse, model, searchDb, redisStore });
        const res = yield handler(req);
        expect(redisStore.get).toBeCalledWith(`${req.query.pageNum}_${req.query.search}`);
        expect(model.findOne).toBeCalledTimes(0);
        expect(redisStore.set).toBeCalledWith(`${req.query.pageNum}_${req.query.search}`, { value: 'value' });
    }));
    it("should respond with status 400 is error is thrown", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            params: { _id: null },
            query: { pageNum: 1, search: 'noSearch' },
        };
        redisStore.get.mockRejectedValue(new Error("internal server error"));
        // searchDb.mockResolvedValue({value:'value'})
        const handler = (0, getQuestion_1.getQuestionByQueryOrId)({ httpResponse, model, searchDb, redisStore });
        const res = yield handler(req);
        // expect(redisStore.get).toBeCalledTimes(0);
        expect(model.findOne).toBeCalledTimes(0);
        expect(redisStore.set).toBeCalledTimes(0);
        expect(httpResponse).toBeCalledWith(400, null);
    }));
});
