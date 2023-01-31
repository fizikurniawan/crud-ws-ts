export interface IFiltering {
  fieldName: string;
  query: string;
  [key: string]: any;
  op?: string;
}

export interface IQueryFilters {
  sortBy: any;
  orderBy?: string;
  groupBy?: string;
  direction?: string;
  filters?: Array<IFiltering>;
  orFilters?: Array<IFiltering>;
  cursor?: number;
  amount?: number;
  page?: number;
  limit?: number;
  range?: string;
  term?: string;
  startAt?: Date;
}
