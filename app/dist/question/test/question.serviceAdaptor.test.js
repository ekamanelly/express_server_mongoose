"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_serviceAdaptor_1 = require("../question.serviceAdaptor");
describe("the Question-service-adaptor", () => {
    const service = jest.fn();
    const allService = {
        getQuestion: service,
        createQuestion: service,
        updateQuestion: service,
        deleteQuestion: service,
    };
    afterEach(jest.clearAllMocks);
    it("should call getQuestion service when a GET request is made", () => {
        const req = { method: "UnKnown" };
        const handler = (0, question_serviceAdaptor_1.questionServiceAdaptor)(allService);
        const result = handler(req);
        expect(service).toBeCalledTimes(0);
        expect(result).toHaveProperty("statusCode", 405);
    });
    it("should call getQuestion service when a GET request is made", () => {
        const req = { method: "GET" };
        const handler = (0, question_serviceAdaptor_1.questionServiceAdaptor)(allService);
        handler(req);
        expect(service).toBeCalledTimes(1);
    });
    it("should call createQuestion service when a POST request is made", () => {
        const req = { method: "POST" };
        const handler = (0, question_serviceAdaptor_1.questionServiceAdaptor)(allService);
        handler(req);
        expect(service).toBeCalledTimes(1);
    });
    it("should call updateQuestion service when a PATCH request is made", () => {
        const req = { method: "PATCH" };
        const handler = (0, question_serviceAdaptor_1.questionServiceAdaptor)(allService);
        handler(req);
        expect(service).toBeCalledTimes(1);
    });
    it("should call deleteQuestion service when a DELETE request is made", () => {
        const req = { method: "DELETE" };
        const handler = (0, question_serviceAdaptor_1.questionServiceAdaptor)(allService);
        handler(req);
        expect(service).toBeCalledTimes(1);
    });
});
