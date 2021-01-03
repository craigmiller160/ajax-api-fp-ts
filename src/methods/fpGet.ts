import * as TE from 'fp-ts/es6/TaskEither';
import { AjaxApi, UriRequestConfig } from '@craigmiller160/ajax-api';
import { AxiosResponse } from 'axios';

export const fpGet = <R>(api: AjaxApi) =>
    (req: UriRequestConfig) => TE.tryCatch<Error,AxiosResponse<R>>(
        () => api.get<R>(req),
        (reason: unknown) => new Error()
    );
