import { ApiConfig, createApi as createBaseApi } from '@craigmiller160/ajax-api';
import { fpGet } from './methods/fpGet';
import { FpAjaxApi } from './types';

export const createApi = (config?: ApiConfig): FpAjaxApi => {
    const api = createBaseApi(config);
    return {
        instance: api.instance,
        get: fpGet(api)
    }
};
