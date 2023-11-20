export interface GeneralResponse<T> {
  statusCode: number;
  message: string | T;
  data?: T;
}
