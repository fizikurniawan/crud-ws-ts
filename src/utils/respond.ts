import { IResponse } from '../interfaces/respond.interface';
/**
 * Standarizes function replies
 *
 * @param {any} message
 * @param {boolean} error
 *
 */
export function respond(message: any, error = false, code?: number, total?: number, page?: number, limit?: number) {
  const response = {
    success: !error,
    code: error ? 404 : code ?? 200,
  } as IResponse;
  if (page && !error) response.page = page;
  if (limit && !error) response.limit = limit;
  if (total || (total == 0 && !error)) response.total = total;
  if (typeof message === 'object') response.data = message;
  else response.message = message;
  return response;
}
