"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importStar(require("express"));
const redis_1 = require("redis");
const redis_util_1 = require("./utils/redis.util");
const httpResponse_util_1 = require("./utils/httpResponse.util");
const question_route_1 = require("./question/question.route");
const question_controller_1 = require("./question/question.controller");
const question_serviceAdaptor_1 = require("./question/question.serviceAdaptor");
const question_service_1 = require("./question/question.service");
const body_parser_1 = require("body-parser");
const createApp = () => {
    const app = (0, express_1.default)();
    const redisClient = (0, redis_1.createClient)();
    redisClient.on("error", (err) => console.log("Redis redisClient Error", err));
    redisClient
        .connect()
        .then(() => console.log("===>> redis is connected: 6379"));
    app.use((0, body_parser_1.urlencoded)({ extended: false }));
    app.use(express_1.default.json());
    app.use((0, question_route_1.questionRoute)(question_controller_1.questionController, (0, question_service_1.createQuestionService)({ httpResponse: httpResponse_util_1.httpResponse, redisStore: (0, redis_util_1.createRedisMethods)(redisClient) }), question_serviceAdaptor_1.questionServiceAdaptor));
    app.use((0, express_1.Router)().get("/", (req, res) => res.status(200).json({
        success: true,
    })));
    return app;
};
exports.createApp = createApp;
