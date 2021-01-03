import * as TE from 'fp-ts/es6/TaskEither';
import { AjaxApi, GraphQLQueryResponse, GraphQLRequestConfig } from '@craigmiller160/ajax-api';
import { AxiosResponse } from 'axios';
import { handleTEReason } from '../utils/handleTEReason';

export const fpGraphql = (api: AjaxApi) =>
    <R>(req: GraphQLRequestConfig) =>
        TE.tryCatch<Error,AxiosResponse<GraphQLQueryResponse<R>>>(
            () => api.graphql<R>(req),
            (reason: unknown) => handleTEReason(reason)
        );
