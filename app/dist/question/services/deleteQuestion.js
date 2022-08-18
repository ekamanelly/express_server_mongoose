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
exports.deleteQuestion = void 0;
const deleteQuestion = (httpResponse, database) => {
    return (req) => __awaiter(void 0, void 0, void 0, function* () {
        const { params: { _id }, } = req;
        try {
            const result = yield database.updateOne({ _id }, { isDeleted: true });
            return httpResponse(200, result);
        }
        catch (error) {
            return httpResponse(400, null);
        }
    });
};
exports.deleteQuestion = deleteQuestion;
