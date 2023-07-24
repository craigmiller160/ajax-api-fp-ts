import { AxiosInstance, AxiosResponse } from 'axios';
import {
	GraphQLQueryResponse,
	GraphQLRequestConfig,
	UriBodyRequestConfig,
	UriRequestConfig
} from '@craigmiller160/ajax-api';
import { TaskEither } from 'fp-ts/TaskEither';

export interface FpAjaxApi {
	instance: AxiosInstance;
	get: <R>(req: UriRequestConfig) => TaskEither<Error, AxiosResponse<R>>;
	post: <R, B>(
		req: UriBodyRequestConfig<B>
	) => TaskEither<Error, AxiosResponse<R>>;
	put: <R, B>(
		req: UriBodyRequestConfig<B>
	) => TaskEither<Error, AxiosResponse<R>>;
	delete: <R>(req: UriRequestConfig) => TaskEither<Error, AxiosResponse<R>>;
	graphql: <R>(
		req: GraphQLRequestConfig
	) => TaskEither<Error, AxiosResponse<GraphQLQueryResponse<R>>>;
}
