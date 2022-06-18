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
exports.getQuestionByQueryOrId = void 0;
const getQuestionByQueryOrId = ({ httpResponse, model, redisStore, searchDb }) => {
    return (req) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { params: { _id }, query: { pageNum, search }, } = req;
            let result;
            if (_id) {
                result = yield redisStore.get(_id);
                if (!result) {
                    result = yield model.findOne({ _id, isDeleted: false }).then((data) => data._doc);
                    redisStore.set(_id, result);
                }
            }
            else {
                const pageKey = pageNum || "1";
                const searchKey = search || "noSearch";
                result = yield redisStore.get(`${pageKey}_${searchKey}`);
                if (!result) {
                    result = yield searchDb({
                        pageNum,
                        search,
                        model: model,
                        field: "text",
                    });
                    redisStore.set(`${pageKey}_${searchKey}`, result);
                }
            }
            return httpResponse(200, result);
        }
        catch (error) {
            console.log(error);
            return httpResponse(400, null);
        }
    });
};
exports.getQuestionByQueryOrId = getQuestionByQueryOrId;
