enum RType {
  SUCCESS,
  UNAUTHENTICATED,
  FORBIDDEN,
  FAILURE,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

export const response: APIResponse<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "Test",
};
