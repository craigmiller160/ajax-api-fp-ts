import * as TE from 'fp-ts/es6/TaskEither';
import { AjaxApi, UriBodyRequestConfig } from '@craigmiller160/ajax-api';
import { AxiosResponse } from 'axios';
import { handleTEReason } from '../utils/handleTEReason';

export const fpPut = (api: AjaxApi) =>
    <B, R>(req: UriBodyRequestConfig<B>): TE.TaskEither<Error, AxiosResponse<R>> =>
        TE.tryCatch<Error, AxiosResponse<R>>(
            () => api.put<B, R>(req),
            (reason: unknown) => handleTEReason(reason)
        );
