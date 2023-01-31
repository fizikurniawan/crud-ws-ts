/**
 * Default response structure
 *
 * @property {boolean} success
 * @property {string} status
 * @property {number} code
 * @property {any} data
 */
export interface IResponse {
  success: boolean;
  message: string;
  code: number;
  total?: number;
  page?: number;
  limit?: number;
  data: any;
}

export interface MResponse {
  data: unknown;
}
