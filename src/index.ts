import { ApiConfig, createApi as createBaseApi } from '@craigmiller160/ajax-api';
import { fpGet } from './methods/fpGet';

// TODO needs response type
const createApi = (config?: ApiConfig) => {
    const api = createBaseApi(config);
    return {
        get: fpGet(api)
    }
};
