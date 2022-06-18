import { createQuestion } from "../services/createQuestion";

describe("the getQuestion-handler", () => {
  afterEach(jest.clearAllMocks);
  it("should create a Question collection wit the body", async () => {
    const req = {
      body: { text: "Paul hope you like stubbing function cause I love it" },
    };
    const httpResponse = jest.fn();
    const create = jest.fn();
    create.mockImplementation(() => Promise.resolve(req.body));
    const handler = createQuestion(httpResponse, { create });
    const result = await handler(req);
    console.log(result)
    expect(create).toBeCalledWith(req.body);
    expect(httpResponse).toBeCalledWith(200,req.body);
  });
  it("should response with status 400 when error occurs ", async () => {
    const req = {
      body: { text: "hope you like stubbing function cause I love it" },
    };
    const httpResponse = jest.fn();
    const create = jest.fn();
    create.mockRejectedValue(new Error("internal server error"));
    const handler = createQuestion(httpResponse, { create });
    await handler(req);
    expect(create).toBeCalledWith(req.body);
    expect(httpResponse).toBeCalledWith(400, null);
  });
});
