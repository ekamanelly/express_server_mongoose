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
const redis_util_1 = require("../redis.util");
const store = { set: jest.fn(), get: jest.fn() };
const data = { posts: [] };
describe("the redis util", () => {
    it("should be return a set and get method", () => {
        const store = { set: jest.fn(), get: jest.fn() };
        const result = (0, redis_util_1.createRedisMethods)(store);
        expect(result).toHaveProperty("get");
        expect(result).toHaveProperty("set");
    });
    it("get method should return data if stored ", () => __awaiter(void 0, void 0, void 0, function* () {
        const store = { set: jest.fn(), get: jest.fn().mockResolvedValue(JSON.stringify(data)) };
        const key = 'storageKey';
        const redisStore = (0, redis_util_1.createRedisMethods)(store);
        const result = yield redisStore.get(key);
        expect(store.get).toBeCalledTimes(1);
        expect(store.get).toBeCalledWith(key);
        expect(result).toEqual(data);
    }));
    it("get method should return null if not stored", () => __awaiter(void 0, void 0, void 0, function* () {
        const store = { set: jest.fn(), get: jest.fn().mockResolvedValue(null) };
        const key = 'storageKey';
        const redisStore = (0, redis_util_1.createRedisMethods)(store);
        const result = yield redisStore.get(key);
        expect(store.get).toBeCalledTimes(1);
        expect(store.get).toBeCalledWith(key);
        expect(result).toEqual(null);
    }));
    it("should be return get method", () => {
        const store = { setEx: jest.fn(), get: jest.fn() };
        const key = 'storageKey';
        const result = (0, redis_util_1.createRedisMethods)(store);
        result.set(key, data);
        expect(store.setEx).toBeCalledTimes(1);
        expect(store.setEx).toBeCalledWith(key, 3600, JSON.stringify(data));
    });
});
