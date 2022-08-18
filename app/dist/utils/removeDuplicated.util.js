"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicate = void 0;
const removeDuplicate = (duplicatePost, field) => {
    const post = duplicatePost.filter((cur, idx, arr) => arr.findIndex((curTwo) => (curTwo[field] === cur[field])) === idx);
    return post;
};
exports.removeDuplicate = removeDuplicate;
