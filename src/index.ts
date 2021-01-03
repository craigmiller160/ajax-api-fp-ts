import { ApiConfig, createApi as createBaseApi } from '@craigmiller160/ajax-api';
import { fpGet } from './methods/fpGet';
import { FpAjaxApi } from './types';
import { fpPost } from './methods/fpPost';
import { fpPut } from './methods/fpPut';
import { fpDelete } from './methods/fpDelete';

export const createApi = (config?: ApiConfig): FpAjaxApi => {
    const api = createBaseApi(config);
    return {
        instance: api.instance,
        get: fpGet(api),
        post: fpPost(api),
        put: fpPut(api),
        delete: fpDelete(api)
    };
};
