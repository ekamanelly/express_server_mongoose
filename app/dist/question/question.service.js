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
exports.searchDbFunc = exports.createQuestionService = void 0;
const question_model_1 = require("./model/question.model");
const createQuestion_1 = require("./services/createQuestion");
const deleteQuestion_1 = require("./services/deleteQuestion");
const updateQuestion_1 = require("./services/updateQuestion");
const getQuestion_1 = require("./services/getQuestion");
const createQuestionService = ({ httpResponse, redisStore, model = question_model_1.Question, searchDb = exports.searchDbFunc }) => {
    return {
        createQuestion: (0, createQuestion_1.createQuestion)(httpResponse, model),
        updateQuestion: (0, updateQuestion_1.updateQuestion)(httpResponse, model),
        getQuestion: (0, getQuestion_1.getQuestionByQueryOrId)({ httpResponse, model, redisStore, searchDb }),
        deleteQuestion: (0, deleteQuestion_1.deleteQuestion)(httpResponse, model),
    };
};
exports.createQuestionService = createQuestionService;
const searchDbFunc = ({ pageNum, search, model, field }) => __awaiter(void 0, void 0, void 0, function* () {
    const page = pageNum || 1;
    const criteria = search ? { [field]: { $regex: search, $options: "i" } } : {};
    var perPage = 5;
    const totalDocs = yield model.find(Object.assign({ isDeleted: false }, criteria)).count();
    const totalPage = Math.ceil(totalDocs / perPage);
    return model
        .find(Object.assign({ isDeleted: false }, criteria))
        .sort({ date: "asc" })
        .limit(perPage)
        .skip(perPage * (page - 1))
        .then((docs) => {
        return {
            docs,
            totalDocs,
            page,
            totalPage,
            hasNextPage: page < totalPage,
            hasPrevPage: page > 1,
        };
    });
});
exports.searchDbFunc = searchDbFunc;
