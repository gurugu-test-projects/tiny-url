import { IUrl } from './url.interface';

export enum Status {
  'success',
  'error',
}

interface IEncodeResponseSuccess {
  status: Status.success;
  data: IUrl;
}

interface IEncodeResponseError {
  status: Status.error;
  message: string;
}

export type EncodeResponse = IEncodeResponseSuccess | IEncodeResponseError;

interface IDecodeResponseSuccess {
  status: Status.success;
  data: string;
}

interface IDecodeResponseError {
  status: Status.error;
  message: string;
}

export type DecodeResponse = IDecodeResponseSuccess | IDecodeResponseError;
