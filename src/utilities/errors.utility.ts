const createErrorFactory = function (name: string) {
  return class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = name;
    }
  };
};

export const GetHistoryByUserIdError = createErrorFactory(
  "GetHistoryByUserIdError"
);
export const GetHistoryByIdError = createErrorFactory("GetHistoryByIdError");
export const GetAnswerError = createErrorFactory("GetAnswerError");
export const CreateQueryError = createErrorFactory("CreateQueryError");
export const UpdateQueryError = createErrorFactory("UpdateQueryError");
