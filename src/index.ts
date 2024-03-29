import {
	AjaxApi,
	ApiConfig,
	createApi as createBaseApi
} from '@craigmiller160/ajax-api';
import { fpGet } from './methods/fpGet';
import { FpAjaxApi } from './types';
import { fpPost } from './methods/fpPost';
import { fpPut } from './methods/fpPut';
import { fpDelete } from './methods/fpDelete';
import { fpGraphql } from './methods/fpGraphql';

export type * from '@craigmiller160/ajax-api';
export { BEARER_TOKEN_KEY } from '@craigmiller160/ajax-api';
export {
	isAxiosError,
	GraphQLError,
	CsrfError
} from '@craigmiller160/ajax-api';
export { createBaseApi };

export const createApi = (config?: ApiConfig): FpAjaxApi => {
	const api = createBaseApi(config);
	return wrapApi(api);
};

export const wrapApi = (api: AjaxApi): FpAjaxApi => ({
	instance: api.instance,
	get: fpGet(api),
	post: fpPost(api),
	put: fpPut(api),
	delete: fpDelete(api),
	graphql: fpGraphql(api)
});
