import * as TE from 'fp-ts/TaskEither';
import { AjaxApi, UriRequestConfig } from '@craigmiller160/ajax-api';
import { AxiosResponse } from 'axios';
import { handleTEReason } from '../utils/handleTEReason';

export const fpGet =
	(api: AjaxApi) =>
	<R>(req: UriRequestConfig): TE.TaskEither<Error, AxiosResponse<R>> =>
		TE.tryCatch<Error, AxiosResponse<R>>(
			() => api.get<R>(req),
			(reason: unknown) => handleTEReason(reason)
		);
