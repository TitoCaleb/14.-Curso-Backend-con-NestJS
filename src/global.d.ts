type Query = {
  limit?: number;
  offset?: number;
  brand?: string;
};

interface ResponseData<T> {
  data: T[];
  pagination: {
    limit: number;
    offset: number;
  };
}
