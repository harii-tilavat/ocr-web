

export class GenericResponseList<T> {
  success!: boolean;
  page!: number;
  page_size!: number;
  count!: number;
  previous!: string;
  next!: string;
  message!: string;
  data!: T;
}
export class GenericResponseType {
  [key: string]: string
}
export * from './product-detail/product-detail.model';
export * from './teams-of-shapes/teams-of-shapes.model';
export * from './featured/featured-list.model';
export * from './pricing/pricing.model';
export * from './blog/blog.model';
export * from './review/review.model';
export * from './employee/employee.model';
export * from './doc-detail/document.model';
export * from './user/user.model';
