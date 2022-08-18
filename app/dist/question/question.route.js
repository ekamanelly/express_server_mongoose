"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRoute = void 0;
const express_1 = require("express");
const questionRoute = (questionController, questionServices, questionServiceAdaptor) => {
    const router = (0, express_1.Router)();
    const handler = questionServiceAdaptor(questionServices);
    router.all('/api/questions', questionController(handler));
    router.get('/api/questions/:_id', questionController(handler));
    router.patch('/api/questions/:_id', questionController(handler));
    router.delete('/api/questions/:_id', questionController(handler));
    return router;
};
exports.questionRoute = questionRoute;
