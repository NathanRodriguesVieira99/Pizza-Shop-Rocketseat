// biome-ignore lint/style/noEnum: i need this enum
export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export type HttpRequest<TBody> = {
  endpoint: string;
  method: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
};

export interface IHttpClient {
  request: <TResponse, TBody = unknown>(
    request: HttpRequest<TBody>
  ) => Promise<TResponse>;
}
