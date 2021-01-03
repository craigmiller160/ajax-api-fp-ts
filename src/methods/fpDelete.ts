import * as TE from 'fp-ts/es6/TaskEither';
import { AjaxApi, UriRequestConfig } from '@craigmiller160/ajax-api';
import { AxiosResponse } from 'axios';
import { handleTEReason } from '../utils/handleTEReason';

export const fpDelete = (api: AjaxApi) =>
    <R>(req: UriRequestConfig): TE.TaskEither<Error, AxiosResponse<R>> =>
        TE.tryCatch<Error,AxiosResponse<R>>(
            () => api.delete<R>(req),
            (reason: unknown) => handleTEReason(reason)
        );
