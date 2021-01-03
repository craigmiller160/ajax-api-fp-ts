import * as TE from 'fp-ts/es6/TaskEither';
import { AjaxApi, UriRequestConfig } from '@craigmiller160/ajax-api';
import { AxiosResponse } from 'axios';
import { handleTEReason } from '../utils/handleTEReason';

export const fpGet = (api: AjaxApi) =>
    <R>(req: UriRequestConfig) =>
        TE.tryCatch<Error,AxiosResponse<R>>(
            () => api.get<R>(req),
            (reason: unknown) => handleTEReason(reason)
        );
