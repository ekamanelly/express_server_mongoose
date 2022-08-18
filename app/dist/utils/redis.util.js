"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedisMethods = void 0;
const createRedisMethods = (redisStore) => {
    return {
        get: (key) => redisStore
            .get(key)
            .then((storedPost) => storedPost ? JSON.parse(storedPost) : storedPost),
        set: (key, data) => redisStore.setEx(key, 3600, JSON.stringify(data)),
    };
};
exports.createRedisMethods = createRedisMethods;
