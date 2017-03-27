declare var __DEBUG__: boolean;
declare var __DEV__: boolean;
declare var __TEST__: boolean;
declare var __PROD__: boolean;
declare var __BASENAME__: boolean;
declare var module: Object;
declare var require: {
  (id: string): any;
  ensure(ids: Array<string>, callback?: { (require: typeof require): void }, chunk?: string): void
}
