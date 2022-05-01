export interface IPagination<T> {
  items: T[];

  page: number;
  size: number;
  total: number;
  }