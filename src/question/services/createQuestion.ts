export const createQuestion = (httpResponse: any, database: any) => {
    return async (req: any) => {
      try {
        const { body, param } = req;
        const result = await database.create(body);
        return httpResponse(200, result);
      } catch (error) {
        return httpResponse(400, null);
      }
    };
  };
  