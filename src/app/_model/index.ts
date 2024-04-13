

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
export * from './generic/generic.model';
export * from './user/user.model';
