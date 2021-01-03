import { AxiosInstance, AxiosResponse } from 'axios';
import { UriRequestConfig } from '@craigmiller160/ajax-api';
import { TaskEither } from 'fp-ts/es6/TaskEither';

export interface FpAjaxApi {
    instance: AxiosInstance;
    get: <R>(req: UriRequestConfig) => TaskEither<Error, AxiosResponse<R>>;
}
